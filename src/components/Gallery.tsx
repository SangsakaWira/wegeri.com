import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Separator } from "./ui/separator";
import Navbar from "./Navbar";

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images: GalleryImage[] = [
    {
      id: "1",
      src: "https://images.unsplash.com/photo-1511537190424-bbbab87ac5eb?w=800&q=80",
      alt: "Coffee plantation in mountains",
      category: "farms",
      title: "Mountain Coffee Plantation",
      description: "High-altitude coffee farms in the Colombian Andes",
    },
    {
      id: "2",
      src: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=800&q=80",
      alt: "Coffee farmer picking beans",
      category: "farms",
      title: "Hand-Picked Excellence",
      description: "Skilled farmers carefully selecting ripe coffee cherries",
    },
    {
      id: "3",
      src: "https://images.unsplash.com/photo-1559525839-b184a4d698c7?w=800&q=80",
      alt: "Coffee beans drying process",
      category: "processing",
      title: "Natural Drying Process",
      description: "Sun-drying coffee beans to achieve optimal flavor profiles",
    },
    {
      id: "4",
      src: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=800&q=80",
      alt: "Roasted coffee beans",
      category: "beans",
      title: "Premium Roasted Beans",
      description:
        "Perfectly roasted beans showcasing their rich color and oils",
    },
    {
      id: "5",
      src: "https://images.unsplash.com/photo-1565600444102-063f8a7a1e37?w=800&q=80",
      alt: "Coffee cupping session",
      category: "quality",
      title: "Quality Testing",
      description:
        "Professional cupping sessions to ensure exceptional quality",
    },
    {
      id: "6",
      src: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?w=800&q=80",
      alt: "Coffee packaging facility",
      category: "processing",
      title: "Modern Packaging",
      description: "State-of-the-art packaging facility ensuring freshness",
    },
    {
      id: "7",
      src: "https://images.unsplash.com/photo-1497636577773-f1231844b336?w=800&q=80",
      alt: "Coffee farm landscape",
      category: "farms",
      title: "Sustainable Farming",
      description:
        "Eco-friendly coffee farms practicing sustainable agriculture",
    },
    {
      id: "8",
      src: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80",
      alt: "Green coffee beans",
      category: "beans",
      title: "Green Coffee Beans",
      description: "Fresh green coffee beans ready for export",
    },
    {
      id: "9",
      src: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80",
      alt: "Coffee quality control",
      category: "quality",
      title: "Quality Assurance",
      description: "Rigorous quality control processes at every stage",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "farms", name: "Farms" },
    { id: "processing", name: "Processing" },
    { id: "beans", name: "Beans" },
    { id: "quality", name: "Quality" },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    setCurrentIndex(filteredImages.findIndex((img) => img.id === image.id));
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "prev"
        ? currentIndex > 0
          ? currentIndex - 1
          : filteredImages.length - 1
        : currentIndex < filteredImages.length - 1
          ? currentIndex + 1
          : 0;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredImages[newIndex]);
  };

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
            Our Gallery
          </motion.h1>
          <motion.p
            className="text-xl text-white/90 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Take a visual journey through our coffee sourcing process, from farm
            to cup. Discover the beauty and craftsmanship behind every bean we
            export.
          </motion.p>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 px-4 md:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#3c2f2f] mb-4">
              Visual Stories
            </h2>
            <Separator className="w-24 h-1 bg-[#6f4e37] mx-auto mb-8" />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={`${
                  selectedCategory === category.id
                    ? "bg-[#6f4e37] hover:bg-[#5a3e2a] text-white"
                    : "border-[#6f4e37] text-[#6f4e37] hover:bg-[#6f4e37] hover:text-white"
                }`}
              >
                {category.name}
              </Button>
            ))}
          </div>

          {/* Image Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            layout
          >
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card
                    className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group"
                    onClick={() => openLightbox(image)}
                  >
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-[#3c2f2f] mb-2">
                        {image.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {image.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <motion.div
              className="relative max-w-4xl max-h-full"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />

              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image Info */}
              <div className="absolute bottom-4 left-4 right-4 bg-black/70 text-white p-4 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">
                  {selectedImage.title}
                </h3>
                <p className="text-sm text-white/80">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
