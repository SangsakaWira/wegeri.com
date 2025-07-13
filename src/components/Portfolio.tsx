import React, { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, MapPin, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Navbar from "./Navbar";

interface Project {
  id: string;
  title: string;
  client: string;
  location: string;
  year: string;
  category: string;
  description: string;
  image: string;
  results: string[];
  coffeeTypes: string[];
  volume: string;
}

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects: Project[] = [
    {
      id: "1",
      title: "Premium Arabica Supply Chain",
      client: "European Coffee Roasters Alliance",
      location: "Ethiopia & Colombia",
      year: "2023",
      category: "supply-chain",
      description:
        "Established a comprehensive supply chain connecting 15 Ethiopian and Colombian farms with European roasters, ensuring consistent quality and fair trade practices.",
      image:
        "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
      results: [
        "Increased farmer income by 35%",
        "Reduced supply chain costs by 20%",
        "Achieved 99.5% quality consistency",
        "Established long-term partnerships with 15 farms",
      ],
      coffeeTypes: ["Arabica", "Single Origin", "Specialty Grade"],
      volume: "500 tons annually",
    },
    {
      id: "2",
      title: "Sustainable Coffee Initiative",
      client: "Green Bean Coffee Co.",
      location: "Costa Rica & Guatemala",
      year: "2022",
      category: "sustainability",
      description:
        "Implemented sustainable farming practices across 25 coffee farms, focusing on environmental conservation and community development.",
      image:
        "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
      results: [
        "Reduced water usage by 40%",
        "Achieved Rainforest Alliance certification",
        "Improved soil health across 1,200 hectares",
        "Trained 150 farmers in sustainable practices",
      ],
      coffeeTypes: ["Organic", "Fair Trade", "Rainforest Alliance"],
      volume: "300 tons annually",
    },
    {
      id: "3",
      title: "Specialty Coffee Program",
      client: "Tokyo Premium Coffee",
      location: "Jamaica & Hawaii",
      year: "2023",
      category: "specialty",
      description:
        "Curated exclusive specialty coffee program featuring rare varieties from Jamaica Blue Mountain and Hawaiian Kona regions.",
      image:
        "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80",
      results: [
        "Secured exclusive access to premium lots",
        "Achieved 95+ cupping scores consistently",
        "Increased client revenue by 60%",
        "Established direct trade relationships",
      ],
      coffeeTypes: ["Jamaica Blue Mountain", "Hawaiian Kona", "Geisha"],
      volume: "50 tons annually",
    },
    {
      id: "4",
      title: "Direct Trade Partnership",
      client: "Artisan Roasters Network",
      location: "Peru & Bolivia",
      year: "2022",
      category: "partnerships",
      description:
        "Established direct trade partnerships with indigenous farming communities, eliminating intermediaries and ensuring fair compensation.",
      image:
        "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80",
      results: [
        "Increased farmer profits by 50%",
        "Supported 8 indigenous communities",
        "Preserved traditional farming methods",
        "Created 200+ sustainable jobs",
      ],
      coffeeTypes: ["Bourbon", "Typica", "Caturra"],
      volume: "400 tons annually",
    },
    {
      id: "5",
      title: "Quality Assurance Program",
      client: "International Coffee Standards",
      location: "Brazil & Vietnam",
      year: "2021",
      category: "quality",
      description:
        "Implemented comprehensive quality assurance program across multiple origins, establishing new industry standards for consistency.",
      image:
        "https://images.unsplash.com/photo-1565600444102-063f8a7a1e37?w=800&q=80",
      results: [
        "Achieved 99.8% quality consistency",
        "Reduced defect rates by 85%",
        "Established 12 quality control centers",
        "Trained 300+ quality assessors",
      ],
      coffeeTypes: ["Arabica", "Robusta", "Commercial Grade"],
      volume: "2,000 tons annually",
    },
    {
      id: "6",
      title: "Micro-Lot Curation",
      client: "Boutique Coffee Collective",
      location: "Panama & Ecuador",
      year: "2023",
      category: "specialty",
      description:
        "Curated exclusive micro-lots from award-winning farms, focusing on unique processing methods and exceptional flavor profiles.",
      image:
        "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      results: [
        "Secured 15 competition-winning lots",
        "Achieved record auction prices",
        "Established premium brand positioning",
        "Created exclusive supply agreements",
      ],
      coffeeTypes: ["Geisha", "Pacamara", "SL28"],
      volume: "25 tons annually",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "supply-chain", name: "Supply Chain" },
    { id: "sustainability", name: "Sustainability" },
    { id: "specialty", name: "Specialty Coffee" },
    { id: "partnerships", name: "Partnerships" },
    { id: "quality", name: "Quality Assurance" },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const stats = [
    { label: "Projects Completed", value: "150+" },
    { label: "Countries Served", value: "25" },
    { label: "Tons Exported", value: "10,000+" },
    { label: "Farming Partners", value: "500+" },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      {/* Hero Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#3c2f2f] to-[#6f4e37]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Explore our successful projects and partnerships that have
            transformed coffee supply chains worldwide, creating value for
            farmers and roasters alike.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-3xl md:text-4xl font-bold text-[#6f4e37] mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Featured Projects
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-8" />
          </div>

          <Tabs defaultValue="all" className="mb-8">
            <TabsList className="bg-white border border-[#6f4e37]/20 flex-wrap justify-center">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="data-[state=active]:bg-[#6f4e37] data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-lg transition-shadow h-full">
                  <div className="aspect-[16/9] relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#6f4e37] text-white">
                        {project.year}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-xl text-[#3c2f2f] mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {project.client}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {project.location}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent>
                    <p className="text-gray-700 mb-4">{project.description}</p>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#3c2f2f] mb-2">
                        Coffee Types:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.coffeeTypes.map((type) => (
                          <Badge
                            key={type}
                            variant="outline"
                            className="border-[#6f4e37] text-[#6f4e37]"
                          >
                            {type}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-[#3c2f2f] mb-2">
                        Key Results:
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        {project.results.slice(0, 3).map((result, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#6f4e37] mr-2">•</span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                      <div className="text-sm text-gray-600">
                        <strong>Volume:</strong> {project.volume}
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-[#6f4e37] text-[#6f4e37] hover:bg-[#6f4e37] hover:text-white"
                      >
                        View Details
                        <ExternalLink className="h-4 w-4 ml-2" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#3c2f2f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let's discuss how we can help you achieve your coffee sourcing goals
            with our proven expertise and global network.
          </p>
          <Button
            size="lg"
            className="bg-[#6f4e37] hover:bg-[#5a3e2a] text-white"
          >
            Start a Conversation
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
