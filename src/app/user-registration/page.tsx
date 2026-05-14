import React, { Suspense } from "react";
import { UserPlus } from "lucide-react";
import Image from "next/image";
import RegistrationForm from "./RegistrationForm";

export const metadata = {
  title: "User Registration - Tirwin Talent",
  description: "Register for Tirwin Talent Masterclasses and events.",
};

export default function UserRegistrationPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cool-grey)]">
      {/* Hero Header */}
      <section className="hero-band w-full pt-20 pb-12 px-4 md:px-6 mb-8 shadow-md relative">
        <div className="container mx-auto space-y-4 max-w-4xl animate-fade-up text-center relative z-10">
          <div className="mx-auto w-12 h-12 bg-[var(--gold)]/10 text-[var(--gold)] rounded-2xl flex items-center justify-center mb-4">
            <UserPlus className="w-6 h-6" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#FDF3DC] tracking-tight">
            User Registration
          </h1>
          <p className="text-lg md:text-xl text-[var(--cool-grey)] font-light leading-relaxed max-w-2xl mx-auto opacity-90">
            Please fill out the form below to register your interest in our programs and masterclasses.
          </p>
        </div>
      </section>

      {/* Form Container */}
      <section className="container mx-auto px-4 md:px-6 pb-20">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border border-[var(--border)] overflow-hidden animate-fade-up flex flex-col lg:flex-row" style={{ animationDelay: '150ms' }}>
          
          {/* Left Side Image */}
          <div className="hidden lg:block lg:w-5/12 relative bg-[var(--navy)]">
            <Image 
              src="/registration-hero.png" 
              alt="Career Growth" 
              fill 
              className="object-cover opacity-90"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/40 to-transparent"></div>
            <div className="absolute bottom-10 left-10 right-10">
              <h3 className="text-3xl font-bold text-white mb-2 leading-tight">Elevate Your Career in Logistics</h3>
              <p className="text-white/80 text-sm">Join industry veterans and master the global supply chain network.</p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="w-full lg:w-7/12 h-auto min-h-[500px] bg-white relative py-4 md:py-6">
            <Suspense fallback={<div className="w-full h-full min-h-[400px] flex items-center justify-center text-[var(--gold)]">Loading form...</div>}>
              <RegistrationForm />
            </Suspense>
          </div>

        </div>
      </section>
    </main>
  );
}
