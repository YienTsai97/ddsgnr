import React, { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const ServiceCarousel: React.FC = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const serviceNum = 4;

  useEffect(() => {
    if (!api) return;
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="max-w-full"
      >
        <CarouselContent>
          {Array.from({ length: serviceNum }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="flex flex-col p-8 gap-12 border border-black justify-center items-center">
                <div className="self-start hidden sm:block">
                  <img src="/service/webflow.svg"></img>
                </div>
                <div className="self-start sm:hidden flex">
                  {Array.from({ length: 5 - index }).map((_, index) => (
                    <img key={index} src="/service/star.svg"></img>
                  ))}
                </div>
                <div className="flex flex-col gap-8">
                  <div className="flex flex-col gap-6">
                    <p>
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Suspendisse varius enim in eros elementum tristique. Duis
                      cursus, mi quis viverra ornare."
                    </p>
                    <div className="flex gap-5">
                      <div>
                        <img src={`/icon/icon${index + 1}.svg`} alt="icon" />
                      </div>
                      <div>
                        <p className="font-bold">Name Surname</p>
                        <p>Position, Company name</p>
                      </div>
                    </div>
                  </div>
                  <div className="items-center hidden md:flex">
                    <button>Read case study</button>
                    <div className="h-6 w-6 flex items-center justify-center">
                      <FaChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="flex justify-between mt-10 md:mt-0">
          <div className="md:hidden py-2 text-center text-sm text-muted-foreground flex gap-2 mt-2">
            {Array.from({ length: serviceNum }).map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  current === index + 1 ? "bg-black" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <div className="flex gap-2">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </div>
      </Carousel>
      <div className="hidden md:flex -mt-10 py-2 text-center text-sm text-muted-foreground gap-2">
        {Array.from({ length: serviceNum }).map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              current === index + 1 ? "bg-black" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </>
  );
};

export default ServiceCarousel;
