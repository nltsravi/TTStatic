import Link from "next/link";
import trainingData from "@/data/training.json";
import { Clock, Users, Tag, Calendar, GraduationCap, ArrowRight } from "lucide-react";

export default function TrainingPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cool-grey)] pb-24">
      {/* Hero Header */}
      <section 
        className="hero-band relative w-full pt-32 pb-24 px-4 md:px-6 mb-16 shadow-md transition-all bg-cover bg-center overflow-hidden"
        style={{ backgroundImage: "url('/master-classes-for-emerging-leaders.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/80 to-[var(--navy)]/90 backdrop-blur-[2px]"></div>
        <div className="relative z-10 container mx-auto space-y-6 max-w-5xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FDF3DC] tracking-tight text-center drop-shadow-lg">
            Training & Workshops
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cool-grey)] max-w-3xl mx-auto text-center font-light leading-relaxed opacity-90 drop-shadow">
            Empower your team with hands-on, interactive training programs designed to drive tangible business results.
            </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {trainingData.map((training, idx) => (
            <div 
              key={training.id}
              className="group relative bg-white border border-[var(--border)] hover:border-[var(--gold)] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div 
                className="relative h-48 w-full bg-cover bg-center flex flex-col justify-end overflow-hidden flex-shrink-0"
                style={{ backgroundImage: `url(${training.heroImage || '/mastering-conflict.png'})` }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)] via-[var(--navy)]/80 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10 p-5 flex items-start gap-3 w-full">
                  <div className="flex items-center justify-center w-8 h-8 rounded bg-[var(--gold)] flex-shrink-0 shadow-sm transform -translate-y-1">
                    <GraduationCap className="w-4 h-4 text-[var(--navy)]" />
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-white tracking-tight leading-snug line-clamp-3 drop-shadow-md">
                    {training.title}
                  </h3>
                </div>
              </div>
              
              <div className="p-5 pt-6 flex-grow flex flex-col bg-white">
                <p className="text-[var(--text-body)] text-sm mb-4 line-clamp-2">
                  {training.description}
                </p>

                <div className="space-y-3 flex-grow mb-6 bg-[var(--cool-grey)] p-4 rounded-xl border border-[var(--border)] text-sm">
                  <div className="flex items-start text-[var(--text-body)]">
                    <Users className="w-4 h-4 mr-2 mt-0.5 text-[var(--gold)] flex-shrink-0" />
                    <span className="font-semibold w-20 flex-shrink-0">Trainer:</span>
                    <Link href={`/trainers/${training.trainer.id}`} className="font-light hover:text-[var(--gold)] transition-colors">
                        {training.trainer.name}
                    </Link>
                  </div>
                  <div className="flex items-start text-[var(--text-body)]">
                    <Calendar className="w-4 h-4 mr-2 mt-0.5 text-[var(--gold)] flex-shrink-0" />
                    <span className="font-semibold w-20 flex-shrink-0">Date:</span>
                    <span className="font-light">{training.date}</span>
                  </div>
                  <div className="flex items-start text-[var(--text-body)]">
                    <Clock className="w-4 h-4 mr-2 mt-0.5 text-[var(--gold)] flex-shrink-0" />
                    <span className="font-semibold w-20 flex-shrink-0">Duration:</span>
                    <span className="font-light">{training.duration}</span>
                  </div>
                  {/* @ts-ignore: conditional fee */}
                  {training.fee && (
                    <div className="flex items-start text-[var(--text-body)]">
                      <Tag className="w-4 h-4 mr-2 mt-0.5 text-[var(--gold)] flex-shrink-0" />
                      <span className="font-semibold w-20 flex-shrink-0">Fee:</span>
                      <span className="font-light">{training.fee}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 flex flex-col md:flex-row gap-3 justify-start mt-auto">
                  {training.id === 'logistics-career-compass' ? (
                    <>
                      <Link 
                        href={`/training/${training.id}`}
                        className="inline-flex items-center justify-center px-4 py-2.5 text-sm bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] font-bold rounded border-opacity-80 hover:bg-[var(--navy)] hover:text-white transition-colors duration-300 w-full"
                      >
                        View Details
                      </Link>
                      <Link 
                        href="/user-registration?form=enroll"
                        className="inline-flex items-center justify-center px-4 py-2.5 text-sm bg-[var(--gold)] text-[var(--navy)] font-bold rounded hover:bg-[#e6b12a] transition-colors duration-300 w-full"
                      >
                        Enroll Now
                      </Link>
                    </>
                  ) : (
                    <Link 
                      href={`/training/${training.id}`}
                      className="inline-flex items-center justify-center px-5 py-2.5 text-sm bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] font-bold rounded border-opacity-80 hover:bg-[var(--navy)] hover:text-white transition-colors duration-300 w-full"
                    >
                      View Program
                      <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
