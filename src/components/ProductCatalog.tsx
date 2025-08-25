import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

interface CoffeeBean {
  id: string;
  name: string;
  origin: string;
  altitude: string;
  process: string;
  flavorProfile: string[];
  description: string;
  price: {
    kg5: number;
    kg10: number;
    kg25: number;
  };
  image: string;
  category: string;
}

const ProductCatalog = ({ beans = defaultBeans }: { beans?: CoffeeBean[] }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedBean, setSelectedBean] = useState<CoffeeBean | null>(null);

  const categories = [
    "all",
    ...Array.from(new Set(beans.map((bean) => bean.category))),
  ];

  const filteredBeans =
    selectedCategory === "all"
      ? beans
      : beans.filter((bean) => bean.category === selectedCategory);

  return (
    <div className="w-full bg-amber-50 py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">
            Our Products
          </h2>
          <p className="text-amber-700 max-w-2xl mx-auto">
            Discover our carefully selected coffee beans sourced from the finest
            growing regions around the world.
          </p>
        </div>

        {/* <Tabs defaultValue="all" className="mb-8">
          <TabsList className="bg-amber-100 border border-amber-200">
            {categories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                onClick={() => setSelectedCategory(category)}
                className="data-[state=active]:bg-amber-800 data-[state=active]:text-amber-50"
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredBeans.map((bean) => (
            <Card
              key={bean.id}
              className="overflow-hidden border-amber-200 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <img
                  src={bean.image}
                  alt={bean.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl text-amber-900">
                    {bean.name}
                  </CardTitle>
                  <Badge
                    variant="outline"
                    className="bg-amber-100 text-amber-800 border-amber-300"
                  >
                    {bean.origin}
                  </Badge>
                </div>
                {/* <CardDescription className="text-amber-700">
                  {bean.altitude} • {bean.process}
                </CardDescription> */}
              </CardHeader>
              <CardContent>
                {/* <div className="flex flex-wrap gap-2 mb-4">
                  {bean.flavorProfile.map((flavor) => (
                    <Badge
                      key={flavor}
                      variant="secondary"
                      className="bg-amber-50 text-amber-700"
                    >
                      {flavor}
                    </Badge>
                  ))}
                </div> */}
                <p className="text-gray-600 line-clamp-2">{bean.description}</p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-amber-100 pt-4">
                <div className="text-amber-900 font-medium">
                  For Price Contact Us
                </div>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button
                      variant="outline"
                      className="border-amber-800 text-amber-800 hover:bg-amber-800 hover:text-amber-50"
                      onClick={() => setSelectedBean(bean)}
                    >
                     <a href="https://api.whatsapp.com/send/?phone=6281385622350&text&type=phone_number&app_absent=0" >View Details</a>
                    </Button>
                  </DialogTrigger>
                  {/* <DialogContent className="bg-amber-50 border-amber-200 max-w-3xl">
                    {selectedBean && (
                      <>
                        <DialogHeader>
                          <DialogTitle className="text-2xl text-amber-900">
                            {selectedBean.name}
                          </DialogTitle>
                          <DialogDescription className="text-amber-700">
                            Origin: {selectedBean.origin} • Altitude:{" "}
                            {selectedBean.altitude} • Process:{" "}
                            {selectedBean.process}
                          </DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 py-4">
                          <div className="aspect-square overflow-hidden rounded-md">
                            <img
                              src={selectedBean.image}
                              alt={selectedBean.name}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div>
                            <h4 className="font-medium text-amber-900 mb-2">
                              Flavor Profile
                            </h4>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {selectedBean.flavorProfile.map((flavor) => (
                                <Badge
                                  key={flavor}
                                  variant="secondary"
                                  className="bg-amber-100 text-amber-800"
                                >
                                  {flavor}
                                </Badge>
                              ))}
                            </div>
                            <h4 className="font-medium text-amber-900 mb-2">
                              Description
                            </h4>
                            <p className="text-gray-700 mb-6">
                              {selectedBean.description}
                            </p>
                            <h4 className="font-medium text-amber-900 mb-2">
                              Pricing
                            </h4>
                            <div className="space-y-2">
                              <div className="flex justify-between">
                                <span>5kg Package</span>
                                <span className="font-medium">
                                  ${selectedBean.price.kg5}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>10kg Package</span>
                                <span className="font-medium">
                                  ${selectedBean.price.kg10}
                                </span>
                              </div>
                              <div className="flex justify-between">
                                <span>25kg Package</span>
                                <span className="font-medium">
                                  ${selectedBean.price.kg25}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button className="bg-amber-800 hover:bg-amber-900 text-amber-50">
                            Request Quote
                          </Button>
                        </DialogFooter>
                      </>
                    )}
                  </DialogContent> */}
                </Dialog>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

// Default coffee beans data
const defaultBeans: CoffeeBean[] = [
  {
    id: "1",
    name: "Black Pepper",
    origin: "Indonesia",
    altitude: "1,800-2,200m",
    process: "dry",
    flavorProfile: ["Floral", "Citrus", "Bergamot"],
    description:
      "A bold and pungent spice with a sharp aroma, warm heat, and earthy complexity. Grown in the fertile soils of Indonesia, delivering depth and character to global cuisines.",
    price: {
      kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "/black-pepper.png",
    category: "single origin",
  },
  {
    id: "2",
    name: "Long Pepper",
    origin: "Indonesia",
    altitude: "1,400-1,800m",
    process: "dry",
    flavorProfile: ["Chocolate", "Caramel", "Nutty"],
    description:
      "An exotic spice with a sweet, earthy heat and subtle hints of cinnamon and nutmeg. Cultivated in Indonesia’s tropical climate, long pepper offers a distinctive flavor that enriches traditional dishes and modern cuisine alike.",
    price: {
      kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "/long-pepper.png",
    category: "single origin",
  },
  {
    id: "3",
    name: "Cloves",
    origin: "Indonesia",
    altitude: "900-1,500m",
    process: "Wet-hulled",
    flavorProfile: ["Earthy", "Herbal", "Dark Chocolate"],
    description:
      "Sulawesi cloves are renowned for their warm, intense aroma and rich, slightly sweet flavor with a subtle hint of bitterness. Grown in Indonesia’s fertile volcanic soil, these premium cloves embody the essence of the islands, adding depth to cuisines and serving as a treasured ingredient in traditional remedies worldwide.",
    price: {
      kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "/cengkeh-2.png",
    category: "single origin",
  },
  {
    id: "4",
    name: "White Pepper",
    origin: "Java Indonesia",
    altitude: "Various",
    process: "Various",
    flavorProfile: ["Balanced", "Sweet", "Smooth"],
    description:
      "A refined spice with a milder heat and earthy, fermented notes. Harvested in Indonesia, white pepper adds a delicate depth and smooth finish to both traditional and modern cuisine.",
    price: {
      kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "/lada-1.png",
    category: "blend",
  },
  {
    id: "5",
    name: "Cardamom",
    origin: "Sumatera Indonesia",
    altitude: "1,500-1,900m",
    process: "Washed",
    flavorProfile: ["Bright", "Apple", "Honey"],
    description:
      "A fragrant spice with sweet, floral notes and hints of citrus and menthol. Grown in Indonesia’s tropical highlands, cardamom brings a unique depth and freshness to culinary creations and beverages worldwide.",
    price: {
     kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
    category: "single origin",
  },
  {
    id: "6",
    name: "Cinnamon",
    origin: "Indonesia",
    altitude: "Various",
    process: "Various",
    flavorProfile: ["Chocolate", "Caramel", "Rich"],
    description:
      "Cinnamon, grown in the fertile volcanic highlands of Sumatra, offers a sweet and warm aroma with subtle woody notes. Revered for its premium quality and rich essential oils, this spice adds depth and natural sweetness to dishes and beverages worldwide.",
    price: {
     kg5: 9,
      kg10: 15,
      kg25: 25,
    },
    image:
      "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
    category: "blend",
  },
];

export default ProductCatalog;
