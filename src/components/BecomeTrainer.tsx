"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BecomeTrainer() {
    return (
        <section className="py-24 relative" style={{ backgroundColor: "#F9FAFB" }}>
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

                    {/* Content Section */}
                    <div className="w-full md:w-1/2 flex flex-col justify-center">
                        <h2
                            className="mb-6 font-bold tracking-tight text-[#0B2046]"
                            style={{
                                fontFamily: "'Playfair Display', Georgia, serif",
                                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                                lineHeight: 1.15
                            }}
                        >
                            Become a Trainer
                        </h2>
                        <p
                            className="mb-10 text-lg leading-relaxed text-[#4A5568]"
                            style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                fontWeight: 400
                            }}
                        >
                            Join our community of expert trainers and share your knowledge
                            with students around the world. Create courses, host webinars,
                            and earn income while making a difference.
                        </p>

                        <div>
                            <Button
                                size="lg"
                                className="group relative overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                                style={{
                                    backgroundColor: "#0070F3", // Primary action blue
                                    color: "white",
                                    fontFamily: "var(--font-dm-sans), sans-serif",
                                    fontWeight: 600,
                                    letterSpacing: "0.02em",
                                    padding: "0 32px",
                                    height: "52px",
                                    borderRadius: "6px",
                                    border: "none",
                                }}
                                asChild
                            >
                                <Link href="/trainer-registration" className="relative z-10 flex items-center justify-center">
                                    <span className="relative z-10">Start Training Today</span>
                                    {/* Hover Gradient Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="w-full md:w-1/2 h-[400px] md:h-[500px] relative overflow-hidden rounded-2xl shadow-xl">
                        <Image
                            src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80"
                            alt="Expert trainer teaching online course"
                            fill
                            style={{ objectFit: "cover", objectPosition: "center" }}
                            className="transition-transform duration-700 hover:scale-105"
                            priority
                        />
                        {/* Subtle overlay to enhance image contrast */}
                        <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                    </div>

                </div>
            </div>
        </section>
    );
}
