import Image from "next/image";
import React from "react";
import innoloft_logo from "/public/Innoloft_logo.svg";

export default function Header() {
  return (
    <div className="h-[55px] bg-[#272E71] flex items-center">
      <Image src={innoloft_logo} alt="logo" />
      <div className="flex align-middle">
        <input
          type="search"
          placeholder="Enter keyword, interest, company name, etc"
          className="h-[30px] w-[400px] outline-none pl-2 placeholder:pl-2 rounded "
        />
      </div>
    </div>
  );
}
