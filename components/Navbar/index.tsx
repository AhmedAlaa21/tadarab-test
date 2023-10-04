import NavbarTabs from "./NavbarTabs";
import Logo from "./Logo";
import ProfileAndSettings from "./ProfileAndSettings";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="sm:mx-auto px-4 flex flex-col pb-5 sm:pb-0 sm:flex-row sm:justify-between sm:gap-8 sm:max-w-[1290px] lg:max-w-[1500px] items-center">
        <div className="flex gap-20 justify-end items-center flex-row-reverse lg:flex-row ">
          <Logo />
          <NavbarTabs />
        </div>
        <ProfileAndSettings />
      </div>
    </header>
  );
};

export default Navbar;
