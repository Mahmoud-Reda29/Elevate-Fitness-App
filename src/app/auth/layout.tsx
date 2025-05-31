import { Outlet } from "react-router";

export default function AuthLayout() {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/assests/images/background.png')`,
        }}
      ></div>
      {/* Overlay Layer */}
      <div className="bg-custom-overlay absolute inset-0 z-1 backdrop-blur-2xl"></div>
      {/* Content */}
      <div className="relative z-55 flex h-screen flex-col md:flex-row md:items-center">
        {/* Left Side */}
        <div className="border-r-custom-orange-900 flex h-screen flex-1 items-center justify-center border-r-1 shadow-[0px_4px_79.8px_47px_rgba(0,0,0,0.25)]">
          <div className="flex max-h-[721px] w-2xl flex-col items-center justify-center p-8">
            {/* Brand image */}
            <div>
              <img src="/assests/images/brand.png" alt="brand image" className="h-[151px] w-56" />
            </div>

            {/*   Person image */}
            <div>
              <img src="/assests/images/person.png" alt="person image" className="h-[474px] w-xl" />
            </div>
          </div>
        </div>

        {/* Outlet children */}
        <div className="flex flex-1 items-center justify-center">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
