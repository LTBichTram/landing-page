"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import logoIcon from "@/assets/logo.svg";
import Link from "next/link";
import Button from "./Button";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`max-w-[1440px] m-auto sm:px-16 px-4 h-20 flex justify-between items-center sticky top-0 left-0 right-0 z-50 transition-all ${
        isScrolled ? "bg-white" : "bg-transparent"
      }`}
    >
      <Image src={logoIcon} alt="Example Image" width={63} height={63} />
      <div className="hidden md:flex space-x-5 xl:space-x-8 items-center">
        {listHeader.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className="text-nowrap text-xl text-black hover:opacity-80"
          >
            {item.title}
          </Link>
        ))}
        <Button variant="primary">Sign up</Button>
      </div>
    </div>
  );
};

export default Header;

const listHeader = [
  {
    title: "Playground",
    href: "",
  },
  {
    title: "How it works",
    href: "",
  },
  {
    title: "Pricing",
    href: "",
  },
  {
    title: "Case Study",
    href: "",
  },
];
