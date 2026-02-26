"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";
import logoImage from "../../public/tirwin-talent-logo-new.jpg";

export function Footer() {
    return (
        <footer className="dot-grid-bg text-white" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                    {/* Brand & Partner Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative h-16 w-64 p-2 rounded"
                                style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(200,134,10,0.15)" }}>
                                <Image
                                    src={logoImage}
                                    alt="Tirwin Talent Logo"
                                    fill
                                    style={{ objectFit: "contain", padding: "6px", filter: "brightness(0) invert(1)" }}
                                />
                            </div>
                        </Link>
                        <p style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "0.95rem",
                            color: "rgba(255,255,255,0.55)",
                            lineHeight: 1.8,
                            maxWidth: "380px",
                            fontWeight: 300,
                        }}>
                            Tirwin Talent – A specialized webinar platform by TIRWIN Management PVT. LTD, designed to empower logistics professionals. In collaboration with Neolumina Technology Solutions – Illuminating the Future.
                        </p>
                        <div>
                            <p style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                fontSize: "11px",
                                color: "rgba(200,134,10,0.75)",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                marginBottom: "10px",
                            }}>
                                Technology Partner
                            </p>
                            <div className="relative h-10 w-32 rounded p-1"
                                style={{ background: "rgba(255,255,255,0.95)" }}>
                                <Image
                                    src="https://www.tirwintalent.com/assets/images/nts-logo.png"
                                    alt="NTS Partner Logo"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                        </div>
                    </div>

                    {/* TIRWIN Links Col */}
                    <div className="space-y-5">
                        <h4 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: "#fff",
                            letterSpacing: "0.02em",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}>
                            <span style={{ display: "inline-block", width: "16px", height: "1.5px", background: "var(--gold)", flexShrink: 0 }} />
                            TIRWIN
                        </h4>
                        <ul className="space-y-2.5">
                            {[
                                { label: "About Us", href: "/about-us" },
                                { label: "Branding", href: "/branding" },
                                { label: "What we Offer", href: "#" },
                                { label: "Leadership", href: "/leadership" },
                                { label: "Careers", href: "#" },
                                { label: "Contact Us", href: "/contact-us" },
                                { label: "Terms & Conditions", href: "/terms-conditions" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                                { label: "Pricing Policy", href: "/pricing-policy" }
                            ].map((link) => (
                                <li key={link.label}>
                                    <Link
                                        href={link.href}
                                        style={{
                                            fontFamily: "var(--font-dm-sans), sans-serif",
                                            fontSize: "0.95rem",
                                            color: "rgba(255,255,255,0.5)",
                                            transition: "color 0.2s ease",
                                            fontWeight: 300,
                                        }}
                                        className="hover:text-[#D4A02A]"
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links Col */}
                    <div className="space-y-5">
                        <h4 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: "#fff",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}>
                            <span style={{ display: "inline-block", width: "16px", height: "1.5px", background: "var(--gold)", flexShrink: 0 }} />
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-3">
                            <a
                                href="#"
                                className="group"
                                style={{
                                    width: "38px", height: "38px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "1px solid rgba(200,134,10,0.25)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,134,10,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.6)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.25)"; }}
                            >
                                <Facebook className="h-4 w-4" style={{ color: "rgba(255,255,255,0.6)" }} />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="#"
                                style={{
                                    width: "38px", height: "38px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "1px solid rgba(200,134,10,0.25)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,134,10,0.15)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.6)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.25)"; }}
                            >
                                <Linkedin className="h-4 w-4" style={{ color: "rgba(255,255,255,0.6)" }} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gold separator */}
                <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,134,10,0.4), transparent)", marginBottom: "28px" }} />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.04em",
                    }}>
                        © 2025 TIRWIN Management PVT. LTD All Rights Reserved.
                    </p>
                    <div className="flex items-center gap-5">
                        {[
                            { label: "Privacy Policy", href: "/privacy-policy" },
                            { label: "Terms of Service", href: "/terms-conditions" },
                        ].map((l, i) => (
                            <Link
                                key={i}
                                href={l.href}
                                style={{
                                    fontFamily: "var(--font-dm-sans), sans-serif",
                                    fontSize: "0.875rem",
                                    color: "rgba(255,255,255,0.35)",
                                    transition: "color 0.2s ease",
                                    letterSpacing: "0.04em",
                                }}
                                className="hover:text-[#D4A02A]"
                            >
                                {l.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
