"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const trainers = [
    {
        name: "Venkatesh Kuppuswamy (Venkat)",
        role: "Director & Chief Operations Officer",
        image: "https://www.tirwintalent.com/assets/images/instructor-section.jpg",
        initials: "VK",
    },
];

export function Trainers() {
    return (
        <section className="py-28 bg-white relative overflow-hidden">
            {/* Geometric accent lines (CSS-only, no blurry circles) */}
            <div className="absolute inset-0 pointer-events-none" style={{
                backgroundImage: "repeating-linear-gradient(-45deg, transparent, transparent 80px, rgba(200,134,10,0.03) 80px, rgba(200,134,10,0.03) 81px)",
            }} />
            {/* Top thin gold rule */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24" style={{ height: "2px", background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />

            <div className="container relative mx-auto px-4 md:px-6 z-10">

                {/* Section header */}
                <div className="flex flex-col items-center text-center space-y-5 mb-16">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        color: "var(--gold)",
                        textTransform: "uppercase"
                    }}>
                        Who Teaches
                    </p>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        color: "#0B2046",
                        lineHeight: 1.15,
                    }}>
                        Our Expert Trainers
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "1.05rem",
                        color: "var(--text-muted)",
                        maxWidth: "550px",
                        lineHeight: 1.7,
                        fontWeight: 300,
                    }}>
                        Meet our verified trainers who are leaders in their fields.
                    </p>
                    <div className="flex items-center gap-2 pt-2">
                        <div style={{ width: "48px", height: "2px", background: "var(--gold)" }} />
                        <div style={{ width: "8px", height: "8px", background: "var(--gold)", borderRadius: "50%" }} />
                        <div style={{ width: "48px", height: "2px", background: "var(--gold)" }} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden text-center group"
                            style={{
                                border: "1px solid rgba(11,32,70,0.08)",
                                borderRadius: "2px",
                                boxShadow: "0 2px 12px rgba(11,32,70,0.06)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(-4px)";
                                el.style.boxShadow = "0 12px 36px rgba(11,32,70,0.12)";
                                el.style.borderColor = "rgba(200,134,10,0.35)";
                            }}
                            onMouseLeave={(e) => {
                                const el = e.currentTarget as HTMLElement;
                                el.style.transform = "translateY(0)";
                                el.style.boxShadow = "0 2px 12px rgba(11,32,70,0.06)";
                                el.style.borderColor = "rgba(11,32,70,0.08)";
                            }}
                        >
                            <CardHeader className="pt-8 pb-4 relative">
                                {/* Navy banner within card */}
                                <div className="absolute top-0 left-0 right-0 h-20 group-hover:opacity-90 transition-opacity"
                                    style={{ background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)" }}
                                />
                                {/* Gold accent top stripe */}
                                <div className="absolute top-0 left-0 right-0 h-[3px]"
                                    style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }}
                                />
                                <div className="relative mx-auto w-24 h-24 mb-2">
                                    <Avatar className="w-24 h-24" style={{
                                        border: "3px solid var(--gold)",
                                        boxShadow: "0 0 0 3px rgba(200,134,10,0.15), 0 4px 16px rgba(11,32,70,0.2)"
                                    }}>
                                        <AvatarImage src={trainer.image} alt={trainer.name} style={{ objectFit: "cover" }} />
                                        <AvatarFallback style={{
                                            background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)",
                                            color: "var(--gold-light)",
                                            fontSize: "1.5rem",
                                            fontWeight: 700,
                                            fontFamily: "'Playfair Display', Georgia, serif"
                                        }}>{trainer.initials}</AvatarFallback>
                                    </Avatar>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 pb-8 space-y-4">
                                <div>
                                    <h3 style={{
                                        fontFamily: "'Playfair Display', Georgia, serif",
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                        color: "#0B2046",
                                        lineHeight: 1.3,
                                    }}>
                                        {trainer.name}
                                    </h3>
                                    <p style={{
                                        fontFamily: "var(--font-dm-sans), sans-serif",
                                        fontSize: "0.78rem",
                                        color: "var(--gold)",
                                        fontWeight: 600,
                                        letterSpacing: "0.04em",
                                        marginTop: "0.35rem",
                                    }}>
                                        {trainer.role}
                                    </p>
                                </div>
                                <Button
                                    variant="outline"
                                    size="sm"
                                    className="w-full group/btn transition-all duration-300"
                                    style={{
                                        fontFamily: "var(--font-dm-sans), sans-serif",
                                        border: "1px solid rgba(11,32,70,0.15)",
                                        color: "#0B2046",
                                        borderRadius: "1px",
                                        letterSpacing: "0.06em",
                                        fontSize: "11px",
                                        textTransform: "uppercase",
                                    }}
                                    asChild
                                >
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Linkedin className="h-3.5 w-3.5" />
                                        <span>View Profile</span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
