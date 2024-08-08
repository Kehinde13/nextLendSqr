"use client"

import React, { useState } from "react";
import logo from "@/public/loginPage/Group (1).svg";
import alertIcon from "@/public/icons/alert.png";
import search from "@/public/icons/Search.png";
import userIcon from '@/public/avatar.png'
import Image from "next/image";
import Link from "next/link";
import DrawerContainer from "./Drawer";
import { InputWithButton } from "../shadcn/InputWithButton";
import { Customer } from "@/app/lib/definitions";


const Navbar = () => {
  const [customerObj, setCustomer] = useState<Customer | null>(null);

  return (
    <div className="md:p-5 p-2 flex justify-between shadow-md">
      <div className="flex gap-36 w-[50%]">
        <Image src={logo} alt="lendSqr logo" className="w-[60%] md:w-[20%]" />

        <div className="hidden md:block w-full">
          <InputWithButton setCustomer={setCustomer}/>
        </div>
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

        <DrawerContainer />
      </div>
    </div>
  );
};

export default Navbar;
