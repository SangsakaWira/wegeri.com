import React, { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { QuoteIcon } from "lucide-react";

interface Testimonial {
  id: string;
  quote: string;
  name: string;
  company: string;
  location: string;
  image?: string;
  logo?: string;
}

interface TestimonialCarouselProps {
  testimonials?: Testimonial[];
}

const TestimonialCarousel = ({
  testimonials = defaultTestimonials,
}: TestimonialCarouselProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full max-w-5xl mx-auto py-12 px-4 bg-amber-50">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-amber-900 mb-2">
          What Our Clients Say
        </h2>
        <p className="text-amber-700">
          Trusted by coffee roasters and distributors worldwide
        </p>
      </div>

      <Carousel
        className="w-full"
        setApi={(api) => {
          api?.on("select", () => {
            setActiveIndex(api.selectedScrollSnap());
          });
        }}
      >
        <CarouselContent>
          {testimonials.map((testimonial, index) => (
            <CarouselItem
              key={testimonial.id}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="border-amber-200 bg-white h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-4 text-amber-500">
                    <QuoteIcon size={24} />
                  </div>
                  <p className="text-gray-700 mb-6 flex-grow italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center">
                    <Avatar className="h-12 w-12 border-2 border-amber-200">
                      {testimonial.image ? (
                        <AvatarImage
                          src={testimonial.image}
                          alt={testimonial.name}
                        />
                      ) : (
                        <AvatarFallback className="bg-amber-100 text-amber-800">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      )}
                    </Avatar>
                    <div className="ml-4">
                      <p className="font-medium text-amber-900">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-amber-700">
                        {testimonial.company}, {testimonial.location}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-center gap-2 mt-6">
          <CarouselPrevious className="relative static transform-none mx-2 bg-amber-100 hover:bg-amber-200 text-amber-800" />
          <CarouselNext className="relative static transform-none mx-2 bg-amber-100 hover:bg-amber-200 text-amber-800" />
        </div>
        <div className="flex justify-center gap-2 mt-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full ${index === activeIndex ? "bg-amber-600" : "bg-amber-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </Carousel>
    </div>
  );
};

const defaultTestimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "The quality of beans from this supplier has transformed our specialty coffee line. Our customers can taste the difference in every cup.",
    name: "Emma Rodriguez",
    company: "Artisan Coffee Roasters",
    location: "Portland, USA",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
  },
  {
    id: "2",
    quote:
      "Working with this exporter has been seamless. Their commitment to sustainable farming practices aligns perfectly with our brand values.",
    name: "Luca Bianchi",
    company: "Milano Coffee House",
    location: "Milan, Italy",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Luca",
  },
  {
    id: "3",
    quote:
      "The consistency and reliability of their bean quality has allowed us to scale our operations with confidence. A trusted partner for over 5 years.",
    name: "Akira Tanaka",
    company: "Tokyo Bean Co.",
    location: "Tokyo, Japan",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Akira",
  },
  {
    id: "4",
    quote:
      "Their direct trade relationships ensure we get unique flavor profiles that our competitors simply cannot match. A game-changer for our business.",
    name: "Sarah Johnson",
    company: "Urban Grind",
    location: "Melbourne, Australia",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  },
  {
    id: "5",
    quote:
      "The traceability of their beans from farm to cup has been instrumental in our marketing story. Our customers appreciate knowing the source.",
    name: "Carlos Mendez",
    company: "Café Altura",
    location: "Mexico City, Mexico",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carlos",
  },
  {
    id: "6",
    quote:
      "We've tried many suppliers, but none match the rich, complex flavors of these beans. Their commitment to quality is unmatched in the industry.",
    name: "Olivia Chen",
    company: "Brew Culture",
    location: "Vancouver, Canada",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Olivia",
  },
];

export default TestimonialCarousel;
