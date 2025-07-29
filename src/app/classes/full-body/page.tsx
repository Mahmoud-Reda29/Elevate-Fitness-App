import useClasses from "@/hooks/classes/full-body.hook";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPagination,
} from "@/components/ui/carousel";
import { MoveUpRight } from "lucide-react";

export default function FullBodyClasses() {
  const { data, isLoading, error } = useClasses();

  // Group data into chunks of 6
  const groupedData = data
    ? Array.from({ length: Math.ceil(data.length / 6) }, (_, i) => data.slice(i * 6, i * 6 + 6))
    : [];

  return (
    <Carousel>
      <CarouselContent className="mb-12">
        {groupedData.map((group, index) => (
          <CarouselItem key={index}>
            <div className="grid grid-cols-3 gap-4">
              {group.map((item) => (
                <div key={item._id} className="rounded border p-4 text-center">
                  <h3 className="uppercase tracking-[7px]">{item.name}</h3>

                  <div className="flex items-center gap-1 cursor-pointer">
                    <p className="text-custom-orange-900">Explore</p>

                    <span className="bg-custom-orange-900 rounded-full p-1">
                      <MoveUpRight className="w-2 h-2 text-black"/>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>

      {/* Pagination */}
      <CarouselPagination />
    </Carousel>
  );
}
