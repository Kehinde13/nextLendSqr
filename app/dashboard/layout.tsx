import Navbar from "../ui/dashboard/Navbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-screen bg-white">
      <Navbar />
      <div className="flex md:overflow-hidden">
        <div className="w-full flex-none md:w-64">SideBar</div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
