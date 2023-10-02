import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="p-4 mx-auto flex max-w-6xl items-center">
        {/* Logo */}
        <div className="flex gap-2 items-center">
          <Image
            src="/assets/images/mof-logo@3x.png"
            alt="mof logo"
            width={90}
            height={90}
          />
          <div className="h-10 bg-gray-400 w-[1px]" />
          <Image
            src="/assets/images/TLogo@3x.png"
            alt="site logo"
            width={90}
            height={90}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
