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
        color: "text-blue-600",
        bgColor: "bg-blue-100"
    },
    {
        title: "Fresh Graduate",
        problem: "Sent 20+ resumes. Zero interviews. Frustrated.",
        solution: "Need Placement Support.",
        valueLabel: "Need clarity on what companies actually want.",
        icon: Target,
        color: "text-purple-600",
        bgColor: "bg-purple-100"
    },
    {
        title: "Early Professional (1-2 yrs exp)",
        problem: "Stuck in the same role. Not getting promoted.",
        solution: "Need Placement Support.",
        valueLabel: "Need the skills that lead to advancement.",
        icon: Briefcase,
        color: "text-emerald-600",
        bgColor: "bg-emerald-100"
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
    {
        q: "Is this training only for people with logistics background?",
        a: "Yes, designed for those with a basic degree in logistics, freight forwarding, or EXIM."
    },
    {
        q: "Will I definitely get a job after training?",
        a: "We provide support; effort + guidance = high chances."
    },
    {
        q: "How long will it take to get job-ready?",
        a: "6-8 weeks for the core program."
    },
    {
        q: "Can I learn while working?",
        a: "Yes, flexible online and weekend batches."
    },
    {
        q: "Do I get a certificate?",
        a: "Yes, recognized within the industry and TIRWIN's network."
    }
];

export default function BrandAwareness() {
    return (
        <main className="min-h-screen">
            {/* Hero Section */}
            <section className="bg-[#0B2046] text-white pt-24 pb-20 px-4">
                <div className="container mx-auto max-w-5xl text-center space-y-6">
                    <p className="text-orange-500 font-bold tracking-widest uppercase text-sm md:text-base">
                        Your Career Accelerator in Logistics & EXIM
                    </p>
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                        Tirwin's Logistics career compass program
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
                        In Logistics, Your Degree Isn't Your Career. Your Skills Are. Tirwin Talent is the skills platform offered by Tirwin Management Services transforming the Logistics & Freight forwarding industry for 15+ years.
                        We don't just train. We transform careers.
                    </p>
                    <div className="inline-block border border-blue-500/30 bg-blue-900/30 px-6 py-2 rounded-full text-blue-300 font-medium mb-8">
                        Skills-Based Staffing + Staffing-Based Skilling
                    </div>
                    <div>
                        <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-6 text-lg rounded-full">
                            KNOW MORE
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </div>
                </div>
            </section>

            {/* Who We Serve Section */}
            <section className="py-20 bg-slate-50 px-4">
                <div className="container mx-auto max-w-6xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] mb-4">WHO WE SERVE</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto text-lg">
                            If you’re serious about a career in logistics, this is for people like you.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {targetAudience.map((audience, idx) => (
                            <Card key={idx} className="border-none shadow-md hover:shadow-lg transition-shadow bg-white relative overflow-hidden group">
                                <div className={`absolute top-0 left-0 w-full h-1 ${audience.bgColor}`}></div>
                                <CardHeader className="pb-4">
                                    <div className={`h-14 w-14 rounded-2xl ${audience.bgColor} ${audience.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <audience.icon className="h-7 w-7" />
                                    </div>
                                    <CardTitle className="text-xl font-bold text-[#0B2046]">{audience.title}</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div>
                                        <p className="text-sm font-semibold text-red-500 mb-1">THE PROBLEM:</p>
                                        <p className="text-slate-600 text-sm">{audience.problem}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm font-semibold text-emerald-600 mb-1">THE SOLUTION:</p>
                                        <p className="text-slate-600 text-sm font-medium">{audience.solution}</p>
                                    </div>
                                    <div className="pt-4 border-t border-slate-100">
                                        <p className="text-sm text-[#0B2046] font-semibold italic flex items-start gap-2">
                                            <span className="text-orange-500 mt-1">✓</span>
                                            "{audience.valueLabel}"
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
                    <div className="flex flex-col lg:flex-row gap-16 items-center">
                        <div className="lg:w-1/3 space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] leading-tight">
                                WHY CHOOSE <br /><span className="text-blue-600">TIRWIN TALENT?</span>
                            </h2>
                            <p className="text-slate-600 text-lg">
                                We bridge the gap between academic knowledge and actual industry execution.
                            </p>
                        </div>
                        <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-100">
                                    <div className="flex items-start gap-4">
                                        <div className="h-10 w-10 shrink-0 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
                                            <Award className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <h3 className="font-bold text-[#0B2046] mb-2">{feature.title}</h3>
                                            <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Career Compass Flow */}
            <section className="py-20 bg-[#f8fafc] px-4 border-y border-slate-200">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-4">Logistics Career Compass</h2>
                        <p className="text-slate-600">Career journey from Tirwin Talent</p>
                    </div>

                    <div className="flex flex-col md:flex-row justify-between items-center md:items-start relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-0.5 bg-blue-200 -z-0"></div>

                        {compassSteps.map((item, idx) => (
                            <div key={idx} className="flex flex-col items-center text-center relative z-10 w-full md:w-1/5 mb-8 md:mb-0 px-2 group">
                                <div className="h-14 w-14 rounded-full bg-white border-2 border-blue-600 text-blue-600 font-bold text-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-[#0B2046] mb-2">{item.title}</h3>
                                <p className="text-xs text-slate-500 leading-snug">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-20 bg-white px-4">
                <div className="container mx-auto max-w-3xl">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B2046]">FAQS</h2>
                    </div>

                    <div className="space-y-4">
                        {faqs.map((faq, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl p-6 bg-slate-50">
                                <h3 className="font-bold text-[#0B2046] mb-2 flex items-start gap-3 text-lg">
                                    <span className="text-orange-500 font-bold mt-0.5">Q.</span>
                                    {faq.q}
                                </h3>
                                <p className="text-slate-600 pl-8 leading-relaxed">
                                    {faq.a}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final CTA */}
            <section className="bg-blue-600 text-white py-16 px-4 text-center">
                <div className="container mx-auto max-w-3xl">
                    <h2 className="text-3xl font-bold mb-8">Your logistics career starts with a single step.</h2>
                    <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 font-bold px-8 py-6 text-lg rounded-full shadow-lg">
                        Get Started Today
                    </Button>
                </div>
            </section>

        </main>
    );
}
