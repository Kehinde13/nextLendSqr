import Sidebar from "./Sidebar";
import menu from "@/public/icons/Menu.png";
import Image from "next/image";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/drawer";
import { AlignJustifyIcon } from "lucide-react";

export default function DrawerContainer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <AlignJustifyIcon />
      </DrawerTrigger>
      <DrawerContent>
        <Sidebar />
      </DrawerContent>
    </Drawer>
  );
}
