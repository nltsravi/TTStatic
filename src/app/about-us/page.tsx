"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Settings, Rocket, BookOpen, Heart } from "lucide-react";
import logoImage from "../../../public/tirwin-talent-logo-new.jpg";

const whyChooseFeatures = [
    {
        title: "Expertise",
        description: "We have seasoned consultants and industry advisors who can bring in unparalleled knowledge and insights to help you achieve your business goals.",
        icon: Users,
    },
    {
        title: "Comprehensive Training",
        description: "We offer a wide range of training programs tailored to your needs through 'TIRWIN Talent'.",
        icon: GraduationCap,
    },
    {
        title: "Skill Transformation",
        description: "Through 'TIRWIN Talent' Our staffing services not only addresses right fitment of resources in shortest possible time, but it is also complemented through suitable career advisory to make talent future ready.",
        icon: Settings,
    },
    {
        title: "Trailblazing Technology",
        description: "Through 'TIRWIN Tech': Be it platform related to the business, new age solutions leveraging Gen AI, IoT, advanced analytics, process automation for operational efficiency or insightful dashboards, we've got you covered through our partnerships and solution library.",
        icon: Rocket,
    },
    {
        title: "IATA Publications",
        description: "As a regional distributor, we provide access to essential IATA publications, keeping you informed and compliant.",
        icon: BookOpen,
    },
    {
        title: "Corporate Social Responsibility",
        description: "TIRWIN is not only committed to excellence, but also dedicated to community. We strive to make a positive impact on the community we serve through sustainable practices, ethical business operations and meaningful community engagement. TIRWIN has been actively contributing to education and health sector over last decade.",
        icon: Heart,
    },
];

const ventures = [
    { title: "TIRWIN Tech", description: "Technology solutions and innovation platform" },
    { title: "TIRWIN Talent", description: "Comprehensive training and staffing solutions" },
    { title: "TIRWIN Touch", description: "Community engagement and social responsibility" },
];

const sectionTitle = (label: string, title: string) => (
    <div className="space-y-3 mb-12">
        <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase"
        }}>{label}</p>
        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#0B2046", lineHeight: 1.15 }}>
            {title}
        </h2>
        <div style={{ width: "40px", height: "2px", background: "var(--gold)" }} />
    </div>
);

