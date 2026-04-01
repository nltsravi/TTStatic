import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import trainingData from "@/data/training.json";
import { ArrowLeft, Clock, Calendar, Video, MonitorPlay, Users, Target, BookOpen, Tag } from "lucide-react";

export async function generateStaticParams() {
  return trainingData.map((training) => ({
    id: training.id,
  }));
}

export default async function TrainingDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const training = trainingData.find((t) => t.id === id);

  if (!training) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cream)]">
      {/* Hero Header */}
      <section className="w-full pt-24 pb-20 px-4 md:px-6 relative shadow-lg overflow-hidden bg-[var(--navy)]">
        <Image 
          src={training.heroImage || "/masterclasses-hero.png"}
          alt="Training Background"
          fill
          className="object-cover z-0 opacity-40"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/80 to-[var(--navy)]/90 backdrop-blur-[2px] z-0"></div>
        <div className="container mx-auto max-w-5xl animate-fade-up relative z-10">
          <Link
            href="/training"
            className="inline-flex items-center text-[var(--gold-light)] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Training
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight md:max-w-3xl drop-shadow-lg">
              {training.title}
            </h1>
            <div className="icon-gold w-20 h-20 flex-shrink-0 hidden md:flex items-center justify-center shadow-xl">
              <BookOpen className="w-10 h-10 text-[var(--navy)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {/* Left Column: Details & Key Takeaways */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-16 animate-fade-up" style={{ animationDelay: '150ms' }}>

            {/* Overview Section */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-6 section-rule">
                Program Overview
              </h2>
              <p className="text-xl text-[var(--text-body)] leading-relaxed font-light whitespace-pre-line">
                {training.description}
              </p>
            </div>
            
            {/* Additional custom sections can be dynamically rendered here if added to the JSON array in the future (like modules or syllabus) */}

          </div>

          {/* Right Column: Sidebar (Logistics & Registration) */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-up" style={{ animationDelay: '300ms' }}>

            {/* Quick Facts Card */}
            <div className="bg-[var(--navy)] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--gold)] opacity-10 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <MonitorPlay className="w-6 h-6 text-[var(--gold)]" />
                Workshop Details
              </h3>

              <ul className="space-y-6 relative z-10">
                <li className="flex items-start">
                  <Calendar className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Date</p>
                    <p className="font-medium text-lg leading-tight">{training.date}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Duration</p>
                    <p className="font-medium text-lg leading-tight">{training.duration}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Video className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Format</p>
                    <p className="font-medium text-lg leading-tight">{training.format}</p>
                  </div>
                </li>
                {/* @ts-ignore */}
                {training.fee && (
                   <li className="flex items-start">
                     <Tag className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                     <div>
                       <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Fee</p>
                       <p className="font-medium text-lg leading-tight">{training.fee}</p>
                     </div>
                   </li>
                )}
              </ul>

              <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.1)] space-y-4">
                <Link href="/user-registration?form=interested" className="w-full py-4 px-6 rounded-lg border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] text-lg shadow-lg text-center block transition-all hover:-translate-y-1">
                  I am interested
                </Link>
              </div>
            </div>

            {/* Facilitator Profile Card */}
            <div className="bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-[var(--gold)]" />
                Facilitator
              </h3>

              <div className="flex flex-col gap-6 mb-4">
                  <div className="w-24 h-24 rounded-full bg-[var(--navy)] text-[var(--gold)] flex items-center justify-center text-3xl font-serif font-bold border-2 border-[var(--gold)] flex-shrink-0 shadow-md uppercase">
                    {training.trainer.name.charAt(0)}
                  </div>
                <div>
                   <h4 className="text-2xl font-bold text-[var(--navy)] transition-colors">{training.trainer.name}</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
