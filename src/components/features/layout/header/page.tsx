import NavLinksRes from "@/components/common/header-responsive";
import ButtonsHeader from "./_components/buttons-header";
import HeaderLogo from "./_components/header-logo";
import NavLinks from "./_components/navLinks";

export default function Header() {
  return (
    <div className="mx-auto flex justify-between items-center py-10 lg:px-0 px-4">
      {/* Logo */}
      <HeaderLogo />

      {/* Links */}
      <NavLinks />
      <NavLinksRes/>

      {/* Buttons */}
      <ButtonsHeader/>
    </div>
  );
}
