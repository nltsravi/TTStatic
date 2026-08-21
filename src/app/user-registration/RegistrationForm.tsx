"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const isInterestForm = searchParams.get("form") === "interested";
  const programId = searchParams.get("program");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    companyName: "",
    employment: "",
    jobTitle: "",
    transactionId: "",
    webinarDate: "TBD",
    expectations: "",
    interestedIn: programId || "",
    iAgree: false
  });

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
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

    if (isInterestForm) {
      // Submission flow matching Google Form: https://docs.google.com/forms/d/e/1FAIpQLScyXokqpJhx1NGi6Xc-sC_9HFUlc3RN_6laRttKWCcowCqWXw/viewform
      const googleFormActionUrl = "https://docs.google.com/forms/d/e/1FAIpQLScyXokqpJhx1NGi6Xc-sC_9HFUlc3RN_6laRttKWCcowCqWXw/formResponse";
      const gformData = new URLSearchParams();
      gformData.append("entry.1722455060", formData.firstName);
      gformData.append("entry.83990205", formData.lastName);
      gformData.append("entry.1241286254", formData.email);
      gformData.append("entry.358208186", formData.mobile);
      gformData.append("entry.1964795572", formData.companyName || "");
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

      // Secondary submission to Google Apps Script if URL provided
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
              companyName: formData.companyName,
              program: programId || formData.interestedIn,
              iAgree: true
            })
          });
        } catch (err) {
          console.error("Apps script error:", err);
        }
      }

      setIsSuccess(true);
      setIsSubmitting(false);
      return;
    }

    // Standard Enrollment Flow
    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;
    if (!scriptUrl || scriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      setError("Configuration Error: Google Apps Script URL is missing.");
      setIsSubmitting(false);
      return;
    }

    const payload = {
      formType: "enroll",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      employment: formData.employment,
      jobTitle: formData.jobTitle,
      webinarDate: formData.webinarDate,
      transactionId: formData.transactionId,
      iAgree: true
    };

    try {
      const response = await fetch(scriptUrl, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify(payload)
      });
      const data = await response.json();
      if (data.status === "success") {
        setIsSuccess(true);
      } else {
        setError(data.message || "Failed to submit. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please check your internet connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center p-6 md:p-10 text-center animate-fade-up">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4 shadow-sm">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h2 className="text-2xl font-bold text-[var(--navy)] mb-2">Registration Submitted!</h2>
        <p className="text-gray-600 text-sm max-w-md mb-6 leading-relaxed">
          {isInterestForm 
            ? "Thank you for registering your interest. Our team will contact you shortly with the cohort details and schedule."
            : "Your enrollment request and payment reference have been received. We will verify and confirm your seat via email."}
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
            : "Complete payment via QR code and provide details to confirm your seat."}
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

        {/* Interest Form Specific Field: Company Name */}
        {isInterestForm ? (
          <div className="space-y-1">
            <label className="text-xs font-semibold text-gray-700">Company Name</label>
            <input type="text" name="companyName" value={formData.companyName} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="e.g. Tirwin Logistics" />
          </div>
        ) : (
          /* Enrollment Fields: Employment & Job Title */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Employment Status *</label>
              <select required name="employment" value={formData.employment} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white">
                <option value="" disabled>Select</option>
                <option value="Corporate">Corporate</option>
                <option value="Self Employed">Self Employed</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Job Title</label>
              <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="e.g. Manager" />
            </div>
          </div>
        )}

        {/* Conditional Enroll Fields (QR Code) */}
        {!isInterestForm && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col sm:flex-row items-center sm:items-start gap-4">
            <div className="flex-shrink-0 bg-white p-2 rounded-lg shadow border border-gray-100 flex flex-col items-center">
              <div className="relative w-24 h-24 mb-1">
                <Image src="/payment-qr.png" alt="Payment QR Code" fill className="object-contain" />
              </div>
              <p className="text-[10px] text-gray-500 font-medium text-center">Scan to Pay</p>
            </div>

            <div className="flex-grow space-y-3 w-full">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Session Date *</label>
                  <select required name="webinarDate" value={formData.webinarDate} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white">
                    <option value="TBD">TBD</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700">Transaction ID *</label>
                  <input required type="text" name="transactionId" value={formData.transactionId} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none" placeholder="UPI Ref No." />
                </div>
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
                Submitting...
              </>
            ) : (
              <>
                {isInterestForm ? "Submit Interest" : "Complete Registration"}
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
