import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex gap-2 items-center">
        <Image
          priority
          src="/assets/images/mof-logo@3x.png"
          alt="mof logo"
          width={90}
          height={90}
        />
        <div className="h-10 bg-gray-300 w-[1px]" />
        <Image
          src="/assets/images/TLogo@3x.png"
          priority
          alt="site logo"
          width={90}
          height={90}
        />
      </div>
    </Link>
  );
};

export default Logo;
