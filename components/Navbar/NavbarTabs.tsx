"use client";
import { useEffect, useRef, useState } from "react";
import { navbarLinks } from "@/constants";
import { motion } from "framer-motion";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";
import Image from "next/image";
import Link from "next/link";

const NavbarTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [showMenu, setShowMenu] = useState(false);
  const popupRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    console.log(selectedTab);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
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

  return (
    <div className="flex items-start">
      <div className="mr-4 lg:hidden">
        <RiMenu3Line size={32} onClick={toggleMenu} />
      </div>
      <div className={`hidden lg:flex lg:gap-4`}>
        {navbarLinks.map((link) => (
          <Link
            href={link.href}
            key={link.id}
            className={`flex gap-2 items-center p-4 rounded-lg
            hover:bg-lightRed hover:bg-opacity-20 hover:text-red
              ${
                selectedTab === link.id
                  ? "text-red bg-lightRed bg-opacity-20"
                  : "text-lightGray"
              }
            `}
            onClick={() => handleTabClick(link.id)}
          >
            <Image src={link.src} alt={link.title} width={18} height={20} />
            {link.title}
          </Link>
        ))}
      </div>
      {showMenu && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          className="flex items-start justify-between p-2 absolute top-20
           right-0 z-[99] w-[300px] h-auto bg-white shadow-xl rounded-lg"
        >
          <div className=" text-black ">
            {navbarLinks.map((link) => (
              <Link
                href={link.href}
                key={link.id}
                className={`flex gap-2 items-center p-4 rounded-lg
              ${
                selectedTab === link.id
                  ? "text-red bg-lightRed bg-opacity-20"
                  : "text-lightGray"
              }
            `}
                onClick={() => handleTabClick(link.id)}
              >
                <Image src={link.src} alt={link.title} width={18} height={20} />
                {link.title}
              </Link>
            ))}
          </div>
          <div
            className="transition w-10 h-10 flex items-center justify-center
        rounded-full cursor-pointer bg-transparent"
          >
            <AiFillCloseCircle size={32} onClick={toggleMenu} color="#C15258" />
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default NavbarTabs;
