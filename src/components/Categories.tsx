import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
        <section className="py-24 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[#0B2046] tracking-tight">
                        Explore Our Categories
                    </h2>
                    <p className="text-lg md:text-xl text-muted-foreground max-w-[800px]">
                        Find Sessions that match your interests and career goals.
                    </p>
                    <div className="h-1.5 w-24 bg-orange-500 rounded-full mt-6" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                    {categories.map((category, index) => (
                        <Card key={index} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-none bg-white h-full flex flex-col cursor-pointer">
                            <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    className="group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                <div className="absolute bottom-4 left-4">
                                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white font-medium shadow-sm">
                                        {category.tag}
                                    </Badge>
                                </div>
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold text-[#0B2046] mb-3 group-hover:text-orange-600 transition-colors line-clamp-2">
                                    {category.title}
                                </h3>
                                <p className="text-sm text-slate-600 leading-relaxed max-w-prose">
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
