"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Loader2, AlertCircle, BookOpen, Calendar, Tag } from "lucide-react";

const PROGRAM_DETAILS: Record<string, { title: string; fee?: string }> = {
  "operational-logistics-fast-track": {
    title: "Operational Logistics Fast-Track Certificate",
    fee: "₹3,499"
  },
  "logistics-career-compass": {
    title: "Logistics Career Compass",
    fee: "From ₹15,950"
  },
  "mastering-conflict-negotiation": {
    title: "Mastering Conflict & Negotiation",
    fee: "From ₹25,000 + GST"
  },
  "conflict-negotiation": {
    title: "Mastering Conflict and Negotiation",
    fee: "₹999"
  }
};

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const formParam = searchParams.get("form");
  const isInterestForm = formParam === "interested";
  const programId = searchParams.get("program") || "";
  const batchParam = searchParams.get("batch") || "";

  const programInfo = programId ? PROGRAM_DETAILS[programId] || { title: programId.replace(/-/g, " ") } : null;

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
    employment: "Corporate",
    jobTitle: "",
    transactionId: "",
    webinarDate: batchParam || (programId === "operational-logistics-fast-track" ? "Option A: Nov 18 & Nov 19 (4:00 PM – 7:00 PM IST)" : "TBD"),
    expectations: "",
    interestedIn: programId || "",
    iAgree: false
  });

  useEffect(() => {
    if (batchParam) {
      setFormData(prev => ({ ...prev, webinarDate: batchParam }));
    }
  }, [batchParam]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const handleTabSwitch = (type: "enroll" | "interested") => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("form", type);
    router.replace(`/user-registration?${params.toString()}`);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    if (!formData.iAgree) {
      setError("You must agree to the Terms & Conditions, Privacy Policy & Pricing Policy.");
      setIsSubmitting(false);
      return;
    }

    const programDisplayName = programInfo?.title || formData.interestedIn || programId;

    if (isInterestForm) {
      // 1. Submit directly to Google Form for Interest (Live Endpoint)
      // Form URL: https://docs.google.com/forms/d/e/1FAIpQLScyXokqpJhx1NGi6Xc-sC_9HFUlc3RN_6laRttKWCcowCqWXw/viewform
      const googleFormActionUrl = "https://docs.google.com/forms/d/e/1FAIpQLScyXokqpJhx1NGi6Xc-sC_9HFUlc3RN_6laRttKWCcowCqWXw/formResponse";
      const gformData = new URLSearchParams();
      gformData.append("entry.1722455060", formData.firstName);
      gformData.append("entry.83990205", formData.lastName);
      gformData.append("entry.1241286254", formData.email);
      gformData.append("entry.358208186", formData.mobile);

      // Include company name and program/batch details in entry.1964795572
      const companyAndProgramDetails = [
        formData.companyName,
        programDisplayName ? `[Program: ${programDisplayName}]` : "",
        formData.webinarDate && formData.webinarDate !== "TBD" ? `[Batch: ${formData.webinarDate}]` : ""
      ].filter(Boolean).join(" ");
      gformData.append("entry.1964795572", companyAndProgramDetails || programDisplayName || "Interested Prospect");
      gformData.append("entry.1177480067", "I Agree");

      try {
        await fetch(googleFormActionUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: gformData.toString()
        });
      } catch (err) {
        console.error("Google Form submission error:", err);
      }

      // 2. Secondary submission to Google Apps Script if URL provided
      const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
      if (scriptUrl && scriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
        try {
          await fetch(scriptUrl, {
            method: "POST",
            headers: { "Content-Type": "text/plain;charset=utf-8" },
            body: JSON.stringify({
              formType: "interest",
              firstName: formData.firstName,
              lastName: formData.lastName,
              email: formData.email,
              mobile: formData.mobile,
              companyName: companyAndProgramDetails,
              program: programDisplayName,
              webinarDate: formData.webinarDate,
              iAgree: true
            })
          });
        } catch (err) {
          console.warn("Optional Apps script notice:", err);
        }
      }

      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    // Standard Enrollment Flow:
    // 1. Submit directly to Google Form for Enrollment (Live Endpoint)
    // Form URL: https://docs.google.com/forms/d/e/1FAIpQLSewPLUL0NJJMrzLmcAVUwzNx7fMfL_7hbfqWI-8jix4Wkjumw/viewform
    const enrollGoogleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSewPLUL0NJJMrzLmcAVUwzNx7fMfL_7hbfqWI-8jix4Wkjumw/formResponse";
    const enrollGFormData = new URLSearchParams();
    enrollGFormData.append("entry.1722455060", formData.firstName);
    enrollGFormData.append("entry.83990205", formData.lastName);
    enrollGFormData.append("entry.1241286254", formData.email);
    enrollGFormData.append("entry.358208186", formData.mobile);
    enrollGFormData.append("entry.1175485496", formData.employment || "Corporate");

    // Include job title, program and batch in entry.1964795572
    const jobWithProgram = [
      formData.jobTitle || "Enrolled Participant",
      programDisplayName ? `[${programDisplayName}]` : "",
      formData.webinarDate && formData.webinarDate !== "TBD" ? `[${formData.webinarDate}]` : ""
    ].filter(Boolean).join(" ");
    enrollGFormData.append("entry.1964795572", jobWithProgram);
    
    // Note: Google Form strictly validates entry.1514514414 to "TBD"
    enrollGFormData.append("entry.1514514414", "TBD");
    enrollGFormData.append("entry.688307402", formData.transactionId);
    enrollGFormData.append("entry.220571170", "I Agree");

    try {
      await fetch(enrollGoogleFormUrl, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: enrollGFormData.toString()
      });
    } catch (err) {
      console.error("Google Form enroll error:", err);
    }

    // 2. Secondary submission to Google Apps Script if configured
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (scriptUrl && scriptUrl !== "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      try {
        await fetch(scriptUrl, {
          method: "POST",
          headers: { "Content-Type": "text/plain;charset=utf-8" },
          body: JSON.stringify({
            formType: "enroll",
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            mobile: formData.mobile,
            employment: formData.employment,
            jobTitle: jobWithProgram,
            program: programDisplayName,
            webinarDate: formData.webinarDate,
            transactionId: formData.transactionId,
            iAgree: true
          })
        });
      } catch (err) {
        console.warn("Optional Apps script notice:", err);
      }
    }

    setIsSuccess(true);
    setIsSubmitting(false);
  };

  if (isSuccess) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 text-center animate-fade-up">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">
          {isInterestForm ? "Interest Registered Successfully!" : "Enrollment Submitted Successfully!"}
        </h2>
        <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
          {isInterestForm 
            ? "Thank you for expressing interest. Our team has received your submission and will contact you shortly with cohort schedules and webinar onboarding details."
            : "Your enrollment request and payment transaction reference have been recorded. Our team will verify and send your official confirmation and Zoom access details via email."}
        </p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/training" className="px-6 py-2.5 bg-[var(--navy)] text-white text-sm font-bold rounded-lg hover:bg-[#1a2744] transition-all">
            Explore Training Programs
          </Link>
          <Link href="/" className="px-6 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium rounded-lg hover:bg-gray-50 transition-all">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full p-4 md:p-8">
      {/* Switcher Tabs */}
      <div className="flex border-b border-gray-200 mb-6 gap-2">
        <button
          type="button"
          onClick={() => handleTabSwitch("enroll")}
          className={`pb-3 px-3 text-sm font-bold transition-all border-b-2 flex items-center gap-1.5 ${
            !isInterestForm
              ? "border-[var(--gold)] text-[var(--navy)]"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <span>Enroll Now</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-[var(--gold)]/20 text-[var(--navy)] font-bold">Direct Seat</span>
        </button>
        <button
          type="button"
          onClick={() => handleTabSwitch("interested")}
          className={`pb-3 px-3 text-sm font-bold transition-all border-b-2 flex items-center gap-1.5 ${
            isInterestForm
              ? "border-[var(--gold)] text-[var(--navy)]"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <span>I am Interested</span>
          <span className="text-[10px] px-1.5 py-0.5 rounded bg-gray-100 text-gray-600 font-medium">Inquiry</span>
        </button>
      </div>

      {/* Program Context Banner */}
      {programInfo && (
        <div className="mb-6 p-4 rounded-xl bg-[var(--cool-grey)] border border-[var(--gold)]/30 flex items-start justify-between gap-3">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
              <span className="text-[11px] font-bold text-[var(--gold)] uppercase tracking-wider">
                {isInterestForm ? "Selected Program Interest" : "Confirming Enrollment For"}
              </span>
            </div>
            <h4 className="text-base font-bold text-[var(--navy)] leading-snug">
              {programInfo.title}
            </h4>
            {formData.webinarDate && formData.webinarDate !== "TBD" && (
              <p className="text-xs text-gray-600 flex items-center gap-1.5 mt-1">
                <Calendar className="w-3.5 h-3.5 text-[var(--gold)]" />
                <span>Batch: <strong>{formData.webinarDate}</strong></span>
              </p>
            )}
          </div>
          {programInfo.fee && (
            <div className="flex-shrink-0 text-right">
              <span className="text-[10px] text-gray-500 uppercase block">Fee</span>
              <span className="text-base font-extrabold text-[var(--navy)] bg-white px-2.5 py-1 rounded-md border border-gray-200 shadow-sm inline-block">
                {programInfo.fee}
              </span>
            </div>
          )}
        </div>
      )}

      {/* Header */}
      <div className="mb-6 border-b border-gray-100 pb-4">
        <span className="text-[11px] font-bold text-[var(--gold)] uppercase tracking-wider">
          {isInterestForm ? "Program Interest" : "Direct Enrollment"}
        </span>
        <h2 className="text-xl md:text-2xl font-extrabold text-[var(--navy)]">
          {isInterestForm ? "Express Interest Registration" : "Complete Registration"}
        </h2>
        <p className="text-xs md:text-sm text-gray-500 mt-1">
          {isInterestForm 
            ? "Fill out your details below to register interest for upcoming cohorts." 
            : "Complete payment via UPI QR code below and provide details to confirm your seat."}
        </p>
      </div>

      {error && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">First Name *</label>
            <input required type="text" name="firstName" value={formData.firstName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="John" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Last Name *</label>
            <input required type="text" name="lastName" value={formData.lastName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="Doe" />
          </div>
        </div>

        {/* Contact Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Email Address *</label>
            <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="john@example.com" />
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Mobile Number *</label>
            <input required type="tel" name="mobile" value={formData.mobile} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="+91 9876543210" />
          </div>
        </div>

        {/* Interest Form Specific Field: Company / College Name */}
        {isInterestForm ? (
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Company / College Name</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="e.g. Tirwin Logistics / University" />
          </div>
        ) : (
          /* Enrollment Fields: Employment & Job Title */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Employment Status *</label>
              <select required name="employment" value={formData.employment} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white">
                <option value="Corporate">Corporate</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Job Title / Designation</label>
              <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="e.g. Logistics Executive" />
            </div>
          </div>
        )}

        {/* Batch / Session Selection for both flows */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-700">Preferred Batch / Date *</label>
          <select 
            required 
            name="webinarDate" 
            value={formData.webinarDate} 
            onChange={handleChange} 
            className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white font-medium text-[var(--navy)]"
          >
            {programId === "operational-logistics-fast-track" ? (
              <>
                <option value="Option A: Nov 18 & Nov 19 (4:00 PM – 7:00 PM IST)">
                  Option A: Nov 18 & Nov 19 (4:00 PM – 7:00 PM IST)
                </option>
                <option value="Option B: Nov 25 & Nov 26 (4:00 PM – 7:00 PM IST)">
                  Option B: Nov 25 & Nov 26 (4:00 PM – 7:00 PM IST)
                </option>
                <option value="TBD">TBD / Flexible Future Batch</option>
              </>
            ) : (
              <>
                <option value="TBD">TBD / Flexible Batch</option>
                <option value="Option A: Nov 18 & Nov 19 (4:00 PM – 7:00 PM IST)">
                  Option A: Nov 18 & Nov 19 (4:00 PM – 7:00 PM IST)
                </option>
                <option value="Option B: Nov 25 & Nov 26 (4:00 PM – 7:00 PM IST)">
                  Option B: Nov 25 & Nov 26 (4:00 PM – 7:00 PM IST)
                </option>
              </>
            )}
          </select>
        </div>

        {/* Conditional Enroll Fields (QR Code & Transaction ID) */}
        {!isInterestForm && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="flex-shrink-0 bg-white p-2.5 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center">
              <div className="relative w-28 h-28 mb-1">
                <Image src="/payment-qr.png" alt="Payment QR Code" fill className="object-contain" />
              </div>
              <p className="text-[11px] text-[var(--navy)] font-bold text-center">
                {programInfo?.fee ? `Pay ${programInfo.fee}` : "Scan to Pay"}
              </p>
              <p className="text-[9px] text-gray-500">UPI / QR Code</p>
            </div>

            <div className="flex-grow space-y-3 w-full">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">UPI Transaction ID / UTR Number *</label>
                <input 
                  required 
                  type="text" 
                  name="transactionId" 
                  value={formData.transactionId} 
                  onChange={handleChange} 
                  className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none font-mono" 
                  placeholder="e.g. 12-digit UPI Ref / UTR No." 
                />
                <p className="text-[11px] text-gray-500">Enter the transaction reference from your payment confirmation.</p>
              </div>
            </div>
          </div>
        )}

        {/* T&C Agreement */}
        <div className="pt-3 border-t border-gray-100">
          <label className="flex items-start gap-2 cursor-pointer group">
            <div className="relative flex items-center mt-0.5">
              <input type="checkbox" name="iAgree" checked={formData.iAgree} onChange={handleChange} className="w-4 h-4 border-2 border-gray-300 rounded text-[var(--gold)] focus:ring-[var(--gold)] transition-colors cursor-pointer" />
            </div>
            <span className="text-xs text-gray-600 leading-snug">
              By submitting this form, I have read and understand the <a href="/terms-conditions" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Terms & Conditions</a>, <a href="/privacy-policy" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Privacy Policy</a> & <a href="/pricing-policy" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Pricing Policy</a>.
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <div className="pt-3">
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-3 bg-[var(--navy)] hover:bg-[#1a2744] text-white text-sm font-bold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Submitting Registration...
              </>
            ) : (
              <>
                {isInterestForm ? "Submit Interest" : "Confirm Enrollment"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
