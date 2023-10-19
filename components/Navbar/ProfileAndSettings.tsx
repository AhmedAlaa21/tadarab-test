import Image from "next/image";
import Link from "next/link";
import ProfilePopup from "./ProfilePopup";

const ProfileAndSettings = () => {
  return (
    <div className="flex gap-x-6 items-center">
      <div
        className="cursor-pointer flex items-center gap-x-2 py-2 px-3 rounded-full bg-lightYellow"
        title="نقاطك"
      >
        <Image
          src={"/assets/images/star-solid.svg"}
          width={20}
          height={20}
          alt="star solid with yellow color"
        />
        <span className="text-black text-heading font-extrabold">218</span>
      </div>
      <div
        className="cursor-pointer flex items-center gap-2 py-2 px-3 rounded-full bg-[#F3F3F3]"
        title="غير لغتك"
      >
        <Image
          src={"/assets/images/language.svg"}
          width={20}
          height={20}
          alt="international language"
        />
        <span className="text-black text-sm font-extrabold">EN</span>
      </div>
      <div className="relative">
        <Link href={"#"} title="messages">
          <Image
            src={"/assets/images/messages.svg"}
            width={20}
            height={20}
            alt="الرسائل"
          />
          <span className="absolute z-10 -top-[4.35rem] -right-[2px] text-red text-[4.3rem]">
            .
          </span>
        </Link>
      </div>
      <div className="relative">
        <Link href={"#"} title="notifications">
          <Image
            src={"/assets/images/notifications.svg"}
            width={20}
            height={20}
            alt="الاشعارات"
          />
          <span className="absolute z-10 -top-[4.35rem] -right-[2px] text-red text-[4.3rem]">
            .
          </span>
        </Link>
      </div>
      <ProfilePopup />
    </div>
  );
};

export default ProfileAndSettings;
