import { Mail, Phone, MapPin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ContactUs() {
    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2046]">Contact Us</h1>
                    <p className="text-blue-600 font-semibold tracking-wider uppercase">
                        Get in Touch with TIRWIN
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-4">Get in Touch</h2>
                        <p className="text-slate-600">
                            We'd love to hear from you. Reach out to us for any inquiries, partnerships, or support.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Address */}
                        <Card className="border-none shadow-sm bg-slate-50 hover:bg-slate-100 transition-colors">
                            <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                                <div className="h-14 w-14 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-2">
                                    <MapPin className="h-7 w-7" />
                                </div>
                                <h3 className="text-xl font-bold text-[#0B2046]">Our Address</h3>
                                <div className="text-slate-600 leading-relaxed text-sm">
                                    <p className="font-semibold text-slate-800">TIRWIN MANAGEMENT SERVICES PRIVATE LIMITED</p>
                                    <p>PNO89, DO 12, THIRUPPANAR STREET</p>
                                    <p>SUNDARAM COLONY, VIJAYARAGHAVAN BASHYAM</p>
                                    <p>TAMBARAM</p>
                                    <p>TAMILNADU, INDIA 600059</p>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Contact Details */}
                        <div className="space-y-6">
                            <Card className="border-none shadow-sm bg-slate-50 hover:bg-slate-100 transition-colors h-[calc(50%-12px)]">
                                <CardContent className="p-6 flex items-center gap-6 h-full">
                                    <div className="h-12 w-12 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                        <Phone className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-slate-500 font-medium mb-1">Phone</p>
                                        <p className="text-lg font-semibold text-[#0B2046]">+91 9841970466</p>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="border-none shadow-sm bg-slate-50 hover:bg-slate-100 transition-colors h-[calc(50%-12px)]">
                                <CardContent className="p-6 flex items-center gap-6 h-full">
                                    <div className="h-12 w-12 flex-shrink-0 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center">
                                        <Mail className="h-6 w-6" />
                                    </div>
                                    <div className="break-all">
                                        <p className="text-sm text-slate-500 font-medium mb-1">Email</p>
                                        <p className="text-base font-semibold text-[#0B2046]">tirwin.communications@tirwin.in</p>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
