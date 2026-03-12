import Link from "next/link";
import masterclasses from "@/data/masterclasses.json";
import { Clock, Users, Video, GraduationCap, ArrowRight } from "lucide-react";

export default function MasterclassesPage() {
  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cool-grey)] pb-24">
      {/* Hero Header */}
      <section className="hero-band w-full pt-24 pb-16 px-4 md:px-6 mb-16 shadow-md transition-all">
        <div className="container mx-auto space-y-6 max-w-5xl animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#FDF3DC] tracking-tight text-center">
            Masterclasses for Emerging Leaders
            </h1>
            <p className="text-xl md:text-2xl text-[var(--cool-grey)] max-w-3xl mx-auto text-center font-light leading-relaxed opacity-90">
            Elevate your logistics expertise with our premium, high-impact training sessions developed and facilitated by industry veterans.
            </p>
        </div>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 max-w-6xl mx-auto">
          {masterclasses.map((course, idx) => (
            <div 
              key={course.id}
              className="group relative bg-white border border-[var(--border)] hover:border-[var(--gold)] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 flex flex-col h-full animate-fade-up"
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              <div className="p-8 md:p-10 flex-grow flex flex-col">
                <div className="flex items-start gap-4 mb-6">
                  <div className="icon-gold w-14 h-14 flex-shrink-0">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--navy)] tracking-tight leading-snug mt-1">
                    {course.title}
                  </h3>
                </div>
                
                <p className="text-lg text-[var(--text-muted)] mb-8 flex-grow leading-relaxed">
                  {course.purpose}
                </p>

                <div className="space-y-4 mb-10 bg-[var(--cool-grey)] p-6 rounded-xl border border-[var(--border)]">
                  <div className="flex items-center text-[var(--text-body)]">
                    <Clock className="w-5 h-5 mr-4 text-[var(--gold)]" />
                    <span className="font-semibold w-24">Duration:</span>
                    <span className="font-light">{course.duration}</span>
                  </div>
                  <div className="flex items-center text-[var(--text-body)]">
                    <Video className="w-5 h-5 mr-4 text-[var(--gold)]" />
                    <span className="font-semibold w-24">Format:</span>
                    <span className="font-light">{course.format}</span>
                  </div>
                  <div className="flex items-center text-[var(--text-body)]">
                    <Users className="w-5 h-5 mr-4 text-[var(--gold)]" />
                    <span className="font-semibold w-24">Facilitator:</span>
                    <span className="font-light">{course.facilitator.name}</span>
                  </div>
                </div>

                <div className="pt-2 flex justify-end">
                  <Link 
                    href={`/masterclasses/${course.id}`}
                    className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-[var(--navy)] text-[var(--navy)] font-bold rounded-lg hover:bg-[var(--navy)] hover:text-white transition-colors duration-300"
                  >
                    Explore Masterclass
                    <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
