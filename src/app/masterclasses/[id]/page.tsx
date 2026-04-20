import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import masterclasses from "@/data/masterclasses.json";
import { ArrowLeft, Clock, Users, Video, BookOpen, GraduationCap, CheckCircle, Tag } from "lucide-react";

export async function generateStaticParams() {
  return masterclasses.map((course) => ({
    id: course.id,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<import("next").Metadata> {
  const { id } = await params;
  const course = masterclasses.find((c) => c.id === id);
  if (!course) return {};
  return {
    title: course.title,
    description: course.description?.slice(0, 160) || `Tirwin Talent masterclass: ${course.title}`,
  };
}

export default async function MasterclassDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = masterclasses.find((c) => c.id === id);

  if (!course) {
    notFound();
  }

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cream)]">
      {/* Hero Header */}
      <section className="w-full pt-24 pb-20 px-4 md:px-6 relative shadow-lg overflow-hidden bg-[var(--navy)]">
        <Image 
          src="/master-classes-for-emerging-leaders.png"
          alt="Masterclasses background"
          fill
          className="object-cover z-0"
          priority
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[var(--navy)]/95 via-[var(--navy)]/80 to-[var(--navy)]/90 backdrop-blur-[2px] z-0"></div>
        <div className="container mx-auto max-w-5xl animate-fade-up relative z-10">
          <Link
            href="/masterclasses"
            className="inline-flex items-center text-[var(--gold-light)] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Masterclasses
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-start justify-between">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight md:max-w-3xl drop-shadow-lg">
              {course.title}
            </h1>
            <div className="icon-gold w-20 h-20 flex-shrink-0 hidden md:flex items-center justify-center shadow-xl">
              <GraduationCap className="w-10 h-10 text-[var(--navy)]" />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">

          {/* Left Column: Details & Modules */}
          <div className="order-2 lg:order-1 lg:col-span-2 space-y-16 animate-fade-up" style={{ animationDelay: '150ms' }}>

            {/* Overview Section */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-6 section-rule">
                Program Overview
              </h2>
              <p className="text-xl text-[var(--text-body)] leading-relaxed font-light">
                {course.purpose}
              </p>

              <div className="mt-8 bg-white p-6 md:p-8 rounded-2xl border border-[var(--border)] shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-[var(--navy)] mb-4">Key Learning Outcomes</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  <span className="font-semibold text-[var(--text-body)] mr-2">Key Concepts:</span>
                  {course.keyConcepts}
                </p>
                <div className="w-full h-px bg-[var(--border)] my-4"></div>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  <span className="font-semibold text-[var(--text-body)] mr-2">Interactive Elements:</span>
                  {course.interactiveElements}
                </p>
              </div>
            </div>

            {/* Modules/Syllabus */}
            <div>
              <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-8 section-rule">
                Curriculum & Modules
              </h2>
              <div className="space-y-6">
                {course.modules.map((module, idx) => (
                  <div key={idx} className="bg-white rounded-2xl border border-[var(--border)] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="bg-[var(--cool-grey)] px-6 py-5 border-b border-[var(--border)] flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <h3 className="text-xl font-bold text-[var(--navy)]">{module.title}</h3>
                      <div className="flex items-center text-sm font-medium text-[var(--gold)] bg-[var(--gold-pale)] px-3 py-1 rounded-full">
                        <Clock className="w-4 h-4 mr-2" />
                        {module.duration}
                      </div>
                    </div>
                    <div className="p-6 md:p-8 space-y-6">
                      <p className="text-lg font-medium text-[var(--text-body)] italic border-l-4 border-[var(--gold)] pl-4">
                        Focus: {module.focus}
                      </p>
                      <ul className="space-y-4">
                        {module.details.map((detail, dIdx) => {
                          const [label, ...rest] = detail.split(': ');
                          return (
                            <li key={dIdx} className="flex items-start text-[var(--text-muted)] leading-relaxed">
                              <CheckCircle className="w-5 h-5 mr-3 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                              <span>
                                {rest.length > 0 ? (
                                  <>
                                    <strong className="text-[var(--navy)]">{label.replace(/\*\*/g, '')}:</strong> {rest.join(': ')}
                                  </>
                                ) : (
                                  detail.replace(/\*\*/g, '')
                                )}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Sidebar (Logistics & Facilitator) */}
          <div className="order-1 lg:order-2 space-y-8 animate-fade-up" style={{ animationDelay: '300ms' }}>

            {/* Quick Facts Card */}
            <div className="bg-[var(--navy)] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--gold)] opacity-10 rounded-full blur-3xl"></div>

              <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                <BookOpen className="w-6 h-6 text-[var(--gold)]" />
                Course Logistics
              </h3>

              <ul className="space-y-6 relative z-10">
                <li className="flex items-start">
                  <Clock className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Duration</p>
                    <p className="font-medium text-lg leading-tight">{course.duration}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Video className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                  <div>
                    <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Format</p>
                    <p className="font-medium text-lg leading-tight">{course.format}</p>
                  </div>
                </li>
                {/* @ts-ignore: fee might be missing in some objects */}
                {course.fee && (
                  <li className="flex items-start">
                    <Tag className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Course Fee</p>
                      <p className="font-medium text-lg leading-tight">{course.fee}</p>
                    </div>
                  </li>
                )}
                {/* @ts-ignore: maxParticipants missing property */}
                {course.maxParticipants !== "Not specified" && (
                  <li className="flex items-start">
                    <Users className="w-6 h-6 mr-4 text-[var(--gold)] flex-shrink-0" />
                    <div>
                      <p className="text-xs text-[var(--gold-light)] uppercase tracking-wider font-bold mb-1">Participants</p>
                      <p className="font-medium text-lg leading-tight">{course.maxParticipants}</p>
                    </div>
                  </li>
                )}
              </ul>

              <div className="mt-10 pt-8 border-t border-[rgba(255,255,255,0.1)] space-y-4">
                {course.id !== "freight-forwarding" && (
                  <Link href="/user-registration" className="w-full py-4 px-6 rounded-lg btn-gold text-lg shadow-lg text-center block transition-all hover:-translate-y-1">
                    Enroll Now
                  </Link>
                )}
                <Link href="/user-registration?form=interested" className="w-full py-4 px-6 rounded-lg border-2 border-[var(--gold)] text-[var(--gold)] hover:bg-[var(--gold)] hover:text-[var(--navy)] text-lg shadow-lg text-center block transition-all hover:-translate-y-1">
                  I am interested
                </Link>
              </div>
            </div>

            {/* Facilitator Profile Card */}
            <div className="bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm">
              <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-6 flex items-center gap-3">
                <Users className="w-6 h-6 text-[var(--gold)]" />
                About the Facilitator
              </h3>

              <div className="flex flex-col gap-6 mb-8">
                {/* @ts-ignore */}
                {course.facilitator.image ? (
                  <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-[var(--gold)] flex-shrink-0 shadow-md">
                    {/* @ts-ignore */}
                    <Image src={course.facilitator.image} alt={course.facilitator.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-32 h-32 rounded-full bg-[var(--navy)] text-[var(--gold)] flex items-center justify-center text-4xl font-serif font-bold border-2 border-[var(--gold)] flex-shrink-0 shadow-md">
                    {course.facilitator.name.charAt(0)}
                  </div>
                )}
                <div>
                  <Link href={`/trainers/${course.facilitator.id}`} className="hover:text-[var(--gold)] transition-colors group block w-fit">
                      <h4 className="text-2xl font-bold text-[var(--navy)] group-hover:text-[var(--gold)] transition-colors">{course.facilitator.name}</h4>
                  </Link>
                  {course.facilitator.experience && (
                    <p className="text-sm font-semibold text-[var(--gold)] uppercase tracking-wide leading-relaxed mt-2">
                      {course.facilitator.experience}
                    </p>
                  )}
                </div>
              </div>

              {course.facilitator.description && (
                <>
                  <div className="w-12 h-1 bg-[var(--gold)] mb-6 rounded"></div>
                  <div className="text-[var(--text-muted)] text-sm space-y-4 leading-relaxed whitespace-pre-line">
                    {course.facilitator.description}
                  </div>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </main>
  );
}
