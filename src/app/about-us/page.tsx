import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, GraduationCap, Settings, Rocket, BookOpen, Heart } from "lucide-react";
import logoImage from "../../../public/tirwin-talent-logo-new.jpg";

const whyChooseFeatures = [
    {
        title: "Expertise",
        description: "We have seasoned consultants and industry advisors who can bring in unparalleled knowledge and insights to help you achieve your business goals.",
        icon: Users,
    },
    {
        title: "Comprehensive Training",
        description: "We offer a wide range of training programs tailored to your needs through 'TIRWIN Talent'.",
        icon: GraduationCap,
    },
    {
        title: "Skill Transformation",
        description: "Through 'TIRWIN Talent' Our staffing services not only addresses right fitment of resources in shortest possible time, but it is also complemented through suitable career advisory to make talent future ready.",
        icon: Settings,
    },
    {
        title: "Trailblazing Technology",
        description: "Through 'TIRWIN Tech': Be it platform related to the business, new age solutions leveraging Gen AI, IoT, advanced analytics, process automation for operational efficiency or insightful dashboards, we've got you covered through our partnerships and solution library.",
        icon: Rocket,
    },
    {
        title: "IATA Publications",
        description: "As a regional distributor, we provide access to essential IATA publications, keeping you informed and compliant.",
        icon: BookOpen,
    },
    {
        title: "Corporate Social Responsibility",
        description: "TIRWIN is not only committed to excellence, but also dedicated to community. We strive to make a positive impact on the community we serve through sustainable practices, ethical business operations and meaningful community engagement. TIRWIN has been actively contributing to education and health sector over last decade.",
        icon: Heart,
    },
];

const ventures = [
    { title: "TIRWIN Tech", description: "Technology solutions and innovation platform" },
    { title: "TIRWIN Talent", description: "Comprehensive training and staffing solutions" },
    { title: "TIRWIN Touch", description: "Community engagement and social responsibility" },
];

export default function AboutUs() {
    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 md:px-6">

                {/* Hero Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2046]">About TIRWIN</h1>
                    <p className="text-blue-600 font-semibold tracking-wider uppercase">
                        TRAINING - INNOVATION - RESOURCING
                    </p>
                </div>

                {/* Our Story */}
                <Card className="mb-20 overflow-hidden shadow-lg border-none bg-white">
                    <div className="grid md:grid-cols-2 gap-8 p-8 md:p-12 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl font-bold text-[#0B2046]">Our Story</h2>
                            <div className="space-y-4 text-slate-600 leading-relaxed">
                                <p>
                                    TIRWIN Management Services Private Limited is a management consulting firm based in Chennai, Tamil Nadu. The company which got established in 2008 was built on the foundations of serving the Logistics & Cargo industry. TIRWIN Management Services has a rich history that spans ~15 years. Our legacy has been shaped by the dedication, perseverance, and passion of (late) Mr. B. Govindarajan.
                                </p>
                                <p>
                                    At TIRWIN Management Services, we specialize in transforming your Logistics & Cargo business through expert consulting, technology innovation, comprehensive training and staffing solutions.
                                </p>
                                <div>
                                    <p className="mb-2">The name TIRWIN has been coined to rightly reflect our core business activities:</p>
                                    <ul className="list-disc list-inside ml-4 font-medium text-slate-700">
                                        <li>TRAINING</li>
                                        <li>INNOVATION</li>
                                        <li>RESOURCING</li>
                                    </ul>
                                </div>
                                <p className="font-medium text-[#0B2046] mt-4">
                                    And work towards guaranteeing a WIN/WIN outcome to all stakeholders. The objective is to make TIRWIN as a Leader in enabling and complementing growth of Logistics & Cargo industry.
                                </p>
                            </div>
                        </div>
                        <div className="relative h-full min-h-[400px] rounded-xl overflow-hidden bg-slate-100 flex items-center justify-center p-8">
                            <Image
                                src={logoImage}
                                alt="Tirwin Logo"
                                width={400}
                                height={200}
                                style={{ objectFit: 'contain' }}
                            />
                        </div>
                    </div>
                </Card>

                {/* Why Choose TIRWIN */}
                <div className="mb-20">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#0B2046] mb-4">Why Choose TIRWIN as your partner?</h2>
                        <p className="text-slate-600">
                            Choose TIRWIN for our expertise, innovation, and commitment to delivering tailored solutions that drive your success. We partner with you to meet your unique needs and ensure scalable, efficient outcomes.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {whyChooseFeatures.map((feature, idx) => (
                            <Card key={idx} className="border border-slate-200 hover:border-orange-500 transition-colors hover:shadow-md group">
                                <CardHeader>
                                    <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-4 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                                        <feature.icon className="h-6 w-6" />
                                    </div>
                                    <CardTitle className="text-xl text-[#0B2046]">{feature.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* Our Ventures & Publications Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {/* Ventures */}
                    <div className="md:col-span-2 space-y-6">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-8">Our Ventures</h2>
                        <div className="grid sm:grid-cols-3 gap-4">
                            {ventures.map((venture, idx) => (
                                <Card key={idx} className="bg-gradient-to-br from-indigo-50 to-purple-50 border-purple-100">
                                    <CardHeader>
                                        <CardTitle className="text-lg text-purple-900">{venture.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-purple-700/80 text-sm">{venture.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Publication */}
                    <div className="space-y-6">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-8">Our Publication</h2>
                        <Card className="bg-blue-50 border-blue-200 h-full">
                            <CardContent className="p-8 flex flex-col justify-center h-full space-y-4">
                                <BookOpen className="h-10 w-10 text-blue-600" />
                                <p className="text-blue-900 font-medium leading-relaxed">
                                    TIRWIN is IATA's Channel partner to distribute IATA Publication's in India. For more details or enquiries, contact us.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>

            </div>
        </main>
    );
}
