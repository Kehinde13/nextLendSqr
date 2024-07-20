import React from "react";
import logo from "@/public/loginPage/Group (1).svg";
import alertIcon from "@/public/icons/alert.png";
import search from "@/public/icons/Search.png";
import userIcon from '@/public/avatar.png'
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="p-5 flex justify-between shadow-md">
      <div className="flex gap-36 w-[50%]">
        <Image src={logo} alt="lendSqr logo" className="w-[50%] md:w-[20%]" />

        <form className="md:flex hidden w-[50%]">
          <input
            type="text"
            placeholder="Search for user"
            className="bg-white border-gray-300 border input w-[100%]"
          />
          <button className="bg-[#39CDCC] btn border-none ml-[-15px] ">
            <Image src={search} alt="Search" />
          </button>
        </form>
      </div>

      <div className="hidden md:flex gap-10">
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
         alt="alert icon"
        />

        <p className="self-center">Adedeji</p>
      </div>
    </div>
  );
};

export default Navbar;
