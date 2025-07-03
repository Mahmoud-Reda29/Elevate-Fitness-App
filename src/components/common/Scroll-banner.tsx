import { Sparkle } from "lucide-react";

export default function ScrollBanner() {
  const items = ["personal training", "outdoor & online trainers", "live classes"];

  return (
    <div className="bg-custom-orange-900 relative overflow-hidden p-3">
      <div className="animate-scroll flex whitespace-nowrap group-hover:[animation-play-state:paused]">
        {[...Array(20)].map((_, i) =>
          items.map((item, j) => (
            <span key={`${i}-${j}`} className="flex gap-3 px-8 text-white">
              <Sparkle />
              {item}
            </span>
          )),
        )}
      </div>
    </div>
  );
}
