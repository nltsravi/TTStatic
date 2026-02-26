"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import logoImage from "../../public/tirwin-talent-logo-new.jpg";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
    { title: "About Us", href: "/about-us" },
    { title: "Leadership", href: "/leadership" },
    { title: "Master Classes", href: "/webinar/masterclass" },
    { title: "Tirwin Talks", href: "/webinar/events" },
    { title: "Training", href: "/webinar/training" },
];

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
                        <div className="relative h-10 w-40">
                            <Image
                                src={logoImage}
                                alt="Tirwin Talent Logo"
                                fill
                                style={{ objectFit: "contain" }}
                                priority
                            />
                        </div>
                    </Link>

                    {/* Desktop nav */}
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-1">
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink
                                                className={cn(
                                                    navigationMenuTriggerStyle(),
                                                    "bg-transparent relative font-medium text-[13px] tracking-wide text-[#0B2046] uppercase",
                                                    "after:content-[''] after:absolute after:bottom-1 after:left-3 after:right-3 after:h-[1.5px]",
                                                    "after:bg-[#C8860A] after:scale-x-0 after:origin-left after:transition-transform after:duration-300",
                                                    "hover:after:scale-x-100 hover:bg-transparent hover:text-[#C8860A]"
                                                )}
                                            >
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                {/* Mobile menu */}
                <div className="flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="md:hidden shrink-0 hover:bg-[#C8860A]/10"
                                style={{ color: "#0B2046" }}
                            >
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent
                            side="right"
                            style={{
                                background: "linear-gradient(160deg, #0B2046 0%, #112a5c 100%)",
                                borderLeft: "1px solid rgba(200,134,10,0.2)",
                            }}
                        >
                            <div className="flex flex-col gap-8 pt-10">
                                <Link href="/" className="inline-block mb-2">
                                    <div
                                        className="relative h-10 w-36 rounded p-1"
                                        style={{ background: "rgba(255,255,255,0.1)" }}
                                    >
                                        <Image
                                            src={logoImage}
                                            alt="Tirwin Talent Logo"
                                            fill
                                            style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                                        />
                                    </div>
                                </Link>

                                <div
                                    style={{ height: "1px", background: "rgba(200,134,10,0.3)" }}
                                />

                                <nav className="flex flex-col gap-1">
                                    {navItems.map((item) => (
                                        <Link
                                            key={item.title}
                                            href={item.href}
                                            className="px-2 py-3 text-base font-medium text-white/80 hover:text-white uppercase tracking-wider text-[13px] transition-colors border-b border-white/5"
                                            style={{ fontFamily: "var(--font-dm-sans), sans-serif" }}
                                        >
                                            {item.title}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
