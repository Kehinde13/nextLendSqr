import Image from "next/image";
import React from "react";
import menu from "@/public/icons/Menu.png";
import close from "@/public/icons/Close.png"
import Sidebar from "./Sidebar"

const Drawer = () => {
  return (
    <div className="drawer md:hidden">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <Image src={menu} alt="menu bar" />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <div className="menu bg-white text-base-content min-h-full w-80 p-4">
          <input id="my-drawer" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content absolute right-5 top-8">
            <label htmlFor="my-drawer">
              <Image src={close} alt="menu bar" />
            </label>
          </div>
          
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
