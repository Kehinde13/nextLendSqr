import Navbar from "../ui/dashboard/Navbar";
import Sidebar from '../ui/dashboard/Sidebar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-full bg-white">
      <Navbar />
      <div className="flex md:overflow-hidden">
        <div className="hidden md:block w-64">
          <Sidebar />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">
          {children}
        </div>
      </div>
    </div>
  );
}
