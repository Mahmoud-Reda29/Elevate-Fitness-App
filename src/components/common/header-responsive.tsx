import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AlignRight } from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTranslations } from "use-intl";
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
    <div className="block lg:hidden">
      <Dialog>
        <DialogTrigger className="bg-custom-orange-900 cursor-pointer rounded-full p-2 text-white">
          <AlignRight />
        </DialogTrigger>
        <DialogContent
          className={`fixed top-0 left-0 w-[350px] translate-x-0 translate-y-0 rounded-none border-none bg-white`}
        >
          <DialogHeader>
            {/* Heading */}
            <DialogTitle>
              {/* Logo */}
              <img src="/fit-logo.png" alt="Logo picture" className="w-20 text-white" />
            </DialogTitle>
            <DialogDescription></DialogDescription>
          </DialogHeader>
          <div className="flex flex-col">
            {links.map(({ title, href }) => (
              <NavLink
                key={href}
                to={href}
                className={({ isActive }) =>
                  `hover:text-custom-orange-900 flex items-center justify-between p-1.5 font-medium ${
                    isActive && "text-custom-orange-900 bg-white pl-3"
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
