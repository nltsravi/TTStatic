"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";

export default function RegistrationForm() {
  const searchParams = useSearchParams();
  const isInterestForm = searchParams.get("form") === "interested";

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    employment: "",
    jobTitle: "",
    transactionId: "",
    webinarDate: "TBD",
    expectations: "",
    interestedIn: "",
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
      setError("You must agree to the Terms & Conditions.");
      setIsSubmitting(false);
      return;
    }

    const scriptUrl = process.env.NEXT_PUBLIC_GOOGLE_SCRIPT_URL;

    if (!scriptUrl || scriptUrl === "YOUR_GOOGLE_APPS_SCRIPT_URL_HERE") {
      setError("Configuration Error: Google Apps Script URL is missing.");
      setIsSubmitting(false);
      return;
    }

    // Prepare JSON Payload
    const payload = {
      formType: isInterestForm ? "interest" : "enroll",
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      mobile: formData.mobile,
      employment: formData.employment,
      jobTitle: formData.jobTitle,
      expectations: isInterestForm ? formData.expectations : undefined,
      interestedIn: isInterestForm ? formData.interestedIn : undefined,
      webinarDate: !isInterestForm ? formData.webinarDate : undefined,
      transactionId: !isInterestForm ? formData.transactionId : undefined,
      iAgree: true
    };

    try {
      // Submit to Google Apps Script Webhook
      // Using 'text/plain' Content-Type avoids CORS preflight requests which Apps Script doesn't handle well
      const response = await fetch(scriptUrl, {
        method: "POST",
        body: JSON.stringify(payload),
      });
      
      const result = await response.json();

      if (result.status === "success") {
        setIsSuccess(true);
      } else {
        throw new Error(result.message || "Submission failed");
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while submitting. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center p-8 text-center animate-fade-in">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <CheckCircle2 className="w-10 h-10 text-green-600" />
        </div>
        <h2 className="text-3xl font-bold text-[var(--navy)] mb-4">Registration Successful!</h2>
        <p className="text-lg text-gray-600 max-w-md">
          Thank you for your submission. Your details have been recorded and our team will get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <div className="p-4 md:p-6 w-full max-w-3xl mx-auto h-full overflow-y-auto">
      <div className="mb-4 border-b pb-3">
        <h2 className="text-xl md:text-2xl font-bold text-[var(--navy)] mb-1">
          {isInterestForm ? "Express Your Interest" : "Complete Your Enrollment"}
        </h2>
        <p className="text-sm text-gray-500">Please fill out the details below.</p>
      </div>

      {error && (
        <div className="bg-red-50 text-red-600 p-3 rounded-lg mb-4 flex items-center gap-2 text-sm">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          <p>{error}</p>
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

        {/* Employment & Job Title */}
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

        {/* Conditional Interest Fields */}
        {isInterestForm && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Program Interested In *</label>
              <select required name="interestedIn" value={formData.interestedIn} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white">
                <option value="" disabled>Select</option>
                <option value="GENCLS000 - New Upcoming Webinars">New Webinars</option>
                <option value="CLSMC0001 - International Freight Forwarding & Contract Logistics Training">Freight Forwarding</option>
                <option value="CLSMC0002 - Mastering Conflict and Negotiation for Emerging Leaders in Logistics">Conflict & Negotiation</option>
              </select>
            </div>
            
            <div className="space-y-1">
              <label className="text-xs font-semibold text-gray-700">Expectations? *</label>
              <select required name="expectations" value={formData.expectations} onChange={handleChange} className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-[var(--gold)] focus:border-transparent transition-all outline-none bg-white">
                <option value="" disabled>Select</option>
                <option value="Alternate Dates">Alternate Dates</option>
                <option value="More Program Information">More Info</option>
                <option value="Bulk Discounts for Corporates">Bulk Discounts</option>
              </select>
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
              By submitting this form, I agree to the <a href="/terms-conditions" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Terms & Conditions</a>, <a href="/privacy-policy" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Privacy Policy</a> & <a href="/pricing-policy" target="_blank" className="text-[var(--navy)] font-semibold hover:underline">Pricing Policy</a>.
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
