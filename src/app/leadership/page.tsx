"use client";

import { Card, CardContent } from "@/components/ui/card";
import { User, Lightbulb, Users, LineChart, GraduationCap } from "lucide-react";

const executives = [
    {
        name: "Venkatesh Kuppuswamy (Venkat)",
        role: "Director & Chief Operations Officer",
        company: "TIRWIN Management Services",
        paragraphs: [
            "As the Director and Chief Operations Officer at TIRWIN Management Services, Venkatesh Kuppuswamy (Venkat) is at the helm of driving growth and strategic initiatives. Venkat leverages his extensive operational expertise to propel TIRWIN towards technology-led growth, establish strategic partnerships, and foster employee development, all while maintaining a strong focus on customer engagement and delivering significant business outcomes.",
            "With over three decades of professional experience in consulting, business transformation, and digital innovation, Venkat brings a wealth of knowledge to TIRWIN. His background includes leveraging AI, process automation, and analytics solutions to revolutionize business operations. Prior to joining TIRWIN, Venkat served as the Global Head of Digital Transformation for HR services at Tata Consultancy Services.",
            "At the intersection of logistics and technology, Venkat's role is pivotal in delivering transformative results for customers through cutting-edge technology and talent transformation."
        ],
        education: [
            "Engineering from BITS, Pilani",
            "MBA from Pondicherry University"
        ]
    },
    {
        name: "Rajesh Vijayaraghavan",
        role: "Head Technology",
        company: "TIRWIN Management Services",
        paragraphs: [
            "As Head of Technologies at TIRWIN Management services, Rajesh Vijayaraghavan (Rajesh) delivering technology-enabled solutions that streamline operations, reduce waste and enhance productivity for the Clients.",
            "With over two decades of professional experience in Consulting, Business process Transformation and seasoned Enterprise Solution Architect, Rajesh brings in innovative technology solutions accompanied by Industry best practices to create efficient, scalable, and sustainable processes that deliver tangible business value. Rajesh expertise lies in understanding intricate processes and identifying key areas for improvement, driving operational excellence across various industry sectors.",
            "Prior joining TIRWIN, Rajesh's served as Senior Manager at Hexaware Technologies and his career spans multiple industries, including Automobile, Semiconductor, Electronic Components, Distilleries & Beverages, and Logistics & Warehousing. With the diverse experience, Rajesh equipped me with a comprehensive understanding of industry-specific challenges and best practices."
        ],
        education: [
            "Engineering from Annamalai University",
            "MBA from ICFAI",
            "PCP Data Science from IIMK"
        ]
    }
];

const advisors = [
    {
        name: "Mr. J. Krishnan",
        role: "Logistics Industry Expert",
        paragraphs: [
            "Mr. J. Krishnan is a prominent figure in the logistics industry, associated with S Natesa Iyer Logistics LLP. He actively participates in discussions on emerging trends and challenges in logistics, sharing his insights with industry bodies like the Madras Chamber of Commerce and EXIM India.",
            "His views on the impact of geopolitical events on global trade, especially maritime sector challenges, are shared with the media, and he regularly advises government bodies on air cargo logistics, advocating for operational efficiency through talent and technology."
        ]
    },
    {
        name: "G. Raghu Shankar",
        role: "Former Executive Director",
        paragraphs: [
            "Mr. G. Raghu Shankar was the Executive Director at International Clearing & Shipping Agency (India) Pvt Ltd. He was involved in various strategic initiatives, particularly in the logistics and shipping industry.",
            "His role included overseeing operations, client acquisition, and the development of digital value propositions."
        ]
    }
];

const philosophy = [
    { title: "Innovation", description: "Continuously exploring new technologies and methodologies to transform business operations.", icon: Lightbulb },
    { title: "Collaboration", description: "Building strong partnerships and fostering teamwork to achieve exceptional results.", icon: Users },
    { title: "Excellence", description: "Maintaining the highest standards of quality and performance in everything we do.", icon: LineChart },
    { title: "Growth", description: "Investing in talent development and continuous learning to drive sustainable success.", icon: GraduationCap }
];

function SectionLabel({ label, title }: { label: string; title: string }) {
    return (
        <div className="space-y-2 mb-8">
            <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>{label}</p>
            <h2 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(1.6rem, 3vw, 2.2rem)", fontWeight: 700, color: "#0B2046", lineHeight: 1.2, borderBottom: "1px solid rgba(11,32,70,0.08)", paddingBottom: "16px" }}>
                {title}
            </h2>
        </div>
    );
}

