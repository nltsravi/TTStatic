import { Card, CardContent } from "@/components/ui/card";
import { User, Lightbulb, Users, LineChart, GraduationCap } from "lucide-react";

const executives = [
    {
        name: "Venkatesh Kuppuswamy (Venkat)",
        role: "Director & Chief Operations Officer",
        company: "TIRWIN Management Services",
        paragraphs: [
            "As the Director and Chief Operations Officer at TIRWIN Management Services, Venkatesh Kuppuswamy (Venkat) is at the helm of driving growth and strategic initiatives. Venkat leverages his extensive operational expertise to propel TIRWIN towards technology-led growth, establish strategic partnerships, and foster employee development, all while maintaining a strong focus on customer engagement and delivering significant business outcomes.",
            "With over three decades of professional experience in consulting, business transformation, and digital innovation, Venkat brings a wealth of knowledge to TIRWIN. His background includes leveraging AI, process automation, and analytics solutions to revolutionize business operations. Prior to joining TIRWIN, Venkat served as the Global Head of Digital Transformation for HR services at Tata Consultancy Services.",
            "At the intersection of logistics and technology, Venkat's role is pivotal in delivering transformative results for customers through cutting-edge technology and talent transformation."
        ],
        education: [
            "Engineering from BITS, Pilani",
            "MBA from Pondicherry University"
        ]
    },
    {
        name: "Rajesh Vijayaraghavan",
        role: "Head Technology",
        company: "TIRWIN Management Services",
        paragraphs: [
            "As Head of Technologies at TIRWIN Management services, Rajesh Vijayaraghavan (Rajesh) delivering technology-enabled solutions that streamline operations, reduce waste and enhance productivity for the Clients.",
            "With over two decades of professional experience in Consulting, Business process Transformation and seasoned Enterprise Solution Architect, Rajesh brings in innovative technology solutions accompanied by Industry best practices to create efficient, scalable, and sustainable processes that deliver tangible business value. Rajesh expertise lies in understanding intricate processes and identifying key areas for improvement, driving operational excellence across various industry sectors.",
            "Prior joining TIRWIN, Rajesh's served as Senior Manager at Hexaware Technologies and his career spans multiple industries, including Automobile, Semiconductor, Electronic Components, Distilleries & Beverages, and Logistics & Warehousing. With the diverse experience, Rajesh equipped me with a comprehensive understanding of industry-specific challenges and best practices."
        ],
        education: [
            "Engineering from Annamalai University",
            "MBA from ICFAI",
            "PCP Data Science from IIMK"
        ]
    }
];

const advisors = [
    {
        name: "Mr. J. Krishnan",
        role: "Logistics Industry Expert",
        paragraphs: [
            "Mr. J. Krishnan is a prominent figure in the logistics industry, associated with S Natesa Iyer Logistics LLP. He actively participates in discussions on emerging trends and challenges in logistics, sharing his insights with industry bodies like the Madras Chamber of Commerce and EXIM India.",
            "His views on the impact of geopolitical events on global trade, especially maritime sector challenges, are shared with the media, and he regularly advises government bodies on air cargo logistics, advocating for operational efficiency through talent and technology."
        ]
    },
    {
        name: "G. Raghu Shankar",
        role: "Former Executive Director",
        paragraphs: [
            "Mr. G. Raghu Shankar was the Executive Director at International Clearing & Shipping Agency (India) Pvt Ltd. He was involved in various strategic initiatives, particularly in the logistics and shipping industry.",
            "His role included overseeing operations, client acquisition, and the development of digital value propositions."
        ]
    }
];

const philosophy = [
    {
        title: "Innovation",
        description: "Continuously exploring new technologies and methodologies to transform business operations.",
        icon: Lightbulb
    },
    {
        title: "Collaboration",
        description: "Building strong partnerships and fostering teamwork to achieve exceptional results.",
        icon: Users
    },
    {
        title: "Excellence",
        description: "Maintaining the highest standards of quality and performance in everything we do.",
        icon: LineChart
    },
    {
        title: "Growth",
        description: "Investing in talent development and continuous learning to drive sustainable success.",
        icon: GraduationCap
    }
];

