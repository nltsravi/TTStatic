"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const bodyFont = { fontFamily: "var(--font-dm-sans), sans-serif" } as const;
const serif = { fontFamily: "'Playfair Display', Georgia, serif" } as const;

export default function ContactUs() {
    return (
        <main className="min-h-screen" style={{ background: "#F7F8FA" }}>

            {/* Navy Hero Band */}
            <div className="hero-band py-20 px-4 text-white text-center">
                <div className="container mx-auto max-w-3xl space-y-4">
                    <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "var(--gold-light)", textTransform: "uppercase" }}>
                        Reach Out
                    </p>
                    <h1 style={{ ...serif, fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        Contact Us
                    </h1>
                    <div style={{ width: "48px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                    <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.18em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>
                        Get in Touch with TIRWIN
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl py-20">
                <div className="bg-white p-8 md:p-14" style={{ borderRadius: "2px", boxShadow: "0 4px 32px rgba(11,32,70,0.07)" }}>

                    <div className="text-center mb-12 space-y-3">
                        <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.2em", color: "var(--gold)", textTransform: "uppercase" }}>Let's Talk</p>
                        <h2 style={{ ...serif, fontSize: "clamp(1.6rem, 3vw, 2.1rem)", fontWeight: 700, color: "#0B2046" }}>Get in Touch</h2>
                        <div style={{ width: "40px", height: "2px", background: "var(--gold)", margin: "0 auto" }} />
                        <p style={{ ...bodyFont, fontSize: "0.9rem", color: "var(--text-muted)", maxWidth: "480px", margin: "10px auto 0", lineHeight: 1.7, fontWeight: 300 }}>
                            We'd love to hear from you. Reach out to us for any inquiries, partnerships, or support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Address */}
                        <Card
                            style={{
                                border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                background: "#F7F8FA", boxShadow: "none",
                                transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                            }}
                            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,134,10,0.3)"; el.style.boxShadow = "0 6px 20px rgba(11,32,70,0.07)"; }}
                            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(11,32,70,0.08)"; el.style.boxShadow = "none"; }}
                        >
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                <div className="h-14 w-14 flex items-center justify-center mb-2"
                                    style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)", color: "#fff", borderRadius: "50%" }}>
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <h3 style={{ ...serif, fontSize: "1.1rem", fontWeight: 600, color: "#0B2046" }}>Our Address</h3>
                                <div style={{ ...bodyFont, fontSize: "0.82rem", color: "#4B5563", lineHeight: 1.8, fontWeight: 300 }}>
                                    <p style={{ fontWeight: 600, color: "#0B2046", marginBottom: "6px" }}>TIRWIN MANAGEMENT SERVICES PRIVATE LIMITED</p>
                                    <p>PNO89, DO 12, THIRUPPANAR STREET</p>
                                    <p>SUNDARAM COLONY, VIJAYARAGHAVAN BASHYAM</p>
                                    <p>TAMBARAM</p>
                                    <p>TAMILNADU, INDIA 600059</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <div className="space-y-4">
                            {[
                                {
                                    Icon: Phone,
                                    label: "Phone",
                                    value: "+91 9841970466",
                                },
                                {
                                    Icon: Mail,
                                    label: "Email",
                                    value: "tirwin.communications@tirwin.in",
                                },
                            ].map(({ Icon, label, value }, i) => (
                                <Card
                                    key={i}
                                    style={{
                                        border: "1px solid rgba(11,32,70,0.08)", borderRadius: "2px",
                                        background: "#F7F8FA", boxShadow: "none",
                                        transition: "border-color 0.25s ease, box-shadow 0.25s ease",
                                    }}
                                    onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(200,134,10,0.3)"; el.style.boxShadow = "0 6px 20px rgba(11,32,70,0.07)"; }}
                                    onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = "rgba(11,32,70,0.08)"; el.style.boxShadow = "none"; }}
                                >
                                    <CardContent className="p-6 flex items-center gap-5">
                                        <div className="h-12 w-12 flex-shrink-0 flex items-center justify-center"
                                            style={{ background: "linear-gradient(135deg, var(--gold) 0%, var(--gold-light) 100%)", color: "#fff", borderRadius: "50%" }}>
                                            <Icon className="h-5 w-5" />
                                        </div>
                                        <div>
                                            <p style={{ ...bodyFont, fontSize: "10px", fontWeight: 600, letterSpacing: "0.12em", color: "var(--text-subtle)", textTransform: "uppercase", marginBottom: "4px" }}>{label}</p>
                                            <p style={{ ...bodyFont, fontSize: "1rem", fontWeight: 600, color: "#0B2046" }} className="break-all">{value}</p>
                                        </div>
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
