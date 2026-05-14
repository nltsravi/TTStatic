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
  Tag
} from "lucide-react";

export default function LogisticsCareerCompassPage() {
  const training = trainingData.find((t) => t.id === "logistics-career-compass") as any;

  if (!training) {
    notFound();
  }

  // Extract quote from description
  const quoteMatch = training.description.match(/(“.*”\s*–\s*.*)/);
  const quote = quoteMatch ? quoteMatch[1] : "";
  const overviewText = training.description.replace(quote, "").trim();

  // Accordion State
  const [openBlock, setOpenBlock] = useState<number | null>(0);

  // Audience Icons Mapper
  const audienceIcons = [GraduationCap, Briefcase, Building, MapPin];
  
  // Features Icons Mapper
  const featureIcons = [MonitorPlay, Users, TrendingUp, Award];

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cream)] overflow-hidden">
      <CanonicalUrl />

      {/* 1. Hero Section */}
      <section className="relative w-full min-h-[35vh] py-16 flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-20">
        <Image 
          src={training.heroImage || "/masterclasses-hero.png"}
          alt="Logistics Career Compass Banner"
          fill
          className="object-cover z-0 opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)]/80 via-[var(--navy)]/60 to-[var(--navy)]/80 z-0"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-6 animate-fade-up">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-tight drop-shadow-xl">
            {training.title}
          </h1>
          
          {quote && (
            <p className="text-2xl md:text-3xl text-white italic font-serif opacity-90">
              {quote}
            </p>
          )}

          {/* Prominent Gold Price Tag */}
          {training.fee && (
            <div className="flex justify-center pt-6 pb-2">
              <Link href="/user-registration?form=enroll" className="relative bg-gradient-to-br from-yellow-300 via-[var(--gold)] to-yellow-600 text-[var(--navy)] font-extrabold text-2xl md:text-3xl px-8 py-4 rounded-r-xl shadow-[0_10px_40px_rgba(230,177,42,0.5)] flex items-center gap-3 hover:scale-105 hover:shadow-[0_15px_50px_rgba(230,177,42,0.6)] transition-all cursor-pointer">
                {/* Tag Cutout Left Edge */}
                <div className="absolute left-0 top-0 bottom-0 w-8 overflow-hidden -ml-8">
                  <div className="absolute top-1/2 -translate-y-1/2 left-4 w-16 h-16 bg-gradient-to-br from-yellow-300 via-[var(--gold)] to-yellow-600 rotate-45 transform origin-center"></div>
                  <div className="absolute top-1/2 -translate-y-1/2 left-2 w-4 h-4 bg-[var(--navy)] rounded-full shadow-inner z-10"></div>
                </div>
                
                <Tag className="w-8 h-8 ml-2" />
                <span>Starting at {training.fee}</span>
              </Link>
            </div>
          )}

          <div className="pt-8 flex flex-col items-center gap-6 relative">
            <Link 
              href="/user-registration?form=enroll"
              className="inline-block bg-[var(--gold)] text-[var(--navy)] font-bold text-xl px-12 py-5 rounded-full shadow-[0_0_30px_rgba(230,177,42,0.4)] hover:scale-105 hover:bg-[#e6b12a] transition-all relative z-10"
            >
              Enroll Now
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Introduction Block (Overview & Objective) */}
      <section className="py-12 px-4 md:px-6 relative z-20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Overview Card */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video">
                <Image src="/program-overview.png" alt="Program Overview" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-6">Program Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light whitespace-pre-line">
                  {overviewText}
                </p>
              </div>
            </div>

            {/* Objective Card */}
            <div className="bg-white rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.05)] border border-gray-100 hover:-translate-y-1 transition-transform duration-300 overflow-hidden flex flex-col">
              <div className="relative w-full aspect-video">
                <Image src="/program-objective.png" alt="Program Objective" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent"></div>
              </div>
              <div className="p-8 md:p-10 flex-grow">
                <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-6">Program Objective</h2>
                <p className="text-lg text-gray-600 leading-relaxed font-light">
                  {training.objective}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. "Who Is It For?" & "Expected Outcomes" */}
      <section className="py-10 px-4 md:px-6">
        <div className="container mx-auto max-w-6xl space-y-12">
          
          {/* Who Is It For Grid */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] mb-10 text-center">Who Is It For?</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {training.targetAudience.map((item: string, idx: number) => {
                const Icon = audienceIcons[idx % audienceIcons.length];
                return (
                  <div key={idx} className="relative bg-gradient-to-br from-[var(--navy)] to-[#0f172a] p-8 rounded-2xl shadow-lg border border-[var(--navy)] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group flex items-center gap-6 overflow-hidden text-left">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--gold)]/10 rounded-full blur-2xl group-hover:bg-[var(--gold)]/20 transition-all"></div>
                    
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[var(--gold)]/10 group-hover:border-[var(--gold)]/30 transition-all relative z-10">
                      <Icon className="w-8 h-8 text-white group-hover:text-[var(--gold)] transition-colors" />
                    </div>
                    <p className="text-xl text-white font-medium relative z-10">{item}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Expected Outcomes */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold font-serif text-[var(--navy)] mb-10 text-center">Expected Outcomes</h2>
            <div className="bg-white rounded-3xl p-10 shadow-sm border border-gray-100 max-w-4xl mx-auto">
              <ul className="space-y-6">
                {training.outcomes.map((item: string, idx: number) => (
                  <li key={idx} className="flex items-start gap-4">
                    <CheckCircle2 className="w-8 h-8 text-[#25D366] flex-shrink-0 mt-0.5 drop-shadow-sm" />
                    <span className="text-xl text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>
      </section>

      {/* 4. Program Features (Highlight Ribbon) */}
      <section className="py-12 bg-[var(--navy)] text-white relative">
        <div className="container mx-auto px-4 md:px-6 max-w-6xl">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {training.features.map((feature: any, idx: number) => {
              const Icon = featureIcons[idx % featureIcons.length];
              return (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <Icon className="w-12 h-12 text-[var(--gold)] mb-6 opacity-80 group-hover:opacity-100 group-hover:-translate-y-1 transition-all" strokeWidth={1.5} />
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-white/70 font-light text-lg">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Program Structure (Interactive Accordion) */}
      <section className="py-12 px-4 md:px-6 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-serif text-[var(--navy)] mb-4">Program Structure</h2>
            <p className="text-xl text-gray-500 font-light">A comprehensive 4-block journey.</p>
          </div>

          <div className="space-y-4">
            {training.blocks.map((block: any, idx: number) => (
              <div 
                key={idx} 
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 ${openBlock === idx ? 'border-[var(--gold)] shadow-lg' : 'border-gray-200 hover:border-gray-300 shadow-sm'}`}
              >
                <button
                  onClick={() => setOpenBlock(openBlock === idx ? null : idx)}
                  className="w-full flex items-center justify-between p-6 md:p-8 text-left"
                >
                  <div className="flex items-center gap-6">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-xl flex-shrink-0 transition-colors ${openBlock === idx ? 'bg-[var(--gold)] text-[var(--navy)]' : 'bg-[var(--navy)] text-white'}`}>
                      {idx + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[var(--navy)]">{block.title.split(":")[0]}</h3>
                      <p className={`text-lg transition-colors ${openBlock === idx ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
                        {block.title.split(":")[1]?.trim() || block.subtitle}
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
                      <div className="px-6 pb-8 md:px-8 md:pb-8 pt-2 pl-[5.5rem] md:pl-[6.5rem]">
                        <p className="text-gray-600 italic mb-6">{block.subtitle}</p>
                        <ul className="space-y-4 border-l-2 border-gray-100 pl-6">
                          {block.modules.map((mod: string, midx: number) => (
                            <li key={midx} className="relative text-lg text-gray-700">
                              <span className="absolute -left-[1.9rem] top-2.5 w-2 h-2 rounded-full bg-[var(--gold)]"></span>
                              {mod}
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

      {/* 6. Pricing Options */}
      <section className="py-12 px-4 md:px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold font-serif text-[var(--navy)] mb-4">Pricing Options</h2>
            <p className="text-xl text-gray-500 font-light">Choose the track that fits your career goals.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {training.pricingOptions.map((plan: any, idx: number) => {
              const isPremium = plan.title.toLowerCase().includes("premium");
              return (
                <div 
                  key={idx} 
                  className={`relative rounded-3xl p-10 border-2 transition-all hover:-translate-y-2 flex flex-col h-full ${
                    isPremium 
                      ? "border-[var(--navy)] bg-[#f8fafc] shadow-2xl" 
                      : "border-gray-200 bg-white shadow-sm hover:border-gray-300 hover:shadow-lg"
                  }`}
                >
                  {isPremium && (
                    <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[var(--gold)] text-[var(--navy)] px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest shadow-md">
                      Most Popular
                    </div>
                  )}
                  
                  <h3 className="text-3xl font-bold text-[var(--navy)] mb-4 mt-2 text-center">{plan.title}</h3>
                  <div className="text-center mb-8">
                    <span className="text-5xl font-extrabold text-[var(--navy)]">{plan.fee}</span>
                  </div>
                  
                  <p className="text-lg text-gray-600 text-center mb-10 flex-grow font-light">
                    {plan.description}
                  </p>
                  
                  <Link 
                    href="/user-registration?form=enroll"
                    className={`w-full py-4 rounded-xl text-lg font-bold text-center transition-colors ${
                      isPremium
                        ? "bg-[var(--navy)] text-white hover:bg-[#1a2744]"
                        : "bg-white border-2 border-[var(--navy)] text-[var(--navy)] hover:bg-gray-50"
                    }`}
                  >
                    Enroll Now
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. Workshop Details & Facilitator (Summary Footer) */}
      <section className="py-12 px-4 md:px-6 bg-[var(--cream)] border-t border-gray-200">
        <div className="container mx-auto max-w-5xl text-center">
          
          {/* Quick Facts */}
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12">
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Calendar className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Date</p>
                <p className="font-bold text-[var(--navy)]">{training.date}</p>
              </div>
            </div>
            
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Clock className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Duration</p>
                <p className="font-bold text-[var(--navy)]">{training.duration}</p>
              </div>
            </div>
            
            <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <Video className="w-5 h-5 text-[var(--gold)]" />
              <div className="text-left">
                <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Format</p>
                <p className="font-bold text-[var(--navy)]">{training.format}</p>
              </div>
            </div>
            
            {training.fee && (
              <div className="bg-white px-6 py-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
                <Tag className="w-5 h-5 text-[var(--gold)]" />
                <div className="text-left">
                  <p className="text-xs text-gray-400 font-bold uppercase tracking-wider">Starting Fee</p>
                  <p className="font-bold text-[var(--navy)]">{training.fee}</p>
                </div>
              </div>
            )}
          </div>

          {/* Facilitator */}
          <div className="mb-12">
            <p className="text-xl text-gray-600 font-light">
              Facilitator: <span className="font-bold text-[var(--navy)]">{training.trainer.name}</span>
            </p>
          </div>

          {/* Final CTA */}
          <Link 
            href="/user-registration?form=enroll"
            className="inline-block bg-[#0ea5e9] text-white font-bold text-2xl px-16 py-6 rounded-2xl shadow-[0_10px_30px_rgba(14,165,233,0.3)] hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(14,165,233,0.4)] transition-all"
          >
            Enroll Now
          </Link>
        </div>
      </section>

    </main>
  );
}
