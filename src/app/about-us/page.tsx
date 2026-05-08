"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Users, Heart } from "lucide-react";
import storyImage from "../../../public/our-story.jpg";

const ventures = [
    { 
        title: "Tirwin Tech", 
        icon: Cpu,
        description: "Accelerate your digital transformation with purpose...\nWe help logistics and cargo organizations identify the right use cases, adopt the right technologies, and build scalable, cost‑efficient solutions that deliver measurable business impact." 
    },
    { 
        title: "Tirwin Talent", 
        icon: Users,
        description: "Empowering growth through skill-based talent strategies...\nAn intelligent skilling and hiring platform built exclusively for the supply chain, logistics, and freight forwarding industries. It empowers candidates to showcase their capabilities and access upskilling and career opportunities, while enabling employers to attract top talent, hire faster, and reduce recruitment costs." 
    },
    { 
        title: "Tirwin Touch", 
        icon: Heart,
        description: "Giving back with purpose....\nThrough our dedicated community initiative, we channel our commitment into creating meaningful impact in the areas of Health and Education." 
    },
];

const sectionTitle = (label: string, title: string) => (
    <div className="space-y-3 mb-12">
        {label && <p style={{
            fontFamily: "var(--font-dm-sans), sans-serif",
            fontSize: "10px", fontWeight: 600,
            letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase"
        }}>{label}</p>}
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
                            {sectionTitle("", "Our Story")}
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
                                <div className="pt-2">
                                    <a href="https://www.tirwin.in" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", background: "var(--gold)", color: "#fff", padding: "10px 24px", fontSize: "0.85rem", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em", borderRadius: "2px", transition: "background 0.2s" }} onMouseEnter={(e) => e.currentTarget.style.background = "#0B2046"} onMouseLeave={(e) => e.currentTarget.style.background = "var(--gold)"}>
                                        Know More
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="relative min-h-[360px] h-full flex items-center justify-center">
                            <Image
                                src={storyImage}
                                alt="Our Story"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                </Card>

                {/* Ventures */}
                <div className="mb-8">
                    <div className="space-y-6">
                        {sectionTitle("What We Do", "Our Ventures")}
                        <div className="grid md:grid-cols-3 gap-6">
                            {ventures.map((venture, idx) => (
                                <Card key={idx} style={{
                                    border: "1px solid rgba(200,134,10,0.2)",
                                    borderRadius: "2px",
                                    background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)",
                                }}>
                                    <CardHeader>
                                        <div className="h-10 w-10 mb-4 flex items-center justify-center rounded-sm" style={{ background: "rgba(200,134,10,0.15)", color: "var(--gold-light)" }}>
                                            <venture.icon className="h-5 w-5" />
                                        </div>
                                        <CardTitle style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", color: "var(--gold-light)" }}>
                                            {venture.title}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.75)", fontWeight: 300, whiteSpace: "pre-line", lineHeight: 1.6 }}>
                                            {venture.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
