import Sidebar from "./Sidebar";
import { Drawer, DrawerContent, DrawerTrigger } from "../shadcn/drawer";
import { AlignJustifyIcon } from "lucide-react";

export default function DrawerContainer() {
  return (
    <Drawer>
      <DrawerTrigger>
        <AlignJustifyIcon className="md:hidden" />
      </DrawerTrigger>
      <DrawerContent>
        <Sidebar />
      </DrawerContent>
    </Drawer>
  );
}
