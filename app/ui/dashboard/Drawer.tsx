import Sidebar from "./Sidebar";
import menu from "@/public/icons/Menu.png";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/drawer";

export default function DrawerContainer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <Image src={menu} alt="menu bar" />
      </DrawerTrigger>
      <DrawerContent>
        <Sidebar />
      </DrawerContent>
    </Drawer>
  );
}
