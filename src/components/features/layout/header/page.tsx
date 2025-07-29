import NavLinksRes from "@/components/common/header-responsive";
import ButtonsHeader from "./_components/buttons-header";
import HeaderLogo from "./_components/header-logo";
import NavLinks from "./_components/navLinks";

export default function Header() {
  return (
    <header className="mx-auto flex items-center justify-between px-4 py-10 lg:px-0">
      {/* Logo */}
      <HeaderLogo />

      {/* Links */}
      <NavLinks />
      <div className="flex items-center gap-5">
        {/* Buttons */}
        <ButtonsHeader />

        <NavLinksRes />
      </div>
    </header>
  );
}