export default function AboutUs() {
    return (
        <main className="min-h-screen" style={{ background: "#F7F8FA" }}>

            {/* Navy Hero Band */}
            <div className="hero-band py-20 px-4 text-white text-center">
                <div className="container mx-auto max-w-3xl space-y-4">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "var(--gold-light)", textTransform: "uppercase"
                    }}>TRAINING · INNOVATION · RESOURCING</p>
                    <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        About TIRWIN
                    </h1>
                    <div style={{ width: "48px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                        TRAINING - INNOVATION - RESOURCING
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20">

                {/* Our Story */}
                <Card className="mb-20 overflow-hidden" style={{ border: "none", borderRadius: "2px", boxShadow: "0 4px 32px rgba(11,32,70,0.08)" }}>
                    <div className="grid md:grid-cols-2 gap-0 items-stretch">
                        <div className="p-8 md:p-14 space-y-6 bg-white">
                            {sectionTitle("Our History", "Our Story")}
                            <div style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.92rem", color: "#4B5563", lineHeight: 1.85, fontWeight: 300 }} className="space-y-4">
                                <p>
                                    TIRWIN Management Services Private Limited is a management consulting firm based in Chennai, Tamil Nadu. The company which got established in 2008 was built on the foundations of serving the Logistics & Cargo industry. TIRWIN Management Services has a rich history that spans ~15 years. Our legacy has been shaped by the dedication, perseverance, and passion of (late) Mr. B. Govindarajan.
                                </p>
                                <p>
                                    At TIRWIN Management Services, we specialize in transforming your Logistics & Cargo business through expert consulting, technology innovation, comprehensive training and staffing solutions.
                                </p>
                                <div>
                                    <p className="mb-2">The name TIRWIN has been coined to rightly reflect our core business activities:</p>
                                    <ul className="list-none ml-0 space-y-1">
                                        {["TRAINING", "INNOVATION", "RESOURCING"].map(item => (
                                            <li key={item} className="flex items-center gap-3">
                                                <span style={{ width: "16px", height: "1.5px", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                                                <span style={{ fontWeight: 600, color: "#0B2046", fontSize: "0.85rem", letterSpacing: "0.08em" }}>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <p style={{ color: "#0B2046", fontWeight: 500 }}>
                                    And work towards guaranteeing a WIN/WIN outcome to all stakeholders. The objective is to make TIRWIN as a Leader in enabling and complementing growth of Logistics & Cargo industry.
                                </p>
                            </div>
                        </div>
                        <div className="relative min-h-[360px] flex items-center justify-center p-12"
                            style={{ background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)" }}>
                            <div style={{ position: "absolute", inset: 0, backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
                            <div style={{ position: "relative", zIndex: 1, width: "280px", height: "140px" }}>
                                <Image
                                    src={logoImage}
                                    alt="Tirwin Logo"
                                    fill
                                    style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                                />
                            </div>
                        </div>
                    </div>
                </Card>

                {/* Why Choose TIRWIN */}
                <div className="mb-20">
                    <div className="text-center mb-12 space-y-3">
                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Why Us</p>
                        <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 700, color: "#0B2046" }}>
                            Why Choose TIRWIN as your partner?
                        </h2>
                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", color: "var(--text-muted)", maxWidth: "640px", margin: "0 auto", lineHeight: 1.7, fontWeight: 300 }}>
                            Choose TIRWIN for our expertise, innovation, and commitment to delivering tailored solutions that drive your success. We partner with you to meet your unique needs and ensure scalable, efficient outcomes.
                        </p>
                        <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "12px auto 0" }} />
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {whyChooseFeatures.map((feature, idx) => (
                            <Card
                                key={idx}
                                className="group"
                                style={{
                                    border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                    boxShadow: "0 2px 10px rgba(11,32,70,0.04)",
                                    transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                    background: "#fff",
                                }}
                                onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 12px 32px rgba(11,32,70,0.1)"; el.style.borderColor = "rgba(200,134,10,0.3)"; }}
                                onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 10px rgba(11,32,70,0.04)"; el.style.borderColor = "rgba(11,32,70,0.08)"; }}
                            >
                                <CardHeader>
                                    <div
                                        className="h-11 w-11 flex items-center justify-center mb-4 transition-all duration-300"
                                        style={{ background: "var(--gold-pale)", color: "var(--gold)" }}
                                        onMouseEnter={() => { }}
                                    >
                                        <feature.icon className="h-5 w-5" />
                                    </div>
                                    <CardTitle style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.05rem", color: "#0B2046" }}>
                                        {feature.title}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.75, fontWeight: 300 }}>
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Ventures & Publications */}
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div className="md:col-span-2 space-y-6">
                        {sectionTitle("What We Do", "Our Ventures")}
                        <div className="grid sm:grid-cols-3 gap-4">
                            {ventures.map((venture, idx) => (
                                <Card key={idx} style={{
                                    border: "1px solid rgba(200,134,10,0.2)",
                                    borderRadius: "2px",
                                    background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)",
                                }}>
                                    <CardHeader>
                                        <CardTitle style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", color: "var(--gold-light)" }}>
                                            {venture.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.55)", fontWeight: 300 }}>
                                            {venture.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-6">
                        {sectionTitle("Publications", "Our Publication")}
                        <Card style={{
                            border: "1px solid rgba(200,134,10,0.2)", borderRadius: "2px",
                            background: "var(--gold-pale)",
                        }}>
                            <CardContent className="p-8 flex flex-col justify-center space-y-4">
                                <BookOpen className="h-9 w-9" style={{ color: "var(--gold)" }} />
                                <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.88rem", color: "#0B2046", lineHeight: 1.75, fontWeight: 400 }}>
                                    TIRWIN is IATA's Channel partner to distribute IATA Publication's in India. For more details or enquiries, contact us.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </main>
    );
}
