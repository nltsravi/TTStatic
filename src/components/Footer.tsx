"use client";

import Image from "next/image";
import Link from "next/link";
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
                                    src="/nts-logo.png"
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
                                { label: "Leadership", href: "/leadership" },
                                { label: "Contact Us", href: "/contact-us" },
                                { label: "Terms & Conditions", href: "/terms-conditions" },
                                { label: "Privacy Policy", href: "/privacy-policy" },
                                { label: "Pricing Policy", href: "/pricing-policy" },
                                { label: "FAQ", href: "/faq" }
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
                                href="https://www.instagram.com/tirwin_talent/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                                style={{ width: "40px", height: "40px", border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="h-5 w-5">
                                    <defs>
                                        <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                                            <stop offset="0%" stopColor="#F58529" />
                                            <stop offset="25%" stopColor="#FEDA77" />
                                            <stop offset="50%" stopColor="#DD2A7B" />
                                            <stop offset="75%" stopColor="#8134AF" />
                                            <stop offset="100%" stopColor="#515BD4" />
                                        </linearGradient>
                                    </defs>
                                    <path fill="url(#ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm5.882-10.615a1.44 1.44 0 1 0-2.88 0 1.44 1.44 0 0 0 2.88 0z"/>
                                </svg>
                                <span className="sr-only">Instagram</span>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/tirwin-talent-0a90aa31a/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                                style={{ width: "40px", height: "40px", border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0A66C2" className="h-5 w-5">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                                </svg>
                                <span className="sr-only">LinkedIn</span>
                            </a>
                            <a
                                href="https://www.facebook.com/profile.php?id=61589121061920"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                                style={{ width: "40px", height: "40px", border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#1877F2" className="h-5 w-5">
                                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                                </svg>
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a
                                href="https://wa.me/919361970466?text=Hello%20I%20am%20interested%20on%20your%20webinars."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
                                style={{ width: "40px", height: "40px", border: "1px solid rgba(0,0,0,0.08)" }}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#25D366" className="h-5 w-5">
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
                        {process.env.NEXT_PUBLIC_BUILD_NUMBER && (
                            <span className="block mt-1 md:inline md:mt-0 md:ml-4 opacity-75">
                                Build Number: {process.env.NEXT_PUBLIC_BUILD_NUMBER}
                            </span>
                        )}
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

