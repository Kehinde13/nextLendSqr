'use client'

import view from "@/public/icons/np_view_1214519_000000 1.png";
import activate from "@/public/icons/np_user_2995993_000000 1.png";
import blacklist from "@/public/icons/np_delete-friend_3248001_000000 1.png";
import Image from "next/image";
import { useEffect, useRef } from "react";

type Prop = {
  dropdownVisible: string | boolean | number | undefined;
  setDropdownVisible: (dropdownVisible: string | boolean) => void;
  userId: string | undefined ;
};

const Options: React.FC<Prop> = ({
  dropdownVisible,
  setDropdownVisible,
  userId,
}) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const clickOutside = (e: MouseEvent) => {
      if (
        dropdownVisible &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setDropdownVisible(false);
      }
    };

    document.addEventListener("mousedown", clickOutside);
    return () => {
      document.removeEventListener("mousedown", clickOutside);
    };
  }, [dropdownVisible, setDropdownVisible]);

  return (
    <div className="absolute right-1 md:right-5 shadow-xl px-3 py-1 bg-white flex flex-col gap-3" ref={dropdownRef}>
      <div>
        <div className="flex gap-1">
          <Image src={view} alt="" className="self-center"/>
          View Details
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          <Image src={blacklist} alt="" className="self-center"/>
          Blacklist User
        </div>
      </div>
      <div>
        <div className="flex gap-1">
          <Image src={activate} alt="" className="self-center"/>
          Activate User
        </div>
      </div>
    </div>
  );
};

export default Options;
