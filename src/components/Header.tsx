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
    { title: "Home", href: "/home" },
    { title: "Master Classes", href: "/webinar/masterclass" },
    { title: "Tirwin Talks", href: "/webinar/events" },
    { title: "Training", href: "/webinar/training" },
];

export function Header() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
                <div className="flex items-center gap-6">
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
                    <div className="hidden md:flex">
                        <NavigationMenu>
                            <NavigationMenuList className="gap-2">
                                {navItems.map((item) => (
                                    <NavigationMenuItem key={item.title}>
                                        <Link href={item.href} legacyBehavior passHref>
                                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium")}>
                                                {item.title}
                                            </NavigationMenuLink>
                                        </Link>
                                    </NavigationMenuItem>
                                ))}
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon" className="md:hidden shrink-0">
                                <Menu className="h-6 w-6" />
                                <span className="sr-only">Toggle menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <div className="flex flex-col gap-6 pt-10">
                                <Link href="/" className="flex items-center space-x-2 mb-4">
                                    <div className="relative h-10 w-32">
                                        <Image
                                            src={logoImage}
                                            alt="Tirwin Talent Logo"
                                            fill
                                            style={{ objectFit: "contain" }}
                                        />
                                    </div>
                                </Link>
                                {navItems.map((item) => (
                                    <Link
                                        key={item.title}
                                        href={item.href}
                                        className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}
