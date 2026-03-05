"use client";

import React, { useState } from "react";
import Head from "next/head";

export default function TrainerRegistrationPage() {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <React.Fragment>
            <Head>
                <title>Trainer Registration | Tirwin Talent</title>
                <meta name="description" content="Register to become a trainer with Tirwin Talent." />
            </Head>
            <div className="min-h-screen bg-[#F9FAFB] flex flex-col pt-12 pb-24">

                {/* Header Section */}
                <div className="container mx-auto px-4 md:px-6 mb-8 mt-12 text-center max-w-3xl">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "12px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        color: "var(--gold)",
                        textTransform: "uppercase",
                        marginBottom: "16px"
                    }}>
                        Join Our Community
                    </p>
                    <h1 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        color: "#0B2046",
                        lineHeight: 1.15,
                        marginBottom: "20px"
                    }}>
                        Trainer Registration
                    </h1>
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "1.1rem",
                        color: "var(--text-muted)",
                        lineHeight: 1.6,
                        fontWeight: 300,
                    }}>
                        Please fill out the application form below to start your journey as a Tirwin Talent trainer.
                    </p>
                    {/* Dual-line gold rule */}
                    <div className="flex items-center justify-center gap-2 pt-6">
                        <div style={{ width: "48px", height: "1.5px", background: "var(--gold)" }} />
                        <div style={{ width: "6px", height: "6px", background: "var(--gold)", borderRadius: "50%" }} />
                        <div style={{ width: "48px", height: "1.5px", background: "var(--gold)" }} />
                    </div>
                </div>

                {/* Form Container */}
                <div className="container mx-auto px-4 md:px-6 max-w-4xl relative">
                    <div
                        className="bg-white w-full rounded-2xl relative overflow-hidden"
                        style={{
                            boxShadow: "0 20px 40px -10px rgba(11,32,70,0.08)",
                            border: "1px solid rgba(11,32,70,0.05)",
                            minHeight: "800px"
                        }}
                    >
                        {isLoading && (
                            <div className="absolute inset-0 flex flex-col items-center justify-center bg-white z-10">
                                <div className="w-10 h-10 border-4 border-gray-200 border-t-[var(--gold)] rounded-full animate-spin"></div>
                                <p className="mt-4 text-gray-500 font-medium tracking-wide" style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}>
                                    Loading registration form...
                                </p>
                            </div>
                        )}

                        <iframe
                            src="https://docs.google.com/forms/d/e/1FAIpQLSdqj1pZZPs79SNzWunpN-Nt7wKztr13aKGCIeiY0KQd_iqJ4Q/viewform?embedded=true"
                            width="100%"
                            height="1200"
                            style={{
                                border: "none"
                            }}
                            title="Trainer Registration Form"
                            onLoad={() => setIsLoading(false)}
                            className="w-full"
                        >
                            Loading…
                        </iframe>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}
