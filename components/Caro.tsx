import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { Card, CardContent } from "../components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";

const subjects = [
  "Calculus",
  "Number Theory",
  "Analysis",
  "Topology",
  "Abstract Algebra",
  "Logic",
  "Category Theory",
  "Algebraic Topology",
];

export function CarouselPlugin() {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className=" max-h-60 mx-16 mb-32 mt-10"
    >
      <CarouselContent>
        {subjects.map((subject, index) => (
          <CarouselItem
            key={index}
            className="basis-1/2 md:basis-1/4 lg:basis-1/5"
          >
            <div>
              <Card className="bg-[#eeeeee] dark:bg-gray-800 dark:border-gray-800">
                <CardContent className="flex aspect-square items-center justify-center p-5">
                  <span className="lg:text-2xl max-sm:2xl text-2xl font-semibold text-black dark:text-white text-center">
                    {subject}
                  </span>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="max-md:size-5" />
      <CarouselNext className="max-md:size-5" />
    </Carousel>
  );
}
