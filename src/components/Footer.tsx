import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#0B2046] text-white py-16">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-white/10 pb-12">
                    {/* Brand & Partner Col */}
                    <div className="lg:col-span-2 space-y-6">
                        <Link href="/" className="inline-block">
                            <div className="relative h-12 w-48 bg-white/10 rounded-lg p-2 filter brightness-0 invert">
                                <Image
                                    src="/tirwin-talent-logo-new.jpg"
                                    alt="Tirwin Talent Logo"
                                    fill
                                    style={{ objectFit: "contain", padding: "8px" }}
                                />
                            </div>
                        </Link>
                        <p className="text-slate-300 text-sm leading-relaxed max-w-md">
                            Tirwin Talent – A specialized webinar platform by TIRWIN Management PVT. LTD, designed to empower logistics professionals. In collaboration with Neolumina Technology Solutions – Illuminating the Future.
                        </p>
                        <div className="pt-4">
                            <p className="text-xs text-slate-400 mb-3 uppercase tracking-wider font-semibold">Technology Partner</p>
                            <div className="relative h-10 w-32 bg-white rounded p-1">
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
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide">TIRWIN</h4>
                        <ul className="space-y-3">
                            {[
                                "About Us",
                                "Branding",
                                "What we Offer",
                                "Leadership",
                                "Careers",
                                "Contact Us",
                                "Terms & Conditions",
                                "Privacy Policy",
                                "Pricing Policy"
                            ].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-sm text-slate-400 hover:text-white hover:underline transition-colors">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social Links Col */}
                    <div className="space-y-6">
                        <h4 className="text-lg font-bold text-white tracking-wide">Follow Us</h4>
                        <div className="flex items-center gap-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-orange-500 transition-colors group">
                                <Facebook className="h-5 w-5 text-slate-300 group-hover:text-white" />
                                <span className="sr-only">Facebook</span>
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors group">
                                <Linkedin className="h-5 w-5 text-slate-300 group-hover:text-white" />
                                <span className="sr-only">LinkedIn</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-400">
                    <p>© 2025 TIRWIN Management PVT. LTD All Rights Reserved.</p>
                    <div className="flex items-center gap-4">
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
