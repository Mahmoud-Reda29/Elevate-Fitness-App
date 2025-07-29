import { NavLink, useLocation } from "react-router-dom";
import { cn } from "@/lib/cn";

function getLangFromPath(pathname: string) {
  const parts = pathname.split("/");
  return parts[1] || "en";
}

 // Variables
  const navLinks = [
    { path: "/", title: "Home" },
    { path: "about", title: "About" },
    { path: "classes", title: "Classes" },
    { path: "healthy", title: "Healthy" },
  ];


export default function NavLinks() {
  const { pathname } = useLocation();
  const lang = getLangFromPath(pathname);

  return (
    <div className="hidden gap-6 lg:flex">
      {navLinks.map(({ title, path }) => {
        const fullPath = `/${lang}/${path}`;
        const isActive = pathname === fullPath;

        return (
          <NavLink
            key={path}
            to={fullPath}
            className={cn(
              "font-bold transition dark:text-white",
              isActive
                ? "text-custom-orange-900 dark:text-custom-orange-900"
                : "text-custom-black-800"
            )}
          >
            {title}
          </NavLink>
        );
      })}
    </div>
  );
}

