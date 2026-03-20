import Link from "next/link";
import { notFound } from "next/navigation";
import trainers from "@/data/trainers.json";
import { ArrowLeft, Award, BookOpen, CheckCircle, Star } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export async function generateStaticParams() {
  return trainers.map((trainer) => ({
    id: trainer.id,
  }));
}

export default async function TrainerProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const trainer = trainers.find((t) => t.id === id);

  if (!trainer) {
    notFound();
  }

  const initials = trainer.name.split(" ").map((n) => n[0]).join("");

  return (
    <main className="flex min-h-screen flex-col w-full bg-[var(--cream)]">
      {/* Hero Header */}
      <section className="hero-band w-full pt-20 pb-20 px-4 md:px-6 relative shadow-lg">
        <div className="container mx-auto max-w-5xl animate-fade-up">
          <Link
            href="/masterclasses"
            className="inline-flex items-center text-[var(--gold-light)] hover:text-white transition-colors mb-8 text-sm font-bold uppercase tracking-widest"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Masterclasses
          </Link>

          <div className="flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
            <div className="flex-1 space-y-4 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
                {trainer.name}
              </h1>
              <p className="text-xl md:text-2xl text-[var(--gold-light)] font-medium max-w-2xl">
                {trainer.role}
              </p>
            </div>
            
            <div className="flex-shrink-0">
                {trainer.image ? (
                   <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden" style={{
                       border: "4px solid var(--gold)",
                       boxShadow: "0 0 0 4px rgba(200,134,10,0.15), 0 8px 32px rgba(0,0,0,0.4)"
                   }}>
                       <img src={trainer.image} alt={trainer.name} className="w-full h-full object-cover" />
                   </div>
                ) : (
                <Avatar className="w-32 h-32 md:w-40 md:h-40" style={{
                    border: "4px solid var(--gold)",
                    boxShadow: "0 0 0 4px rgba(200,134,10,0.15), 0 8px 32px rgba(0,0,0,0.4)"
                }}>
                    <AvatarFallback style={{
                        background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)",
                        color: "var(--gold-light)",
                        fontSize: "3rem",
                        fontWeight: 700,
                        fontFamily: "'Playfair Display', Georgia, serif"
                    }}>{initials}</AvatarFallback>
                </Avatar>
                )}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="container mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          
          {/* Left Column: Bio & Experience */}
          <div className="lg:col-span-2 space-y-12 animate-fade-up" style={{ animationDelay: '150ms' }}>
            
            {/* About Section */}
            <div className="bg-white p-8 md:p-10 rounded-2xl border border-[var(--border)] shadow-sm">
              <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-[var(--gold)]" />
                About the Facilitator
              </h2>
              <div className="text-lg text-[var(--text-body)] leading-relaxed font-light whitespace-pre-line space-y-6">
                <p className="font-semibold text-xl text-[var(--navy)] border-l-4 border-[var(--gold)] pl-4 py-1 mb-6">
                    {trainer.experience}
                </p>
                {trainer.description}
              </div>
            </div>

            {/* Expertise Section */}
            {/* @ts-ignore */}
            {trainer.expertise && trainer.expertise.length > 0 && (
                <div>
                <h2 className="text-3xl font-bold font-serif text-[var(--navy)] mb-8 section-rule">
                    Areas of Expertise
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* @ts-ignore */}
                    {trainer.expertise.map((item, idx) => (
                    <div key={idx} className="bg-white p-5 rounded-xl border border-[var(--border)] shadow-sm flex items-start gap-4 hover:border-[var(--gold)] transition-colors">
                        <CheckCircle className="w-6 h-6 text-[var(--gold)] flex-shrink-0 mt-0.5" />
                        <span className="text-[var(--text-body)] font-medium">{item}</span>
                    </div>
                    ))}
                </div>
                </div>
            )}
            
          </div>

          {/* Right Column: Achievements & Credentials */}
          <div className="space-y-8 animate-fade-up" style={{ animationDelay: '300ms' }}>
            
            {/* @ts-ignore */}
            {trainer.achievements && trainer.achievements.length > 0 && (
                <div className="bg-[var(--navy)] text-white rounded-2xl p-8 shadow-xl relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute -top-12 -right-12 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl"></div>
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[var(--gold)] opacity-10 rounded-full blur-3xl"></div>

                <h3 className="text-2xl font-serif font-bold mb-8 flex items-center gap-3">
                    <Award className="w-6 h-6 text-[var(--gold)]" />
                    Achievements & Awards
                </h3>

                <ul className="space-y-6 relative z-10">
                    {/* @ts-ignore */}
                    {trainer.achievements.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                        <Star className="w-5 h-5 mr-4 text-[var(--gold)] flex-shrink-0 mt-1" />
                        <span className="text-sm leading-relaxed text-[var(--cream)] opacity-90">{item}</span>
                        </li>
                    ))}
                </ul>
                </div>
            )}

            <div className="bg-white border border-[var(--border)] rounded-2xl p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold font-serif text-[var(--navy)] mb-4">
                Interested in a Masterclass?
              </h3>
              <p className="text-[var(--text-muted)] mb-6 text-sm leading-relaxed">
                Join {trainer.name.split(" ")[0]}'s next masterclass session and take your skills to the next level.
              </p>
              <Link href="/masterclasses" className="w-full py-4 px-6 rounded-lg btn-gold text-base shadow-md font-bold text-center block transition-all hover:-translate-y-1">
                View All Masterclasses
              </Link>
            </div>
            
          </div>
        </div>
      </section>
    </main>
  );
}
