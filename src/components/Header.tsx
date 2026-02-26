"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import logoImage from "../../public/tirwin-talent-logo-new.jpg";

export function Header() {
    return (
        <header
            className="sticky top-0 z-50 w-full backdrop-blur-md"
            style={{
                background: "rgba(255,255,255,0.92)",
                borderBottom: "1px solid rgba(200, 134, 10, 0.18)",
                boxShadow: "0 1px 16px rgba(11,32,70,0.06)",
            }}
        >
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-8">
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="relative h-14 w-56 md:h-16 md:w-64">
                            <Image
                                src={logoImage}
                                alt="Tirwin Talent Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    );
}
