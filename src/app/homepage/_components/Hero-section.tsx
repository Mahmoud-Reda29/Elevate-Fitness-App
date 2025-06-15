import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full xl:overflow-hidden">
      <div className="absolute inset-0 h-fit bg-[url('/images/hero-image.png')] bg-cover bg-center md:h-auto">
        <div className="bg-custom-white dark:bg-custom-black-700 relative flex flex-col items-center justify-between gap-32 px-6 py-12 pb-0 backdrop-blur-3xl sm:h-full lg:flex-row lg:px-16">
          {/* Text Section */}
          <div className="text-custom-black-900 dark:text-custom-white-800 container max-w-xl space-y-6">
            <h1 className="text-center text-4xl font-bold lg:text-left">
              Your body can <span className="text-custom-orange-900">stand almost</span> anything
            </h1>
            <div className="flex flex-col gap-16">
              <p className="before:bg-custom-orange-900 text-custom-black-900 dark:text-custom-white-800 relative pl-6 text-center text-lg before:absolute before:top-0 before:left-0 before:h-full before:w-1 lg:text-left">
                It's your mind that needs convincing. Push past your limits, stay committed, and
                watch as your body transform into powerhouse of strength and resilience. Start your
                journey today & truly capable of!
              </p>

              {/* Stats Section */}
              <div className="flex justify-center gap-8 lg:justify-start">
                <div className="">
                  <span className="text-2xl font-semibold">1200+</span>
                  <p className="text-sm">Active Members</p>
                </div>
                <div className="">
                  <span className="text-2xl font-semibold">12+</span>
                  <p className="text-sm">Certified Trainers</p>
                </div>
                <div className="">
                  <span className="text-2xl font-semibold">20+</span>
                  <p className="text-sm">Year Of Experience</p>
                </div>
              </div>

              {/* buttons */}
              <div className="flex items-center gap-16">
                <Button variant="default">Get Started</Button>
                <Button variant="outline">Explore More</Button>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="mt-10 lg:mt-0">
            <img src="/images/hero.png" alt="Person working out" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </section>
  );
}
