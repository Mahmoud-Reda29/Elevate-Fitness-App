import { Outlet } from "react-router-dom";

export default function AppLayout() {
  return (
    <div>
      {/* Outlet children */}
      <Outlet />
    </div>
  );
}
