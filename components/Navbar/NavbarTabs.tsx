"use client";

import { useState } from "react";
import { navbarLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const NavbarTabs = () => {
  const [selectedTab, setSelectedTab] = useState(1);

  const handleTabClick = (index: number) => {
    setSelectedTab(index);
    console.log(selectedTab);
  };

  return (
    <div className="hidden lg:flex gap-6 items-center">
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
  );
};

export default NavbarTabs;
