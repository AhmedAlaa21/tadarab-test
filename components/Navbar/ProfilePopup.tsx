"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import PopupItem from "./PopupItem";
import { motion } from "framer-motion";

const ProfilePopup = () => {
  const [showMenu, setShowMenu] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setShowMenu((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        toggleMenu();
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [showMenu]);

  const listStyle =
    "py-2 flex flex-col border-b gap-4 pb-4 border-gray-200 w-full";

  const popupVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <div
      className="relative cursor-pointer flex items-center gap-4"
      onClick={toggleMenu}
    >
      <div className="rounded-full overflow-hidden">
        <Image
          src={"/assets/images/user-solid.jpg"}
          height={40}
          width={40}
          alt="user"
        />
      </div>
      {showMenu && (
        <motion.div
          className="absolute top-11 left-0 ml-6 mt-12 w-[300px]
           h-auto bg-white rounded-md shadow-md"
          ref={popupRef}
          initial="hidden"
          animate="visible"
          variants={popupVariants}
          transition={{ duration: 0.3 }}
        >
          <ul className="list-none px-8 pb-4 flex flex-col items-start justify-center gap-4 w-full">
            <li className="py-2 flex flex-col border-b pb-4 border-gray-200 w-full">
              <h2 className="font-extrabold text-xl">أحمد عمرو</h2>
              <p className="text-sm font-normal text-lightGray">
                ahmed.amr@gmail.com
              </p>
              <div className="flex gap-2 items-center">
                <Image
                  src="/assets/images/star-solid.svg"
                  alt="yellow star"
                  width={20}
                  height={20}
                />
                <p className=" font-bold text-lightGray text-xl">
                  218 <span className="text-sm font-normal">نقطة</span>
                </p>
              </div>
            </li>
            <li className={listStyle}>
              <PopupItem
                title="تعديل حسابي الشخصي"
                image="/assets/images/profile.svg"
              />
              <PopupItem
                title="تغيير كلمة المرور"
                image="/assets/images/lock-solid.svg"
              />
            </li>
            <li className={listStyle}>
              <PopupItem title="دوراتي" image="/assets/images/myCourses.svg" />
              <PopupItem
                title="شهاداتي الكاملة"
                image="/assets/images/check-circle.svg"
              />
            </li>
            <li className="">
              <PopupItem
                title="تسجيل الخروج"
                image="/assets/images/log-out.svg"
              />
            </li>
          </ul>
          {/* Arrow */}
          <div
            className="absolute top-[-8px] left-4 -translate-x-1/3 w-4
           h-4 bg-white transform rotate-45"
          />
        </motion.div>
      )}
      <div>
        <Image
          src={"/assets/images/chevron-down.svg"}
          height={15}
          width={15}
          alt="arrow down"
        />
      </div>
    </div>
  );
};

export default ProfilePopup;
