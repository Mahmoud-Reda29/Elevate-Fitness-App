import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlignJustify } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslations } from "use-intl";
import { Button } from "../ui/button";
export default function NavLinksRes() {
  // Translation
  const t = useTranslations();

  // Variables
  const links = [
    { title: t("home"), href: "/" },
    { title: t("about"), href: "about" },
    { title: t("classes"), href: "classes" },
    { title: t("healthy"), href: "healthy" },
  ];

  return (
    <div className="lg:hidden block">
    <Dialog>
      <DialogTrigger>
        {/* Add user button */}
        <Button className="text-custom-white-900 bg-custom-orange-900 rounded-full cursor-pointer">

        <AlignJustify/>
        </Button>
      </DialogTrigger>
      <DialogContent
        className={`
           left-0 top-0 rounded-none translate-x-0 translate-y-0 fixed w-[350px]`}
      >
        <DialogHeader>
          {/* Heading */}
          <DialogTitle>
            {/* Logo */}
            <img
              src="/fit-logo.png"
              alt="Logo picture"
              className=" text-white w-20"
            />
          </DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="flex flex-col ">
          {links.map(({ title, href }) => (
            <NavLink
              key={href}
              to={href}
              className={({ isActive }) =>
                `p-1.5 font-medium flex items-center justify-between hover:text-custom-orange-900 ${
                  isActive && "bg-white text-custom-orange-900 pl-3"
                }`
              }
            >
              <span>{title}</span>
            </NavLink>
          ))}
        </div>
      </DialogContent>
    </Dialog>
    </div>
  );
}
