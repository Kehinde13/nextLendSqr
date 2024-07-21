import React from "react";
import logo from "@/public/loginPage/Group (1).svg";
import alertIcon from "@/public/icons/alert.png";
import search from "@/public/icons/Search.png";
import userIcon from '@/public/avatar.png'
import Image from "next/image";
import Link from "next/link";
import Drawer from "./Drawer";

const Navbar = () => {
  return (
    <div className="md:p-5 p-2 flex justify-between shadow-md">
      <div className="flex gap-36 w-[50%]">
        <Image src={logo} alt="lendSqr logo" className="w-[60%] md:w-[20%]" />

        <form className="md:flex hidden w-[50%]">
          <input
            type="text"
            placeholder="Search for user"
            className="bg-white border-gray-300 border input w-[100%]"
          />
          <button className="bg-[#39CDCC] btn border-none rounded-l-none ml-[-15px] ">
            <Image src={search} alt="Search" />
          </button>
        </form>
      </div>

      <div className="flex gap-3 md:gap-10 ">
        <Link href={'/'} className="self-center">
          Docs
        </Link>

        <Image
         src={alertIcon}
         alt="alert icon"
         className="self-center"
        />

        <Image
         src={userIcon}
         alt="user icon"
         className="hidden md:block"
        />

        <p className="self-center hidden md:block">Adedeji</p>

        <Drawer />
      </div>
    </div>
  );
};

export default Navbar;
