import { Button } from "@/components/ui/button";
import { MdArrowOutward } from "react-icons/md";

export default function AboutUs() {
  return (
    <section className="container mx-auto py-12">
      <div className="flex flex-col items-start justify-between gap-12 md:flex-row">
        {/* Left side - Images */}
        <div className="relative w-full md:w-1/2">
          <img
            src="/images/img3.png"
            className="absolute top-72 left-64 z-10 w-80 rounded-2xl"
            alt="Gym trainer helping client"
          />
          <img
            src="/images/img1.png"
            className="absolute top-8 left-0 w-80 rounded-2xl"
            alt="Gym equipment"
          />
          <img
            src="/images/img2.png"
            className="absolute top-20 left-96 w-56 rounded-2xl"
            alt="Client working out"
          />
        </div>

        {/* Right side - Content */}
        <div className="bg-custom-white-700 dark:bg-custom-black-800 w-full space-y-6 md:w-1/2">
          <div className="flex h-16 items-center gap-2 bg-[url('/images/About-us.png')] bg-no-repeat">
            <span className="text-custom-orange-900 text-lg font-medium">About Us</span>
          </div>

          <h2 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            EMPOWERING YOU TO ACHIEVE
            <br />
            <span className="text-custom-orange-900">YOUR FITNESS</span> GOALS
          </h2>

          <p className="text-custom-black-900 text-lg leading-relaxed dark:text-gray-300">
            We believe fitness is more than just a workout—it's a lifestyle. With top-of-the-line
            facilities, certified trainers, and a supportive community, we're here to inspire and
            guide you every step of the way.
          </p>

          <div className="grid grid-cols-1 gap-x-8 gap-y-6 pt-4 md:grid-cols-2">
            {["Personal Trainer", "Group Classes", "Nutrition Guidance", "Online Programs"].map(
              (title, index) => (
                <div key={index}>
                  <div className="flex items-center gap-3">
                    <MdArrowOutward className="text-custom-orange-900" size={20} />
                    <h3 className="text-lg font-semibold">{title}</h3>
                  </div>
                  <p className="text-custom-black-900 dark:text-gray-400">
                    Achieve your fitness goals with the guidance of our certified trainers.
                  </p>
                </div>
              ),
            )}
          </div>

          <Button variant="default">Get Started</Button>
        </div>
      </div>
    </section>
  );
}
