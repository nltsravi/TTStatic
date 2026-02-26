"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Award, Target, Briefcase, GraduationCap, ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";

const targetAudience = [
    {
        title: "Final Year Student",
        problem: "Worried about placement. Confused about logistics career.",
        solution: "Need Placement Support.",
        valueLabel: "Want to be job-ready BEFORE you graduate.",
        icon: GraduationCap,
    },
    {
        title: "Fresh Graduate",
        problem: "Sent 20+ resumes. Zero interviews. Frustrated.",
        solution: "Need Placement Support.",
        valueLabel: "Need clarity on what companies actually want.",
        icon: Target,
    },
    {
        title: "Early Professional (1-2 yrs exp)",
        problem: "Stuck in the same role. Not getting promoted.",
        solution: "Need Placement Support.",
        valueLabel: "Need the skills that lead to advancement.",
        icon: Briefcase,
    }
];

const features = [
    {
        title: "BACKED BY 15+ YRS OF INDUSTRY EXPERTISE",
        description: "TIRWIN Management has been training & placing logistics professionals since 2008. Trainers have 25+ years in freight forwarding & EXIM.",
    },
    {
        title: "TRUSTED BY INDIA'S TOP COMPANIES",
        description: "Trusted by leaders like Dachser (Global logistics) and TVS Supply Chain (India's largest 3PL).",
    },
    {
        title: "SKILLS-BASED APPROACH (NOT JUST THEORY)",
        description: "Focus on execution with real freight scenarios, negotiation practice, documentation, and personalized roadmaps.",
    },
    {
        title: "PLACEMENT SUPPORT (BEYOND TRAINING)",
        description: "Matching with job opportunities based on skills and interests, including Resume Structuring.",
    }
];

const compassSteps = [
    { step: "01", title: "DISCOVER", desc: "Attend our 90min preview webinar." },
    { step: "02", title: "LEARN", desc: "Join our structured training workshop." },
    { step: "03", title: "PREPARE", desc: "Work with mentors." },
    { step: "04", title: "PLACE", desc: "Get job enquiries." },
    { step: "05", title: "GROW", desc: "Keep learning through Tirwin Talent platform." },
];

const faqs = [
    { q: "Is this training only for people with logistics background?", a: "Yes, designed for those with a basic degree in logistics, freight forwarding, or EXIM." },
    { q: "Will I definitely get a job after training?", a: "We provide support; effort + guidance = high chances." },
    { q: "How long will it take to get job-ready?", a: "6-8 weeks for the core program." },
    { q: "Can I learn while working?", a: "Yes, flexible online and weekend batches." },
    { q: "Do I get a certificate?", a: "Yes, recognized within the industry and TIRWIN's network." },
];

const bodyFont = { fontFamily: "var(--font-dm-sans), sans-serif" } as const;
const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