export default function Leadership() {
    return (
        <main className="min-h-screen bg-slate-50 py-16">
            <div className="container mx-auto px-4 md:px-6 max-w-5xl">

                {/* Hero Section */}
                <div className="text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#0B2046]">Our Leadership Team</h1>
                    <p className="text-blue-600 font-semibold tracking-wider uppercase">
                        TRAINING - INNOVATION - RESOURCING
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-sm p-8 md:p-12 mb-16">
                    {/* Executive Team */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-8 border-b pb-4">Executive Team</h2>
                        <div className="space-y-8">
                            {executives.map((exec, idx) => (
                                <Card key={idx} className="border-none shadow-sm bg-slate-50 relative overflow-hidden">
                                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-600"></div>
                                    <CardContent className="p-8">
                                        <div className="flex flex-col md:flex-row gap-6 md:gap-8">
                                            {/* Avatar Column */}
                                            <div className="flex-shrink-0">
                                                <div className="h-20 w-20 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-md">
                                                    <User className="h-10 w-10" />
                                                </div>
                                            </div>

                                            {/* Details Column */}
                                            <div className="flex-1 space-y-6">
                                                <div>
                                                    <h3 className="text-2xl font-bold text-[#0B2046]">{exec.name}</h3>
                                                    <p className="text-blue-600 font-semibold">{exec.role}</p>
                                                    <p className="text-slate-500 text-sm">{exec.company}</p>
                                                </div>

                                                <div className="space-y-4 text-slate-600 text-sm md:text-base leading-relaxed">
                                                    {exec.paragraphs.map((p, pIdx) => (
                                                        <p key={pIdx}>{p}</p>
                                                    ))}
                                                </div>

                                                <div>
                                                    <h4 className="font-semibold text-[#0B2046] mb-2">Education</h4>
                                                    <ul className="list-disc list-inside text-slate-600 text-sm md:text-base space-y-1">
                                                        {exec.education.map((edu, eIdx) => (
                                                            <li key={eIdx}>{edu}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Our Advisors */}
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-8 border-b pb-4">Our Advisors</h2>
                        <div className="grid md:grid-cols-2 gap-8">
                            {advisors.map((advisor, idx) => (
                                <Card key={idx} className="border border-slate-100 shadow-sm bg-white hover:shadow-md transition-shadow">
                                    <CardContent className="p-8">
                                        <div className="flex flex-col space-y-6">
                                            {/* Avatar & Title */}
                                            <div className="flex items-center gap-4">
                                                <div className="h-16 w-16 rounded-full bg-emerald-600 flex flex-shrink-0 items-center justify-center text-white shadow-md">
                                                    <User className="h-8 w-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-[#0B2046]">{advisor.name}</h3>
                                                    <p className="text-emerald-600 text-sm font-semibold">{advisor.role}</p>
                                                </div>
                                            </div>

                                            {/* Details */}
                                            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                                                {advisor.paragraphs.map((p, pIdx) => (
                                                    <p key={pIdx}>{p}</p>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Leadership Philosophy */}
                    <div>
                        <h2 className="text-3xl font-bold text-[#0B2046] mb-6 border-b pb-4">Our Leadership Philosophy</h2>
                        <p className="text-slate-600 mb-8 text-center max-w-2xl mx-auto">
                            At TIRWIN, our leadership team embodies the core values that drive our success in the logistics and cargo industry. We believe in:
                        </p>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {philosophy.map((item, idx) => (
                                <Card key={idx} className="border-none shadow-sm bg-slate-50 text-center hover:bg-slate-100 transition-colors">
                                    <CardContent className="p-8 px-6 flex flex-col items-center">
                                        <div className="h-16 w-16 rounded-full bg-blue-600 flex items-center justify-center text-white mb-6 shadow-md">
                                            <item.icon className="h-8 w-8" />
                                        </div>
                                        <h3 className="text-lg font-bold text-[#0B2046] mb-3">{item.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </main>
    );
}
