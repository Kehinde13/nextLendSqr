import backArr from "@/public/icons/Vector (7).png";
import starFull from "@/public/icons/np_star_1208084_000000 1.png";
import starEmpty from "@/public/icons/np_star_1171151_000000 1.png";
import placeHolderImg from "@/public/icons/np_user_948637_000000 1.png";
import Image from "next/image";
import UserDetails from "@/app/ui/userdetails/UserDetails";
/* import UserInfo from "../Components/UserInfo"; */

function page() {

    const userProfile = {
       username: "Kungfu Kenny",
       _id: "12213",
       balance: "$250,500.00"
    }
    
    return (
      <div className="max-w-[100%]">
        <button className="flex md:gap-5 gap-3">
          <Image src={backArr} alt="" className="self-center"/> 
          Back to Users
        </button>
  
        <div className="w-full flex flex-col md:flex-row gap-3 justify-between my-10">
          <h3 className="font-bold text-xl">User Details</h3>
  
          <div className="flex gap-2 md:gap-5">
            <button className="text-red-500 text-sm md:text-base border rounded-md border-red-500 px-3 py-1 hover:text-white hover:bg-red-500">
                BLACKLIST USER
            </button>
            <button className="text-[#39CDCC] text-sm md:text-base border rounded-md border-[#39CDCC] px-3 py-1 hover:text-white hover:bg-[#39CDCC]">ACTIVATE USER</button>
          </div>
        </div>
  
        <div className="w-full p-5 md:pb-0 md:pt-10 md:px-10 shadow-2xl rounded-md">
          <div className="flex flex-col md:flex-row mb-10 md:w-[70%] ">
            <div className="flex gap-8 border-b pb-3 md:border-b-0 md:border-r border-gray-300 md:pr-5">
              <div className="bg-gray-300 rounded-full p-5">
                <Image src={placeHolderImg} alt="" />
              </div>
  
              <div className="self-center">
                <h3 className="text-xl font-semibold">{userProfile?.username}</h3>
                {userProfile?._id}
              </div>
            </div>

  
            <div className="md:px-5 md:pt-3 p-5 font-semibold md:border-b-0 border-b md:border-r border-gray-300 pr-5">
              <p>User&apos;s Tier</p>
              <div className="flex gap-2  mt-3">
                <Image src={starFull} alt="" />
                <Image src={starEmpty} alt="" />
                <Image src={starEmpty} alt="" />
              </div>
            </div>
  
            <div className="px-5 pt-2">
              <h3 className="text-xl font-semibold">{userProfile?.balance}</h3>
              <p>Providus Bank</p>
            </div>
          </div>
          <ul className="hidden md:flex justify-between px-5 text-sm">
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">General Details</li>
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">Documents</li>
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">Bank Details</li>
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">Loans</li>
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">Savings</li>
            <li className="cursor-pointer border-b-2 px-2 hover:border-[#39CDCC] hover:text-[#39CDCC] pb-2">App and System</li>
          </ul>
        </div>
  
        <UserDetails  />
      </div>
    );
  };

export default page