export default function BrandAwareness() {
    return (
        <main className="min-h-screen">

            {/* Hero — keep navy, refine typography */}
            <section className="hero-band text-white pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "var(--gold-light)", textTransform: "uppercase" }}>
                        Your Career Accelerator in Logistics & EXIM
                    </p>
                    <h1 style={{ ...serif, fontSize: "clamp(2.4rem, 5vw, 4rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        Tirwin's Logistics career compass program
                    </h1>
                    <div style={{ width: "48px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                    <p style={{ ...bodyFont, fontSize: "1rem", color: "rgba(255,255,255,0.65)", maxWidth: "680px", margin: "0 auto", lineHeight: 1.8, fontWeight: 300 }}>
                        In Logistics, Your Degree Isn't Your Career. Your Skills Are. Tirwin Talent is the skills platform offered by Tirwin Management Services transforming the Logistics & Freight forwarding industry for 15+ years.
                        We don't just train. We transform careers.
                    </p>
                    <div style={{
                        display: "inline-block",
                        border: "1px solid rgba(200,134,10,0.35)",
                        background: "rgba(200,134,10,0.08)",
                        padding: "6px 20px",
                        borderRadius: "1px",
                    }}>
                        <span style={{ ...bodyFont, fontSize: "11px", fontWeight: 600, letterSpacing: "0.12em", color: "var(--gold-light)" }}>
                            Skills-Based Staffing + Staffing-Based Skilling
                        </span>
                    </div>
                    <div className="pt-2">
                        <Button size="lg" className="btn-gold px-8 h-13 text-sm uppercase rounded-none tracking-widest">
                            KNOW MORE
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Who We Serve */}
            <section className="py-20 stripe-bg px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16 space-y-4">
                        <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Our Audience</p>
                        <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#0B2046" }}>WHO WE SERVE</h2>
                        <p style={{ ...bodyFont, fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
                            If you're serious about a career in logistics, this is for people like you.
                        </p>
                        <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "10px auto 0" }} />
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {targetAudience.map((audience, idx) => (
                            <Card
                                key={idx}
                                className="group"
                                style={{
                                    border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                    background: "#fff", boxShadow: "0 2px 10px rgba(11,32,70,0.05)",
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                    overflow: "hidden", position: "relative"
                                }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px rgba(11,32,70,0.1)"; el.style.borderColor = "rgba(200,134,10,0.3)"; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 10px rgba(11,32,70,0.05)"; el.style.borderColor = "rgba(11,32,70,0.08)"; }}
                            >
                                {/* Gold top stripe */}
                                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "3px", background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }} />
                                <CardHeader className="pb-4 pt-8">
                                    <div className="h-13 w-13 flex items-center justify-center mb-4"
                                        style={{ background: "var(--gold-pale)", color: "var(--gold)", width: "52px", height: "52px", borderRadius: "2px", transition: "background 0.2s ease" }}>
                                        <audience.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle style={{ ...serif, fontSize: "1.1rem", color: "#0B2046" }}>
                                        {audience.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p style={{ ...bodyFont, fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--text-subtle)", textTransform: "uppercase", marginBottom: "4px" }}>THE PROBLEM</p>
                                        <p style={{ ...bodyFont, fontSize: "0.85rem", color: "#4B5563", fontWeight: 300, lineHeight: 1.6 }}>{audience.problem}</p>
                                    </div>
                                    <div>
                                        <p style={{ ...bodyFont, fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "var(--gold)", textTransform: "uppercase", marginBottom: "4px" }}>THE SOLUTION</p>
                                        <p style={{ ...bodyFont, fontSize: "0.85rem", color: "#4B5563", fontWeight: 500, lineHeight: 1.6 }}>{audience.solution}</p>
                                    </div>
                                    <div className="pt-3" style={{ borderTop: "1px solid rgba(11,32,70,0.07)" }}>
                                        <p style={{ ...bodyFont, fontSize: "0.82rem", color: "#0B2046", fontWeight: 500, fontStyle: "italic", lineHeight: 1.6 }} className="flex items-start gap-2">
                                            <CheckCircle2 className="h-4 w-4 mt-0.5 flex-shrink-0" style={{ color: "var(--gold)" }} />
                                            &ldquo;{audience.valueLabel}&rdquo;
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose TIRWIN TALENT */}
            <section className="py-20 bg-white px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="flex flex-col lg:flex-row gap-16 items-start">
                        <div className="lg:w-1/3 space-y-5">
                            <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Why Us</p>
                            <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#0B2046", lineHeight: 1.2 }}>
                                WHY CHOOSE<br /><span style={{ color: "var(--gold)" }}>TIRWIN TALENT?</span>
                            </h2>
                            <div style={{ width: "40px", height: "2px", background: "var(--gold)" }} />
                            <p style={{ ...bodyFont, fontSize: "0.92rem", color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}>
                                We bridge the gap between academic knowledge and actual industry execution.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-5">
                            {features.map((feature, idx) => (
                                <div
                                    key={idx}
                                    className="p-6"
                                    style={{
                                        background: "#F7F8FA", border: "1px solid rgba(11,32,70,0.07)",
                                        borderRadius: "2px", transition: "border-color 0.2s ease, box-shadow 0.2s ease",
                                    }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,134,10,0.3)"; el.style.boxShadow = "0 6px 20px rgba(11,32,70,0.07)"; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(11,32,70,0.07)"; el.style.boxShadow = "none"; }}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="h-9 w-9 shrink-0 flex items-center justify-center" style={{ background: "var(--gold-pale)", color: "var(--gold)", borderRadius: "2px" }}>
                                            <Award className="h-4 w-4" />
                                        </div>
                                        <div>
                                            <h3 style={{ ...bodyFont, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.05em", color: "#0B2046", marginBottom: "6px" }}>{feature.title}</h3>
                                            <p style={{ ...bodyFont, fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}>{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Compass Flow */}
            <section className="py-20 stripe-bg px-4">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16 space-y-4">
                        <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>The Journey</p>
                        <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#0B2046" }}>Logistics Career Compass</h2>
                        <p style={{ ...bodyFont, fontSize: "0.9rem", color: "var(--text-muted)", fontWeight: 300 }}>Career journey from Tirwin Talent</p>
                        <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "10px auto 0" }} />
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
                        {/* Connecting line */}
                        <div className="hidden md:block absolute top-[28px] left-[8%] right-[8%] h-[1px]"
                            style={{ background: "linear-gradient(90deg, transparent, rgba(200,134,10,0.4), transparent)" }} />

                        {compassSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/5 mb-8 md:mb-0 px-2 group">
                                <div
                                    className="h-14 w-14 rounded-full font-bold text-lg flex items-center justify-center mb-4 transition-all duration-300"
                                    style={{
                                        background: "#fff",
                                        border: "2px solid var(--gold)",
                                        color: "var(--gold)",
                                        boxShadow: "0 2px 10px rgba(200,134,10,0.15)",
                                        ...bodyFont, fontWeight: 700
                                    }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.background = "var(--gold)"; el.style.color = "#fff"; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.background = "#fff"; el.style.color = "var(--gold)"; }}
                                >
                                    {item.step}
                                </div>
                                <h3 style={{ ...bodyFont, fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.1em", color: "#0B2046", marginBottom: "6px" }}>{item.title}</h3>
                                <p style={{ ...bodyFont, fontSize: "0.75rem", color: "var(--text-muted)", lineHeight: 1.5, fontWeight: 300 }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-20 bg-white px-4">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-12 space-y-4">
                        <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Questions</p>
                        <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700, color: "#0B2046" }}>FAQS</h2>
                        <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "8px auto 0" }} />
                    </div>

                    <div className="space-y-3">
                        {faqs.map((faq, idx) => (
                            <div
                                key={idx}
                                className="p-6"
                                style={{ border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px", background: "#F7F8FA" }}
                            >
                                <h3 className="flex items-start gap-3" style={{ ...bodyFont, fontWeight: 600, fontSize: "0.92rem", color: "#0B2046", marginBottom: "8px" }}>
                                    <span style={{ color: "var(--gold)", fontWeight: 800, flexShrink: 0, ...serif }}>Q.</span>
                                    {faq.q}
                                </h3>
                                <p style={{ ...bodyFont, fontSize: "0.85rem", color: "var(--text-muted)", paddingLeft: "28px", lineHeight: 1.7, fontWeight: 300 }}>
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="px-4 py-16 text-white text-center hero-band">
                <div className="container mx-auto max-w-3xl space-y-6">
                    <h2 style={{ ...serif, fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 700 }}>Your logistics career starts with a single step.</h2>
                    <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                    <div>
                        <Button size="lg" className="btn-gold px-10 h-14 text-sm uppercase tracking-widest rounded-none">
                            Get Started Today
                        </Button>
                    </div>
                </div>
            </section>

        </main>
    );
}
