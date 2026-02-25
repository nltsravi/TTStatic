import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin } from "lucide-react";

const trainers = [
    {
        name: "Venkatesh Kuppuswamy (Venkat)",
        role: "Director & Chief Operations Officer",
        image: "https://www.tirwintalent.com/assets/images/instructor-section.jpg", // Using extracted background as placeholder if actual avatar unavailable
        initials: "VK",
    },
];

export function Trainers() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Decorative gradient background */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />

            <div className="container relative mx-auto px-4 md:px-6 z-10">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] tracking-tight">
                        Our Expert Trainers
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-[800px]">
                        Meet our verified trainers who are leaders in their fields.
                    </p>
                    <div className="h-1.5 w-24 bg-orange-500 rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {trainers.map((trainer, index) => (
                        <Card key={index} className="overflow-hidden border-slate-200 hover:border-orange-200 hover:shadow-lg transition-all text-center group">
                            <CardHeader className="pt-8 pb-4 relative">
                                {/* Background Banner within Card */}
                                <div className="absolute top-0 left-0 right-0 h-24 bg-[#0B2046]/5 group-hover:bg-[#0B2046]/10 transition-colors" />
                                <div className="relative mx-auto w-24 h-24 mb-2">
                                    <Avatar className="w-24 h-24 border-4 border-white shadow-sm">
                                        <AvatarImage src={trainer.image} alt={trainer.name} style={{ objectFit: 'cover' }} />
                                        <AvatarFallback className="bg-orange-100 text-orange-700 text-xl font-bold">{trainer.initials}</AvatarFallback>
                                    </Avatar>
                                </div>
                            </CardHeader>
                            <CardContent className="px-6 pb-8 space-y-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#0B2046]">{trainer.name}</h3>
                                    <p className="text-sm text-orange-600 font-medium mt-1">{trainer.role}</p>
                                </div>
                                <Button variant="outline" size="sm" className="w-full text-slate-600 hover:text-[#0B2046] hover:bg-slate-50 border-slate-200" asChild>
                                    <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                                        <Linkedin className="h-4 w-4" />
                                        <span>View Profile</span>
                                    </a>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
