"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        category: "Webinar Details",
        items: [
            {
                question: "What topics are covered in the webinars and masterclasses?",
                answer: "Our webinars and masterclasses cover a wide range of topics related to Supply Chain, Logistics, and Cargo industries. We focus on digital transformation, skill development, and industry best practices to empower professionals."
            },
            {
                question: "How do I register for a webinar?",
                answer: "You can register for any upcoming webinar through our 'Master Classes' or 'Training' pages. Simply click on the 'Register Now' button for the desired session."
            },
            {
                question: "Are the webinar sessions recorded?",
                answer: "Yes, registered participants will typically have access to the session recordings for a limited time after the live event concludes."
            }
        ]
    },
    {
        category: "Terms & Conditions",
        items: [
            {
                question: "What are your general terms and conditions?",
                answer: <>By accessing our platform and registering for our courses, you agree to our general terms of service. For a comprehensive overview of user responsibilities, platform usage rules, and legal agreements, please review our complete <Link href="/terms-conditions" className="text-[#C8860A] hover:underline">Terms &amp; Conditions</Link>.</>
            },
            {
                question: "What is your cancellation policy?",
                answer: "Cancellations made within the specified timeframe prior to the event will be eligible for a refund. Please refer to our Terms & Conditions page for the exact cancellation windows."
            }
        ]
    },
    {
        category: "Privacy Policy",
        items: [
            {
                question: "How do you protect my personal data?",
                answer: <>We are committed to ensuring your privacy and data security. Your information is strictly used for platform access, course registration, and relevant communications. We do not sell your data to third parties. Read our full <Link href="/privacy-policy" className="text-[#C8860A] hover:underline">Privacy Policy</Link> for more details.</>
            },
            {
                question: "Will my contact information be shared with webinar instructors?",
                answer: "Instructors may receive basic attendee lists for session planning, but your detailed contact information remains secure with Tirwin Talent."
            }
        ]
    },
    {
        category: "Pricing Policy",
        items: [
            {
                question: "How is the pricing structured for your courses?",
                answer: <>Our pricing varies depending on the type of course, duration, and level of expertise required. We offer transparent pricing with no hidden fees. For detailed information on our fee structure, payment methods, and refund eligibility, please see our <Link href="/pricing-policy" className="text-[#C8860A] hover:underline">Pricing Policy</Link>.</>
            },
            {
                question: "Do you offer group discounts?",
                answer: "Yes, we offer specialized pricing for corporate registrations and group bookings. Please contact our support team for customized pricing packages."
            }
        ]
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<string | null>("0-0");

    const toggleFAQ = (id: string) => {
        setOpenIndex(openIndex === id ? null : id);
    };

    return (
        <main className="min-h-screen" style={{ background: "#F7F8FA" }}>
            {/* Navy Hero Band */}
            <div className="hero-band py-20 px-4 text-white text-center" style={{ background: "linear-gradient(135deg, #0B2046 0%, #112a5c 100%)" }}>
                <div className="container mx-auto max-w-3xl space-y-4">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "10px", fontWeight: 600, letterSpacing: "0.22em", color: "var(--gold-light, #FEDA77)", textTransform: "uppercase"
                    }}>SUPPORT &amp; INFORMATION</p>
                    <h1 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "clamp(2.4rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.1 }}>
                        Frequently Asked Questions
                    </h1>
                    <div style={{ width: "48px", height: "2px", background: "var(--gold, #C8860A)", margin: "0 auto" }} />
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)" }}>
                        Find answers to common questions about our platform, webinars, and policies.
                    </p>
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6 py-20 max-w-4xl">
                {faqs.map((category, catIndex) => (
                    <div key={catIndex} className="mb-12">
                        <h3 style={{
                            fontFamily: "'Playfair Display', Georgia, serif",
                            fontSize: "1.5rem",
                            fontWeight: 600,
                            color: "var(--navy, #0B2046)",
                            marginBottom: "1.5rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "12px"
                        }}>
                            <span style={{ width: "24px", height: "2px", background: "var(--gold, #C8860A)", display: "inline-block" }} />
                            {category.category}
                        </h3>
                        <div className="space-y-4">
                            {category.items.map((faq, itemIndex) => {
                                const id = `${catIndex}-${itemIndex}`;
                                const isOpen = openIndex === id;
                                return (
                                    <div 
                                        key={itemIndex}
                                        className="bg-white rounded-md overflow-hidden transition-all duration-200"
                                        style={{ 
                                            border: "1px solid rgba(11,32,70,0.08)",
                                            boxShadow: isOpen ? "0 8px 24px rgba(11,32,70,0.04)" : "none"
                                        }}
                                    >
                                        <button
                                            onClick={() => toggleFAQ(id)}
                                            className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 bg-white hover:bg-gray-50 transition-colors"
                                        >
                                            <span style={{ 
                                                fontFamily: "var(--font-dm-sans), sans-serif", 
                                                fontSize: "1.05rem", 
                                                fontWeight: 500, 
                                                color: isOpen ? "var(--gold, #C8860A)" : "#0B2046",
                                                transition: "color 0.2s"
                                            }}>
                                                {faq.question}
                                            </span>
                                            {isOpen ? (
                                                <ChevronUp className="w-5 h-5 flex-shrink-0" style={{ color: "var(--gold, #C8860A)" }} />
                                            ) : (
                                                <ChevronDown className="w-5 h-5 flex-shrink-0 text-gray-400" />
                                            )}
                                        </button>
                                        
                                        <div 
                                            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 pb-6 opacity-100" : "max-h-0 opacity-0"}`}
                                        >
                                            <p style={{ 
                                                fontFamily: "var(--font-dm-sans), sans-serif", 
                                                fontSize: "0.95rem", 
                                                color: "#4B5563", 
                                                lineHeight: 1.7, 
                                                fontWeight: 300 
                                            }}>
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
                
                <div className="mt-16 text-center p-8 bg-white rounded-md" style={{ border: "1px solid rgba(200,134,10,0.2)" }}>
                    <h4 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: "1.25rem", color: "#0B2046", marginBottom: "1rem", fontWeight: 600 }}>
                        Still have questions?
                    </h4>
                    <p style={{ fontFamily: "var(--font-dm-sans), sans-serif", color: "#4B5563", marginBottom: "1.5rem" }}>
                        Our team is here to help you with any inquiries you might have.
                    </p>
                    <Link 
                        href="/contact-us"
                        className="inline-flex items-center justify-center rounded-sm transition-colors"
                        style={{ 
                            background: "var(--gold, #C8860A)", 
                            color: "#fff", 
                            padding: "12px 28px", 
                            fontSize: "0.9rem", 
                            fontWeight: 600, 
                            textTransform: "uppercase", 
                            letterSpacing: "0.08em" 
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = "#0B2046"}
                        onMouseLeave={(e) => e.currentTarget.style.background = "var(--gold, #C8860A)"}
                    >
                        Contact Us
                    </Link>
                </div>
            </div>
        </main>
    );
}
