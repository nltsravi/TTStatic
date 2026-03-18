"use client";

import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";
import logoImage from "../../public/tirwin-logo.png";

export function Footer() {
    return (
        <footer className="bg-[#FAFAF8] text-[#3D3D3D] border-t border-gray-200" style={{ paddingTop: "72px", paddingBottom: "40px" }}>
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-10">

                    {/* Brand & Partner Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative h-16 w-64 p-2 rounded"
                                style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(200,134,10,0.15)" }}>
                                <Image
                                    src={logoImage}
                                    alt="Tirwin Talent Logo"
                                    fill
                                    style={{ objectFit: "contain", padding: "6px" }}
                                />
                            </div>
                        </Link>
                        <p style={{
                            fontFamily: "var(--font-dm-sans), sans-serif",
                            fontSize: "0.95rem",
                            color: "rgba(0,0,0,0.65)",
                            lineHeight: 1.8,
                            maxWidth: "380px",
                            fontWeight: 300,
                        }}>
                            Tirwin Talent – A specialized webinar platform by TIRWIN Management PVT. LTD, designed to empower logistics professionals.
                        </p>
                        <div>
                            <p style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                fontSize: "11px",
                                color: "var(--gold)",
                                letterSpacing: "0.18em",
                                textTransform: "uppercase",
                                fontWeight: 600,
                                marginBottom: "10px",
                            }}>
                                Technology Partner
                            </p>
                            <div className="relative h-10 w-32 rounded p-1 mb-3"
                                style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.08)" }}>
                                <Image
                                    src="https://www.tirwintalent.com/assets/images/nts-logo.png"
                                    alt="NTS Partner Logo"
                                    fill
                                    style={{ objectFit: "contain" }}
                                />
                            </div>
                            <p style={{
                                fontFamily: "var(--font-dm-sans), sans-serif",
                                fontSize: "0.85rem",
                                color: "rgba(0,0,0,0.65)",
                                lineHeight: 1.5,
                                maxWidth: "250px",
                                fontWeight: 300,
                            }}>
                                Neolumina Technology Solutions – Illuminating the Future.
                            </p>
                        </div>
                    </div>

                    {/* TIRWIN Links Col */}
                    <div className="space-y-5">
                        <h4 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "1.125rem",
                            fontWeight: 600,
                            color: "var(--navy)",
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
                                            color: "rgba(0,0,0,0.6)",
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
                            color: "var(--navy)",
                            display: "flex",
                            alignItems: "center",
                            gap: "8px",
                        }}>
                            <span style={{ display: "inline-block", width: "16px", height: "1.5px", background: "var(--gold)", flexShrink: 0 }} />
                            Follow Us
                        </h4>
                        <div className="flex items-center gap-3">
                            <a
                                href="https://www.instagram.com/tirwin.management/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                style={{
                                    width: "38px", height: "38px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "1px solid rgba(200,134,10,0.25)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,134,10,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.5)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.25)"; }}
                            >
                                <Instagram className="h-4 w-4" style={{ color: "rgba(0,0,0,0.6)" }} />
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tirwin-talent-0a90aa31a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                style={{
                                    width: "38px", height: "38px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "1px solid rgba(200,134,10,0.25)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,134,10,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.5)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.25)"; }}
                            >
                                <Linkedin className="h-4 w-4" style={{ color: "rgba(0,0,0,0.6)" }} />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://wa.me/917358626171?text=Hello%20I%20am%20interested%20on%20your%20webinars."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group"
                                style={{
                                    width: "38px", height: "38px",
                                    display: "flex", alignItems: "center", justifyContent: "center",
                                    border: "1px solid rgba(200,134,10,0.25)",
                                    transition: "background 0.2s ease, border-color 0.2s ease",
                                }}
                                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(200,134,10,0.1)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.5)"; }}
                                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(200,134,10,0.25)"; }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" style={{ color: "rgba(0,0,0,0.6)" }}>
                                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                                </svg>
                                <span className="sr-only">WhatsApp</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Gold separator */}
                <div style={{ height: "1px", background: "linear-gradient(90deg, transparent, rgba(200,134,10,0.2), transparent)", marginBottom: "28px" }} />

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "0.875rem",
                        color: "rgba(0,0,0,0.5)",
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
                                    color: "rgba(0,0,0,0.5)",
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

