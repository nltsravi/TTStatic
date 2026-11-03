"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import trainingData from "@/data/training.json";
import { CanonicalUrl } from "@/components/CanonicalUrl";
import { 
  GraduationCap, 
  Briefcase, 
  Building, 
  MapPin, 
  CheckCircle2, 
  MonitorPlay, 
  Users, 
  TrendingUp, 
  Award,
  ChevronDown,
  Calendar,
  Clock,
  Video,
  Tag,
  ArrowRight,
  Sparkles,
  FileCheck2,
  Percent,
  ShieldCheck,
  Radio
} from "lucide-react";

export default function OperationalLogisticsFastTrackPage() {
  const training = trainingData.find((t) => t.id === "operational-logistics-fast-track") as any;

  if (!training) {
    notFound();
  }

  // Batch Options State
  const [selectedBatch, setSelectedBatch] = useState<string>("option-a");
  const currentBatch = training.batchOptions?.find((b: any) => b.id === selectedBatch) || training.batchOptions?.[0];

  // Accordion State
  const [openBlock, setOpenBlock] = useState<number | null>(0);

  // Audience Icons Mapper
  const audienceIcons = [GraduationCap, Briefcase, Users, Building];
  
  // Value Hooks Icons Mapper
  const hookIcons = [Tag, Award, Percent, Users, FileCheck2];

  // Encode URLs for enrollment & interest
  const batchLabel = currentBatch ? `${currentBatch.name} (${currentBatch.time})` : "Option A: Nov 18 & Nov 19";
  const enrollUrl = `/user-registration?form=enroll&program=operational-logistics-fast-track&batch=${encodeURIComponent(batchLabel)}`;
  const interestUrl = `/user-registration?form=interested&program=operational-logistics-fast-track&batch=${encodeURIComponent(batchLabel)}`;

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cream)] overflow-hidden">
      <CanonicalUrl />

      {/* 1. Hero Section */}
      <section className="relative w-full pt-32 sm:pt-36 md:pt-40 pb-28 md:pb-32 px-4 md:px-6 flex flex-col items-center justify-center text-center overflow-hidden bg-[var(--navy)]">
        <Image 
          src={training.heroImage || "/master-classes-for-emerging-leaders.png"}
          alt="Operational Logistics Fast-Track Certificate Banner"
          fill
          className="object-cover z-0 opacity-40"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/90 via-[var(--navy)]/80 to-[var(--navy)] z-0"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto space-y-6 animate-fade-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--gold)]/20 border border-[var(--gold)]/40 text-[var(--gold)] text-xs md:text-sm font-semibold tracking-wider uppercase backdrop-blur-sm">
            <Sparkles className="w-4 h-4" />
            Special Launch Offer • 4-Module Boot Camp
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto drop-shadow-xl font-serif">
            {training.title}
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-[var(--gold-light)] font-serif italic max-w-3xl mx-auto">
            “Master International Freight Operations in Just 6 Hours!”
          </p>

          <p className="text-sm sm:text-base md:text-lg text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
            Pivoted from our 16-module masterclass into an accessible, high-conversion intensive certification boot camp for immediate operational readiness in international freight forwarding.
          </p>

          {/* Unified Height Aligned Price & Perk Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-3 pb-2 max-w-3xl mx-auto w-full">
            <div className="w-full sm:w-auto h-14 px-6 rounded-xl bg-gradient-to-r from-amber-400 via-[var(--gold)] to-amber-500 text-[var(--navy)] font-extrabold text-xl md:text-2xl shadow-lg flex items-center justify-center gap-3 flex-shrink-0">
              <Tag className="w-6 h-6 flex-shrink-0 text-[var(--navy)]" />
              <span>Launch Price: {training.fee}</span>
              <span className="text-xs md:text-sm font-semibold line-through text-[var(--navy)]/65 ml-1">
                {training.originalFee || "₹20,000"}
              </span>
            </div>
            
            <div className="w-full sm:w-auto h-14 px-5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white flex flex-col justify-center text-center sm:text-left">
              <span className="text-xs md:text-sm font-bold text-amber-300 flex items-center justify-center sm:justify-start gap-1.5 leading-tight">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                FREE Placement Support
              </span>
              <span className="text-[11px] md:text-xs text-white/80 leading-tight">
                + 10% Alumni Discount on future programs
              </span>
            </div>
          </div>

          {/* Dual CTAs in Hero */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10 max-w-md mx-auto sm:max-w-none">
            <Link 
              href={enrollUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold text-base md:text-lg px-8 py-3.5 rounded-xl shadow-[0_4px_20px_rgba(14,165,233,0.45)] hover:scale-105 transition-all"
            >
              Enroll Now – {training.fee}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>

            <Link 
              href={interestUrl}
              className="w-full sm:w-auto inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border-2 border-[var(--gold)] text-[var(--gold-pale)] hover:text-white font-bold text-base md:text-lg px-7 py-3.5 rounded-xl transition-all shadow-md backdrop-blur-sm"
            >
              I am interested
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Interactive Batch Selection Card */}
      <section className="px-4 md:px-6 relative z-20 -mt-16 md:-mt-20">
        <div className="container mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-6 md:p-8 shadow-2xl border-2 border-[var(--gold)]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-gray-100">
              <div className="space-y-1">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)] font-sans">
                  Live Online Delivery
                </span>
                <h3 className="text-2xl md:text-3xl font-bold font-serif text-[var(--navy)]">
                  Select Your Preferred Batch
                </h3>
                <p className="text-sm text-gray-500 font-sans">
                  Choose between two convenient batch options. Both cover all 4 modules (6 hours total).
                </p>
              </div>
              <div className="flex items-center gap-2 bg-[var(--cool-grey)] px-4 py-2 rounded-xl text-xs font-semibold text-[var(--navy)] self-start md:self-auto border border-gray-200/60 font-sans">
                <Radio className="w-4 h-4 text-emerald-600 animate-pulse" />
                Live Interactive Zoom Session
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 pt-6">
              {training.batchOptions?.map((batch: any) => {
                const isSelected = selectedBatch === batch.id;
                return (
                  <div 
                    key={batch.id}
                    onClick={() => setSelectedBatch(batch.id)}
                    className={`cursor-pointer rounded-2xl p-5 border-2 transition-all flex flex-col justify-between ${
                      isSelected 
                        ? 'border-[#0ea5e9] bg-[#0ea5e9]/5 shadow-md ring-2 ring-[#0ea5e9]/20' 
                        : 'border-gray-200 hover:border-gray-300 bg-white shadow-sm'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0 transition-colors ${isSelected ? 'border-[#0ea5e9]' : 'border-gray-300'}`}>
                          {isSelected && <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5e9]" />}
                        </div>
                        <div className="font-sans font-bold text-base md:text-lg text-[var(--navy)] leading-tight">
                          {batch.name}
                        </div>
                      </div>
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold font-sans flex-shrink-0 ${isSelected ? 'bg-[#0ea5e9] text-white' : 'bg-gray-100 text-gray-600'}`}>
                        {batch.id === 'option-a' ? 'Batch A' : 'Batch B'}
                      </span>
                    </div>

                    <div className="space-y-1.5 pl-8 pt-2 border-t border-gray-100 text-xs md:text-sm text-gray-600 font-sans">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                        <span className="font-semibold text-gray-800">{batch.dates}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                        <span>{batch.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Video className="w-4 h-4 text-[var(--gold)] flex-shrink-0" />
                        <span>{batch.format}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Action bar for selected batch */}
            <div className="mt-6 pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-left w-full sm:w-auto">
                <span className="text-xs text-gray-500 uppercase tracking-wider block font-sans">Selected Batch:</span>
                <span className="text-sm md:text-base font-bold text-[var(--navy)] font-sans">
                  {currentBatch?.name} • {currentBatch?.time}
                </span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto font-sans">
                <Link 
                  href={enrollUrl}
                  className="px-6 py-3 bg-[#0ea5e9] hover:bg-[#0284c7] text-white text-sm font-bold rounded-xl shadow-md transition-all text-center"
                >
                  Claim Your Spot @ {training.fee}
                </Link>
                <Link 
                  href={interestUrl}
                  className="px-6 py-3 border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-[var(--navy)] hover:text-white text-sm font-semibold rounded-xl transition-all text-center"
                >
                  I am interested
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Program Overview & Objective */}
      <section className="py-12 px-4 md:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Overview Card */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video">
                <Image src="/program-overview.png" alt="Program Overview" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-4">Program Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light whitespace-pre-line mb-4">
                  {training.description}
                </p>
                <div className="bg-[var(--cool-grey)] p-4 rounded-xl border-l-4 border-[var(--gold)] text-sm text-[var(--navy)] font-medium">
                  <strong>Why Fast-Track?</strong> Traditional diploma courses take months. This 6-hour intensive bootcamp concentrates on the practical execution skills required on day 1 in operations.
                </div>
              </div>
            </div>

            {/* Objective Card */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video">
                <Image src="/program-objective.png" alt="Program Objective" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-4">Program Objective</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light mb-6">
                  {training.objective}
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Real-world case studies & simulated carrier bookings</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Practical document-auditing templates (HBL, MBL, HAWB)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                    <span>Live Q&A with 25+ years veteran facilitators</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Target Audience ("Who Is It For?") */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl space-y-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">Target Audience</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] mt-2">Who Is This Program For?</h2>
            <p className="text-base text-gray-500 mt-2">Designed specifically for career starters and professionals seeking immediate operational clarity in freight forwarding.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {training.targetAudience?.map((item: string, idx: number) => {
              const Icon = audienceIcons[idx % audienceIcons.length];
              return (
                <div key={idx} className="relative bg-gradient-to-br from-[var(--navy)] to-[#0f172a] p-8 rounded-2xl shadow-lg border border-[var(--navy)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex items-start gap-6 overflow-hidden text-left">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-all"></div>
                  
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/10 group-hover:border-[var(--gold)]/30 transition-all relative z-10">
                    <Icon className="w-7 h-7 text-white group-hover:text-[var(--gold)] transition-colors" />
                  </div>
                  <div className="relative z-10">
                    <span className="text-xs text-[var(--gold)] font-bold uppercase tracking-wider block mb-1">
                      {idx === 0 ? "Fresh Graduates" : idx === 1 ? "Entry-Level Staff" : idx === 2 ? "Logistics Executives" : "Trade Professionals"}
                    </span>
                    <p className="text-lg text-white font-medium leading-snug">{item}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Key Value Hooks & Campaign Incentives */}
      <section className="py-14 bg-[var(--navy)] text-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">Why Choose Tirwin Talent</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-white mt-2">Key Value Hooks & Campaign Incentives</h2>
            <p className="text-white/70 max-w-2xl mx-auto mt-2 font-light">Every registration includes career-advancing incentives to maximize your return on learning.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {training.features?.map((feature: any, idx: number) => {
              const Icon = hookIcons[idx % hookIcons.length];
              return (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-[var(--gold)]/40 transition-all group flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-[var(--gold)]/15 flex items-center justify-center text-[var(--gold)] mb-5 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                  <p className="text-white/75 font-light text-sm leading-relaxed flex-grow">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Expected Outcomes */}
      <section className="py-12 px-4 md:px-6 bg-[var(--cream)]">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">Tangible Results</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] mt-2">What You Will Master</h2>
          </div>

          <div className="bg-white rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100">
            <ul className="space-y-5">
              {training.outcomes?.map((item: string, idx: number) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-7 h-7 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700 leading-relaxed font-light">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 7. Curriculum Coverage (Interactive 4 Operations Modules) */}
      <section className="py-14 px-4 md:px-6 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">Curriculum Coverage</span>
            <h2 className="text-4xl font-bold font-serif text-[var(--navy)] mt-2 mb-3">4 Operations Modules</h2>
            <p className="text-lg text-gray-500 font-light">6 Hours total across 2 days (3 hours/day) with interactive case studies & Q&A.</p>
          </div>

          <div className="space-y-4">
            {training.blocks?.map((block: any, idx: number) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openBlock === idx ? 'border-[var(--gold)] shadow-lg' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenBlock(openBlock === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-7 text-left"
                >
                  <div className="flex items-center gap-5">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0 transition-colors ${openBlock === idx ? 'bg-[var(--gold)] text-[var(--navy)]' : 'bg-[var(--navy)] text-white'}`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-[var(--navy)]">{block.title}</h3>
                      <p className={`text-sm md:text-base transition-colors mt-0.5 line-clamp-1 ${openBlock === idx ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                        {block.subtitle}
                      </p>
                    </div>
                  </div>
                  <ChevronDown className={`w-6 h-6 text-gray-400 flex-shrink-0 transition-transform duration-300 ${openBlock === idx ? 'rotate-180 text-[var(--gold)]' : ''}`} />
                </button>
                
                <AnimatePresence>
                  {openBlock === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-2 pl-[4.5rem] md:pl-[5.5rem]">
                        <p className="text-gray-600 italic text-sm mb-5 bg-[var(--cool-grey)] p-3 rounded-lg border-l-2 border-[var(--gold)]">
                          {block.subtitle}
                        </p>
                        <ul className="space-y-3 border-l-2 border-gray-100 pl-6">
                          {block.modules.map((mod: string, midx: number) => (
                            <li key={midx} className="relative text-base text-gray-700 flex items-start gap-3">
                              <span className="w-2 h-2 rounded-full bg-[var(--gold)] mt-2 flex-shrink-0"></span>
                              <span>{mod}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Pricing & Enrollment Offer Card */}
      <section className="py-14 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--gold)]">Affordable Professional Training</span>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] mt-2">Registration & Pricing</h2>
            <p className="text-base text-gray-500 font-light mt-1">Enroll directly or express interest to receive batch details.</p>
          </div>

          <div className="relative rounded-3xl p-8 md:p-12 border-2 border-[var(--navy)] bg-[#f8fafc] shadow-2xl flex flex-col">
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--navy)] px-6 py-1.5 rounded-full text-xs md:text-sm font-bold uppercase tracking-widest shadow-md">
              Special Launch Offer
            </div>

            <div className="text-center mt-2 mb-6">
              <h3 className="text-2xl md:text-3xl font-bold text-[var(--navy)] mb-2">Fast-Track Certificate Pass</h3>
              <div className="flex items-baseline justify-center gap-3">
                <span className="text-5xl font-extrabold text-[var(--navy)]">{training.fee}</span>
                <span className="text-xl text-gray-400 line-through">₹20,000</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Inclusive of all 4 modules, live Zoom access & placement assistance.</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 my-6 py-6 border-y border-gray-200">
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>6 Hours Live Zoom Masterclass across 2 days</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>FREE Job Placement Support across India</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>10% Alumni Discount on future Tirwin programs</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-gray-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <span>Official Tirwin Talent Fast-Track Certificate</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link 
                href={enrollUrl}
                className="w-full py-4 rounded-xl text-lg font-bold text-center bg-[#0ea5e9] hover:bg-[#0284c7] text-white transition-all shadow-md"
              >
                Enroll Now – {training.fee}
              </Link>
              <Link 
                href={interestUrl}
                className="w-full py-4 rounded-xl text-lg font-bold text-center bg-transparent border-2 border-[var(--gold)] text-[var(--navy)] hover:bg-[var(--gold)] transition-all"
              >
                I am interested
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 9. Workshop Details & Facilitator Summary Footer */}
      <section className="py-14 px-4 md:px-6 bg-[var(--cream)] border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          
          {/* Quick Facts */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-10">
            <div className="bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Dates</p>
                <p className="font-bold text-sm text-[var(--navy)]">Nov 18-19 or Nov 25-26</p>
              </div>
            </div>
            
            <div className="bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Duration</p>
                <p className="font-bold text-sm text-[var(--navy)]">6 Hours (2x3 hrs)</p>
              </div>
            </div>
            
            <div className="bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Video className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Format</p>
                <p className="font-bold text-sm text-[var(--navy)]">Live Zoom Session</p>
              </div>
            </div>
            
            <div className="bg-white px-5 py-3.5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Tag className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Offer Fee</p>
                <p className="font-bold text-sm text-[var(--navy)]">{training.fee}</p>
              </div>
            </div>
          </div>

          {/* Facilitator */}
          <div className="mb-10">
            <p className="text-lg text-gray-600 font-light">
              Expert Facilitation: <span className="font-bold text-[var(--navy)]">Led by Industry Veterans with 25+ years hands-on freight forwarding leadership</span>
            </p>
          </div>

          {/* Final CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Link 
              href={enrollUrl}
              className="w-full inline-block bg-[#0ea5e9] text-white font-bold text-xl px-8 py-5 rounded-2xl shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)] transition-all"
            >
              Enroll Now
            </Link>
            <Link 
              href={interestUrl}
              className="w-full inline-block bg-white border-2 border-[var(--gold)] text-[var(--navy)] font-bold text-xl px-8 py-5 rounded-2xl hover:bg-[var(--gold)] transition-all"
            >
              I am interested
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

