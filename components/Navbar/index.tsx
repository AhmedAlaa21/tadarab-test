import Image from "next/image";
import NavbarTabs from "./NavbarTabs";
import Link from "next/link";
import Logo from "./Logo";
import ProfileAndSettings from "./ProfileAndSettings";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="sm:mx-auto flex flex-col pb-5 sm:pb-0 sm:flex-row sm:justify-between sm:gap-12 sm:max-w-[1290px] items-center">
        <Logo />
        <NavbarTabs />
        <ProfileAndSettings />
      </div>
    </header>
  );
};

export default Navbar;
