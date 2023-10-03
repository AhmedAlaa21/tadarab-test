import Image from "next/image";
import NavbarTabs from "./NavbarTabs";
import Link from "next/link";
import Logo from "./Logo";
import ProfileAndSettings from "./ProfileAndSettings";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="sm:mx-auto flex flex-col pb-5 sm:pb-0 sm:flex-row sm:justify-between sm:gap-12 sm:max-w-[1290px] lg:max-w-[1440px] items-center">
        <div className="w-full sm:w-auto flex gap-20 justify-end items-center flex-row-reverse lg:flex-row lg:gap-16">
          <Logo />
          <NavbarTabs />
        </div>
        <ProfileAndSettings />
      </div>
    </header>
  );
};

export default Navbar;
