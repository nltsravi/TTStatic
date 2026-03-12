import React from "react";
import { UserPlus } from "lucide-react";

export const metadata = {
  title: "User Registration - Tirwin Talent",
  description: "Register for Tirwin Talent Masterclasses and events.",
};

export default function UserRegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cool-grey)]">
      {/* Hero Header */}
      <section className="hero-band w-full pt-20 pb-16 px-4 md:px-6 mb-12 shadow-md relative">
        <div className="container mx-auto space-y-6 max-w-4xl animate-fade-up text-center relative z-10">
          <div className="mx-auto w-16 h-16 bg-[var(--gold)]/10 text-[var(--gold)] rounded-2xl flex items-center justify-center mb-6">
            <UserPlus className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-[#FDF3DC] tracking-tight">
            User Registration
          </h1>
          <p className="text-xl text-[var(--cool-grey)] font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            Please fill out the form below to register your interest in our programs and masterclasses.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="container mx-auto px-4 md:px-6 pb-24">
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl border border-[var(--border)] overflow-hidden animate-fade-up" style={{ animationDelay: '150ms' }}>
          <div className="w-full h-[800px] md:h-[1200px] bg-[var(--cream)] relative">
            {/* Loading state visual indicator could go here, but iframe handles itself */}
            <iframe 
              src="https://docs.google.com/forms/d/e/1FAIpQLSewPLUL0NJJMrzLmcAVUwzNx7fMfL_7hbfqWI-8jix4Wkjumw/viewform?embedded=true" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }}
              title="User Registration Form"
              allowFullScreen
            >Loading…</iframe>
          </div>
        </div>
      </section>
    </main>
  );
}
