import Image from "next/image";
import NavbarTabs from "./NavbarTabs";
import Link from "next/link";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="mx-auto flex justify-between gap-12 max-w-[1290px] items-center">
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
        {/* TABS */}
        <NavbarTabs />
        {/* Profile & Settings */}
        <div className="flex gap-6 items-center">
          <div className=" flex gap-2 py-2 px-3  rounded-full bg-lightYellow">
            <Image
              src={"/assets/images/star-solid.svg"}
              width={20}
              height={20}
              alt="star solid with yellow color"
            />
            <span className="text-black font-bold">218</span>
          </div>
          <div className=" flex gap-2 py-2 px-3 rounded-full bg-[#F3F3F3]">
            <Image
              src={"/assets/images/language.svg"}
              width={20}
              height={20}
              alt="international language"
            />
            <span className="text-black font-bold">EN</span>
          </div>
          <div className="relative">
            <Link href={"#"}>
              <Image
                src={"/assets/images/messages.svg"}
                width={20}
                height={20}
                alt="messages"
              />
              <span className="absolute z-10 -top-[4.3rem] -right-[2px]  text-red text-[4.3rem]">
                .
              </span>
            </Link>
          </div>
          <div className="relative">
            <Link href={"#"}>
              <Image
                src={"/assets/images/notifications.svg"}
                width={20}
                height={20}
                alt="notifications"
              />
              <span className="absolute z-10 -top-[4.3rem] -right-[2px]  text-red text-[4.3rem]">
                .
              </span>
            </Link>
          </div>
          <div className=" flex items-center gap-4">
            <div className="rounded-full overflow-hidden">
              <Image
                src={"/assets/images/user-solid.jpg"}
                height={40}
                width={40}
                alt="user"
              />
            </div>
            <div>
              <Image
                src={"/assets/images/chevron-down.svg"}
                height={15}
                width={15}
                alt="arrow down"
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
