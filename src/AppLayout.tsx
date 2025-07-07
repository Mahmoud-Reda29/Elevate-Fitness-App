import { Outlet } from "react-router-dom";
import { useLocale } from "use-intl";

export default function AppLayout() {
  const local = useLocale();

  return (
    <main dir={local === "ar" ? "rtl" : "ltr"}>
      {/* Outlet children */}
      <Outlet />
    </main>
  );
}
