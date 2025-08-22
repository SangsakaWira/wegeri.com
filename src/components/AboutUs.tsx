import React from "react";
import { motion } from "framer-motion";
import { Coffee, Globe, Leaf, Users, Award, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const AboutUs = () => {
  const values = [
    {
      icon: Coffee,
      title: "Quality Excellence",
      description:
        "We source only the finest coffee beans, ensuring exceptional quality through rigorous selection and testing processes.",
    },
    {
      icon: Leaf,
      title: "Sustainability",
      description:
        "Our commitment to environmental stewardship drives every decision, from farming practices to packaging solutions.",
    },
    {
      icon: Globe,
      title: "Global Reach",
      description:
        "With partners across six continents, we connect exceptional coffee growers with discerning roasters worldwide.",
    },
    {
      icon: Users,
      title: "Fair Trade",
      description:
        "We believe in building lasting relationships with farmers, ensuring fair compensation and supporting local communities.",
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description:
        "Our dedication to excellence has earned us numerous awards and certifications from international coffee organizations.",
    },
    {
      icon: Heart,
      title: "Passion Driven",
      description:
        "Coffee is more than our business—it's our passion. We're dedicated to sharing the world's finest beans with coffee lovers everywhere.",
    },
  ];

  const milestones = [
    {
      year: "2005",
      event: "Company founded with a vision to connect farmers and roasters",
    },
    {
      year: "2008",
      event: "Established partnerships with farms in Ethiopia and Colombia",
    },
    {
      year: "2012",
      event:
        "Expanded to Asian markets, adding Indonesian and Vietnamese origins",
    },
    { year: "2016", event: "Achieved Fair Trade and Organic certifications" },
    {
      year: "2019",
      event: "Launched direct trade program with 50+ farming communities",
    },
    {
      year: "2023",
      event: "Reached milestone of 1000+ satisfied customers worldwide",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#3c2f2f] to-[#6f4e37]">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Story
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From humble beginnings to global impact, we've been dedicated to
            connecting exceptional coffee growers with passionate roasters for
            nearly two decades.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-6">
                Our Mission
              </h2>
              <Separator className="w-24 h-1 bg-[#6f4e37] mb-6" />
              <p className="text-lg text-gray-700 mb-6">
              We exist to bridge the gap between Indonesian producers and international buyers by ensuring that every product we deliver reflects quality, sustainability, and fair trade. Through direct collaboration with local farmers and communities, we are not just trading commodities we are creating opportunities, empowering producers, and building a sustainable future for global trade.
              </p>
            
              <Button className="bg-[#6f4e37] hover:bg-[#5a3e2a] text-white">
                Learn About Our Process
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80"
                alt="Coffee farmers working"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f8f5f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Our Values
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              These core principles guide everything we do, from sourcing to
              delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="bg-white border-none shadow-md h-full">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center">
                        <div className="bg-[#6f4e37]/10 p-4 rounded-full mb-4">
                          <IconComponent className="h-8 w-8 text-[#6f4e37]" />
                        </div>
                        <h3 className="text-xl font-semibold text-[#3c2f2f] mb-3">
                          {value.title}
                        </h3>
                        <p className="text-gray-700">{value.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Our Journey
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
            <p className="text-lg text-gray-700">
              Key milestones in our journey to becoming a trusted global coffee
              exporter.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-[#6f4e37]/20"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                className={`flex items-center mb-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div
                  className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                >
                  <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#6f4e37]">
                    <div className="text-2xl font-bold text-[#6f4e37] mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="w-4 h-4 bg-[#6f4e37] rounded-full border-4 border-white shadow-lg"></div>
                </div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#3c2f2f] text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
          <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
          <p className="text-lg text-white/80 max-w-3xl mx-auto mb-12">
            Our passionate team of commodities experts, sourcing specialists, and
            logistics professionals work tirelessly to bring you the world's
            finest beans.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Kokoh Satria",
                role: "Founder",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
              },
              {
                name: "Jonathan Gabriel",
                role: "Co-Founder",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=James",
              },
              {
                name: "Reza Kurnia",
                role: "Advisor",
                image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
              },
            ].map((member) => (
              <div key={member.name} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#6f4e37]"
                />
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-white/80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
