import { Outlet } from "react-router-dom";

export default function HealthyLayout() {
  return (
    // Main with bg for test
    <main className="bg-[#24242499]">
      {/* Header */}
      <h1 className="text-center text-4xl font-bold uppercase">
        Fuel your fitness journey with
        <br /> customized
        <span className="text-custom-orange-900"> meal plans </span> for you
      </h1>

      {/* Outlet children */}
      <Outlet />
    </main>
  );
}
