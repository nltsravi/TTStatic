import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="relative min-h-[640px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0" style={{ background: "#0B2046" }}>
                <Image
                    src="https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/banner-image-slider.png"
                    alt="Logistics background"
                    fill
                    priority
                    style={{ objectFit: "cover", objectPosition: "center", opacity: 0.35 }}
                />
                {/* Multi-stop gradient overlay: strong left, transparent right */}
                <div className="absolute inset-0" style={{
                    background: "linear-gradient(105deg, rgba(11,32,70,0.97) 0%, rgba(11,32,70,0.82) 45%, rgba(11,32,70,0.35) 75%, rgba(11,32,70,0.1) 100%)"
                }} />
                {/* Subtle dot grid texture */}
                <div className="absolute inset-0" style={{
                    backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)",
                    backgroundSize: "28px 28px"
                }} />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 py-24 md:py-36 flex flex-col items-start text-white">
                <div className="max-w-3xl space-y-7 animate-fade-up">

                    {/* Gold label badge */}
                    <div className="inline-flex items-center gap-3">
                        <div style={{
                            width: "32px", height: "1px",
                            background: "linear-gradient(90deg, #C8860A, #D4A02A)"
                        }} />
                        <span style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "11px",
                            fontWeight: 600,
                            letterSpacing: "0.18em",
                            color: "#D4A02A",
                            textTransform: "uppercase"
                        }}>
                            Tirwin Talent Platform
                        </span>
                        <div style={{
                            width: "32px", height: "1px",
                            background: "linear-gradient(90deg, #D4A02A, transparent)"
                        }} />
                    </div>

                    {/* Headline — Playfair Display */}
                    <h1 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
                        fontWeight: 700,
                        lineHeight: 1.1,
                        letterSpacing: "-0.01em",
                    }}>
                        Empowering Growth Through{" "}
                        <span style={{ color: "#D4A02A", fontStyle: "italic" }}>Skill-Based</span>{" "}
                        Talent Strategies.
                    </h1>

                    {/* Thin gold rule */}
                    <div style={{
                        width: "60px", height: "2px",
                        background: "linear-gradient(90deg, #C8860A, #D4A02A)",
                        borderRadius: "2px"
                    }} />

                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "clamp(1.125rem, 2.5vw, 1.35rem)",
                        color: "rgba(255,255,255,0.72)",
                        fontWeight: 300,
                        lineHeight: 1.75,
                        maxWidth: "600px"
                    }}>
                        A transformative approach to talent management for the Supply Chain, Logistics, and Cargo industries.
                    </p>

                    {/* CTAs */}
                    <div className="pt-4 flex flex-col sm:flex-row gap-4">
                        <Button
                            size="lg"
                            className="btn-gold h-14 px-8 text-sm tracking-widest uppercase rounded-none"
                            style={{ fontFamily: "var(--font-dm-sans), sans-serif", letterSpacing: "0.1em" }}
                        >
                            START YOUR JOURNEY WITH US
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="h-14 px-8 text-sm uppercase bg-transparent rounded-none transition-colors duration-300"
                            style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                letterSpacing: "0.1em",
                                border: "1px solid rgba(212,160,42,0.5)",
                                color: "#D4A02A",
                            }}
                        >
                            Explore Master Classes
                        </Button>
                    </div>
                </div>
            </div>

            {/* Bottom decorative diagonal cut */}
            <div className="absolute bottom-0 left-0 right-0 z-10 overflow-hidden leading-[0]">
                <svg
                    viewBox="0 0 1440 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ display: "block", width: "100%" }}
                    preserveAspectRatio="none"
                >
                    <path d="M0 48L1440 0V48H0Z" fill="white" />
                </svg>
            </div>
        </div>
    );
}
