import NavbarTabs from "./NavbarTabs";
import Logo from "./Logo";
import ProfileAndSettings from "./ProfileAndSettings";

const Navbar = () => {
  return (
    <header className="sticky top-0 p-1.5 z-50 md:p-0 bg-white shadow-sm md:h-[70px] flex items-center">
      <div
        className="sm:mx-auto px-4 flex flex-col 
        sm:flex-row sm:justify-between sm:gap-x-8 sm:max-w-[1290px]
        lg:max-w-[1500px] items-center"
      >
        <div className="flex gap-x-20 justify-end items-center flex-row-reverse lg:flex-row ">
          <Logo />
          <NavbarTabs />
        </div>
        <ProfileAndSettings />
      </div>
    </header>
  );
};

export default Navbar;
