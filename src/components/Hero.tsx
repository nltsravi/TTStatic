import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Hero() {
    return (
        <div className="relative min-h-[600px] w-full flex items-center justify-center overflow-hidden">
            {/* Background Image Layer */}
            <div className="absolute inset-0 z-0 bg-[#0B2046]">
                <Image
                    src="https://tirwin-media-storage.s3.us-east-1.amazonaws.com/static-images/banner-image-slider.png"
                    alt="Logistics background"
                    fill
                    priority
                    style={{ objectFit: 'cover', objectPosition: 'center', opacity: 0.5 }}
                />
                {/* Decorative gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#0B2046]/90 via-[#0B2046]/70 to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 py-20 md:py-32 flex flex-col items-start text-white">
                <div className="max-w-3xl space-y-6">
                    <div className="inline-block rounded-lg bg-orange-500/20 px-3 py-1 text-sm text-orange-400 font-semibold backdrop-blur-sm mb-4">
                        Tirwin Talent Platform
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
                        Empowering Growth Through <span className="text-orange-500">Skill-Based</span> Talent Strategies.
                    </h1>
                    <p className="max-w-[700px] text-lg sm:text-xl md:text-2xl text-slate-300 font-light leading-relaxed">
                        A transformative approach to talent management for the Supply Chain, Logistics, and Cargo industries.
                    </p>
                    <div className="pt-6 flex flex-col sm:flex-row gap-4">
                        <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-14 px-8 text-lg">
                            START YOUR JOURNEY WITH US
                        </Button>
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg border-white text-white hover:bg-white/10 bg-transparent">
                            Explore Master Classes
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