export default function Leadership() {
    return (
        <main className="min-h-screen" style={{ background: "#F7F8FA" }}>

            {/* Navy Hero Band */}
            <div className="hero-band py-20 px-4 text-white text-center">
                <div className="container mx-auto max-w-3xl space-y-4">
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "var(--gold-light)", textTransform: "uppercase" }}>
                        TRAINING · INNOVATION · RESOURCING
                    </p>
                    <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        Our Leadership Team
                    </h1>
                    <div style={{ width: "48px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                        TRAINING - INNOVATION - RESOURCING
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-5xl py-20">
                <div className="bg-white p-8 md:p-14" style={{ borderRadius: "2px", boxShadow: "0 4px 32px rgba(11,32,70,0.07)" }}>

                    {/* Executive Team */}
                    <div className="mb-16">
                        <SectionLabel label="Our Team" title="Executive Team" />
                        <div className="space-y-8">
                            {executives.map((exec, idx) => (
                                <Card
                                    key={idx}
                                    style={{ border: "none", borderRadius: "2px", background: "#F7F8FA", position: "relative", overflow: "hidden" }}
                                >
                                    {/* Gold left accent border */}
                                    <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "3px", background: "linear-gradient(180deg, var(--gold) 0%, var(--gold-light) 100%)" }} />
                                    <CardContent className="p-8 pl-10">
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                            {/* Avatar */}
                                            <div className="flex-shrink-0">
                                                <div className="h-20 w-20 rounded-full flex items-center justify-center text-white shadow-md"
                                                    style={{ background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)", border: "2.5px solid var(--gold)" }}>
                                                    <User className="h-9 w-9" style={{ opacity: 0.8 }} />
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div className="flex-1 space-y-5">
                                                <div>
                                                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.4rem", fontWeight: 700, color: "#0B2046" }}>{exec.name}</h3>
                                                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.82rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.04em", marginTop: "4px" }}>{exec.role}</p>
                                                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.78rem", color: "var(--text-subtle)", marginTop: "2px" }}>{exec.company}</p>
                                                </div>
                                                <div className="space-y-3">
                                                    {exec.paragraphs.map((p, pIdx) => (
                                                        <p key={pIdx} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.88rem", color: "#4B5563", lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                                                    ))}
                                                </div>
                                                <div>
                                                    <h4 style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "#0B2046", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "8px" }}>Education</h4>
                                                    <ul className="space-y-1.5">
                                                        {exec.education.map((edu, eIdx) => (
                                                            <li key={eIdx} className="flex items-center gap-3">
                                                                <span style={{ width: "12px", height: "1.5px", background: "var(--gold)", display: "inline-block", flexShrink: 0 }} />
                                                                <span style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.82rem", color: "#4B5563", fontWeight: 300 }}>{edu}</span>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Advisors */}
                    <div className="mb-16">
                        <SectionLabel label="Our Advisors" title="Our Advisors" />
                        <div className="grid md:grid-cols-2 gap-6">
                            {advisors.map((advisor, idx) => (
                                <Card
                                    key={idx}
                                    style={{
                                        border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                        boxShadow: "0 2px 10px rgba(11,32,70,0.04)",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                                        background: "#fff"
                                    }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 10px 28px rgba(11,32,70,0.09)"; el.style.borderColor = "rgba(200,134,10,0.25)"; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "0 2px 10px rgba(11,32,70,0.04)"; el.style.borderColor = "rgba(11,32,70,0.08)"; }}
                                >
                                    <CardContent className="p-8">
                                        <div className="flex flex-col space-y-5">
                                            <div className="flex items-center gap-4">
                                                <div className="h-14 w-14 rounded-full flex flex-shrink-0 items-center justify-center text-white shadow-md"
                                                    style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)" }}>
                                                    <User className="h-7 w-7" />
                                                </div>
                                                <div>
                                                    <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.1rem", fontWeight: 600, color: "#0B2046" }}>{advisor.name}</h3>
                                                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.78rem", color: "var(--gold)", fontWeight: 600, letterSpacing: "0.04em", marginTop: "3px" }}>{advisor.role}</p>
                                                </div>
                                            </div>
                                            <div className="space-y-3">
                                                {advisor.paragraphs.map((p, pIdx) => (
                                                    <p key={pIdx} style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.82rem", color: "#4B5563", lineHeight: 1.8, fontWeight: 300 }}>{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Leadership Philosophy */}
                    <div>
                        <SectionLabel label="What We Believe" title="Our Leadership Philosophy" />
                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.7, maxWidth: "560px", marginBottom: "28px", fontWeight: 300 }}>
                            At TIRWIN, our leadership team embodies the core values that drive our success in the logistics and cargo industry. We believe in:
                        </p>
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {philosophy.map((item, idx) => (
                                <Card
                                    key={idx}
                                    className="group text-center"
                                    style={{
                                        border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                        background: "#F7F8FA",
                                        transition: "transform 0.25s ease, box-shadow 0.25s ease, background 0.25s ease",
                                    }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(-4px)"; el.style.boxShadow = "0 10px 28px rgba(11,32,70,0.08)"; el.style.background = "#fff"; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; el.style.background = "#F7F8FA"; }}
                                >
                                    <CardContent className="p-8 flex flex-col items-center">
                                        <div className="h-14 w-14 rounded-full flex items-center justify-center mb-5 shadow-sm"
                                            style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)", color: "#fff" }}>
                                            <item.icon className="h-7 w-7" />
                                        </div>
                                        <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1rem", fontWeight: 600, color: "#0B2046", marginBottom: "8px" }}>{item.title}</h3>
                                        <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.7, fontWeight: 300 }}>{item.description}</p>
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
