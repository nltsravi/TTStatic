"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

const categories = [
    {
        title: "Logistics",
        tag: "Trending in Logistics",
        description: "Holistic knowledge dealing with the practical aspects of moving and storing goods, information, and resources from the point of origin to the point of consumption.",
        image: "https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/logistics.png"
    },
    {
        title: "Freight & Cargo Management",
        tag: "Build Your Career",
        description: "Knowledge related to the process of planning, executing, and controlling the transportation of goods via air, sea, rail, and road. This includes tasks such as route planning, carrier selection, freight consolidation, and documentation.",
        image: "https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/cargo.png"
    },
    {
        title: "Warehouse Operations",
        tag: "New Logistics Skills",
        description: "Knowledge related to the operation and management of warehouses, ensuring the efficient storage, handling, and movement of goods. This includes inventory control, order picking, packing, and organization of storage spaces.",
        image: "https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/warehouse.png"
    },
    {
        title: "Sustainability & Green Logistics",
        tag: "Top Logistics Skills",
        description: "Knowledge of best practices that minimize the environmental impact of logistics activities. This includes reducing carbon emissions, optimizing transportation routes, using sustainable packaging, and promoting recycling.",
        image: "https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/green-logistics.png"
    },
    {
        title: "Logistics Technology & Innovation",
        tag: "Trending in Logistics",
        description: "Knowledge related to the application of advanced technologies and innovative solutions to improve logistics processes, such as automation, artificial intelligence, the Internet of Things (IoT), blockchain, and data analytics.",
        image: "https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/logistics.png"
    }
];

export function Categories() {
    return (
        <section className="py-28 stripe-bg">
            <div className="container mx-auto px-4 md:px-6">

                {/* Editorial section header */}
                <div className="mb-16 flex flex-col items-center text-center space-y-5">
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "11px",
                        fontWeight: 600,
                        letterSpacing: "0.2em",
                        color: "var(--gold)",
                        textTransform: "uppercase"
                    }}>
                        What We Teach
                    </p>
                    <h2 style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(2rem, 4vw, 3rem)",
                        fontWeight: 700,
                        color: "#0B2046",
                        lineHeight: 1.15,
                    }}>
                        Explore Our Categories
                    </h2>
                    <p style={{
                        fontFamily: "var(--font-dm-sans), sans-serif",
                        fontSize: "1.25rem",
                        color: "var(--text-muted)",
                        maxWidth: "600px",
                        lineHeight: 1.7,
                        fontWeight: 300,
                    }}>
                        Find Sessions that match your interests and career goals.
                    </p>
                    {/* Dual-line gold rule */}
                    <div className="flex items-center gap-2 pt-2">
                        <div style={{ width: "48px", height: "2px", background: "var(--gold)" }} />
                        <div style={{ width: "8px", height: "8px", background: "var(--gold)", borderRadius: "50%" }} />
                        <div style={{ width: "48px", height: "2px", background: "var(--gold)" }} />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
                    {categories.map((category, index) => (
                        <Card
                            key={index}
                            className="overflow-hidden group cursor-pointer border-0 h-full flex flex-col"
                            style={{
                                background: "#fff",
                                boxShadow: "0 2px 12px rgba(11,32,70,0.07)",
                                transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                borderRadius: "2px",
                            }}
                            onMouseEnter={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(11,32,70,0.14)";
                            }}
                            onMouseLeave={(e) => {
                                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                                (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(11,32,70,0.07)";
                            }}
                        >
                            <div className="relative h-48 w-full overflow-hidden" style={{ background: "#e8eaf0" }}>
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    style={{ objectFit: "cover" }}
                                    className="group-hover:scale-110 transition-transform duration-500"
                                />
                                {/* Gradient overlay */}
                                <div className="absolute inset-0" style={{
                                    background: "linear-gradient(to top, rgba(11,32,70,0.75) 0%, rgba(11,32,70,0.15) 55%, transparent 100%)"
                                }} />
                                {/* Tag pill */}
                                <div className="absolute bottom-3 left-3">
                                    <span style={{
                                        fontFamily: "var(--font-dm-sans), sans-serif",
                                        fontSize: "10px",
                                        fontWeight: 600,
                                        letterSpacing: "0.1em",
                                        textTransform: "uppercase",
                                        color: "#fff",
                                        background: "rgba(200,134,10,0.9)",
                                        padding: "3px 8px",
                                        borderRadius: "1px",
                                        backdropFilter: "blur(4px)"
                                    }}>
                                        {category.tag}
                                    </span>
                                </div>
                                {/* Gold top accent line */}
                                <div className="absolute top-0 left-0 right-0 h-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    style={{ background: "linear-gradient(90deg, var(--gold), var(--gold-light))" }}
                                />
                            </div>
                            <CardContent className="p-5 flex flex-col flex-grow">
                                <h3 style={{
                                    fontFamily: "'Playfair Display', Georgia, serif",
                                    fontSize: "1.05rem",
                                    fontWeight: 600,
                                    color: "#0B2046",
                                    marginBottom: "0.6rem",
                                    lineHeight: 1.3,
                                    transition: "color 0.2s ease",
                                }}
                                    className="group-hover:text-[#C8860A]"
                                >
                                    {category.title}
                                </h3>
                                <p style={{
                                    fontFamily: "var(--font-dm-sans), sans-serif",
                                    fontSize: "0.95rem",
                                    color: "var(--text-muted)",
                                    lineHeight: 1.7,
                                    fontWeight: 300,
                                }}>
                                    {category.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
