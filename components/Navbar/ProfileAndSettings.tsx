import Image from "next/image";
import Link from "next/link";
import ProfilePopup from "./ProfilePopup";

const ProfileAndSettings = () => {
  return (
    <div className="flex gap-6 items-center">
      <div className="flex gap-2 py-2 px-3 rounded-full bg-lightYellow">
        <Image
          src={"/assets/images/star-solid.svg"}
          width={20}
          height={20}
          alt="star solid with yellow color"
        />
        <span className="text-black font-extrabold">218</span>
      </div>
      <div className="flex gap-2 py-2 px-3 rounded-full bg-[#F3F3F3]">
        <Image
          src={"/assets/images/language.svg"}
          width={20}
          height={20}
          alt="international language"
        />
        <span className="text-black font-extrabold">EN</span>
      </div>
      <div className="relative">
        <Link href={"#"}>
          <Image
            src={"/assets/images/messages.svg"}
            width={20}
            height={20}
            alt="messages"
          />
          <span className="absolute z-10 -top-[4.75rem] -right-[2px] text-red text-[4.3rem]">
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
          <span className="absolute z-10 -top-[4.75rem] -right-[2px] text-red text-[4.3rem]">
            .
          </span>
        </Link>
      </div>
      <ProfilePopup />
    </div>
  );
};

export default ProfileAndSettings;
