import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Coffee, Globe, Leaf, MessageSquare } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Navbar from "./Navbar";
import ProductCatalog from "./ProductCatalog";
import TestimonialCarousel from "./TestimonialCarousel";
import ContactForm from "./ContactForm";

const Home = () => {
  return (
    <div className="min-h-screen bg-[#f8f5f2]">
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(./briket.jpg)",
            filter: "brightness(0.7)",
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 md:px-8 lg:px-16">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Professional Indonesian Exporter for Global Needs
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-2xl mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            We provide high-quality Indonesian commodities, sourced responsibly from local producers, and distributed worldwide with consistency and care.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="https://api.whatsapp.com/send/?phone=6281385622350&text&type=phone_number&app_absent=0">
              <Button
                size="lg"
                className="bg-[#6f4e37] hover:bg-[#5a3e2a] text-white"
              >
                Explore Our Products <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Our Story
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              From humble beginnings to global reach, we are committed to connecting Indonesia’s finest natural resources with the world. Built on trust, sustainability, and strong partnerships, we strive to deliver premium quality products that represent the richness of Indonesia to global markets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-[#f8f5f2] border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#6f4e37]/10 p-4 rounded-full mb-4">
                    <Coffee className="h-8 w-8 text-[#6f4e37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3c2f2f] mb-3">
                    Quality First
                  </h3>
                  <p className="text-gray-700">
                    We meticulously select only the finest products,
                    ensuring exceptional quality in every batch we export.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f8f5f2] border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#6f4e37]/10 p-4 rounded-full mb-4">
                    <Leaf className="h-8 w-8 text-[#6f4e37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3c2f2f] mb-3">
                    Sustainable Practices
                  </h3>
                  <p className="text-gray-700">
                    Our commitment to environmental stewardship ensures that our
                    products are not only delicious but responsibly sourced.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-[#f8f5f2] border-none shadow-md">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-[#6f4e37]/10 p-4 rounded-full mb-4">
                    <Globe className="h-8 w-8 text-[#6f4e37]" />
                  </div>
                  <h3 className="text-xl font-semibold text-[#3c2f2f] mb-3">
                    Direct Trade
                  </h3>
                  <p className="text-gray-700">
                    We build lasting relationships with farmers, ensuring fair
                    compensation and supporting local farmers.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Button
              variant="outline"
              className="border-[#6f4e37] text-[#6f4e37] hover:bg-[#6f4e37] hover:text-white"
            >
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>

      {/* Product Catalog Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#f8f5f2]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Our Mission
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We exist to bridge the gap between Indonesian producers and international buyers by ensuring that every product we deliver reflects quality, sustainability, and fair trade. Through direct collaboration with local farmers and communities, we are not just trading commodities we are creating opportunities, empowering producers, and building a sustainable future for global trade.
            </p>
          </div>

          <ProductCatalog />
        </div>
      </section>

      {/* Testimonials Section */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#3c2f2f] text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our Clients Say
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-6" />
            <p className="text-lg text-white/80 max-w-3xl mx-auto">
              Trusted by coffee roasters and specialty shops around the world.
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
                Get In Touch
              </h2>
              <Separator className="w-24 h-1 bg-[#6f4e37] mb-6" />
              <p className="text-lg text-gray-700 mb-8">
                Interested in our products? Fill out the form and our team
                will get back to you with pricing and availability information.
              </p>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-[#6f4e37]/10 p-3 rounded-full mr-4">
                    <MessageSquare className="h-6 w-6 text-[#6f4e37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3c2f2f]">
                      Email Us
                    </h3>
                    <p className="text-gray-700">business@wigeri.com</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-[#6f4e37]/10 p-3 rounded-full mr-4">
                    <Globe className="h-6 w-6 text-[#6f4e37]" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-[#3c2f2f]">
                      Visit Us
                    </h3>
                    <p className="text-gray-700">
                      Griya Sukadalem Indah Blok A2 no 1, Sukadalem, Kabupaten Serang, Banten
                      <br />
                      Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#f8f5f2] p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-[#3c2f2f] mb-6">
                Wholesale Inquiry
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3c2f2f] text-white/80 py-12 px-4 md:px-8 lg:px-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">
                Premium Products
              </h3>
              <p className="mb-4">
                Premium products sourced directly from farmers around the
                world.
              </p>
              <p>
                &copy; {new Date().getFullYear()} Premium Indonesia's Commodities. All
                rights reserved.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Products
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sustainability
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Products
              </h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Pepper
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Coffee Beans
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cloves
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Organic Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Sample Packs
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Connect With Us
              </h4>
              <div className="flex space-x-4 mb-4">
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="https://api.whatsapp.com/send/?phone=6281385622350&text&type=phone_number&app_absent=0" className="hover:text-white transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="hover:text-white transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
              <p>
                Subscribe to our newsletter for updates on new harvests and
                special offers.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
