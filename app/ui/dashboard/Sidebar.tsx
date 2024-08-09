import avatar from "@/public/avatar.png";
import briefcase from "@/public/icons/briefcase 1.png";
import down from "@/public/icons/Vector (3).png";
import home from "@/public/icons/home 1.png";
import userIcon from "@/public/icons/user-friends 1.png";
import users from "@/public/icons/users 1.png";
import sack from "@/public/icons/sack 1.png";
import handShake from "@/public/icons/handshake-regular 1.png";
import piggy from "@/public/icons/piggy-bank 1.png";
import loan from "@/public/icons/Group 104.png";
import userCheck from "@/public/icons/user-check 1.png";
import userTimes from "@/public/icons/user-times 1.png";
import bank from "@/public/icons/np_bank_148501_000000 1.png";
import savings from "@/public/icons/coins-solid 1.png";
import phone from "@/public/icons/icon.png";
import spinner from "@/public/icons/galaxy 1.png";
import userCog from "@/public/icons/user-cog 1.png";
import settlement from "@/public/icons/scroll 1.png";
import report from "@/public/icons/sliders-h 1.png";
import sliders from "@/public/icons/sliders-h 1.png";
import badge from "@/public/icons/badge-percent 1.png";
import clipboard from "@/public/icons/clipboard-list 1 (1).png";
import Image from "next/image";
import Signout from "@/public/icons/sign-out 1.png";
import { InputWithButton } from "../shadcn/InputWithButton";

const MobileMenu = () => {
  return (
    <div className="h-full overflow-y-scroll md:overflow-y-hidden md:border-l-2 md:border md:shadow-lg">
      <div className="md:py-10 md:shadow-lg h-full">
        <div className="flex gap-4 md:hidden p-3">
          <Image src={avatar} alt="user image" />
          <p className="self-center">Adedeji</p>
        </div>

        <div className="flex flex-col gap-5">
          <div className="px-5 flex space-x-5 md:space-x-2 font-bold">
            <h3>Switch Organization</h3>
            <Image src={down} alt="" className="self-center" />
          </div>

          <div className="px-5 flex gap-5 font-bold md:my-5">
            <Image src={home} alt="" className="self-center" />
            <h2>Dashboard</h2>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="md:px-5 font-bold text-sm px-3">CUSTOMERS</h4>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={userIcon} alt="user icon" className="self-center" />
              <h6>Users</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={users} alt="users icon" className="self-center" />
              <h6>Guarantors</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={sack} alt="sack icon" className="self-center" />
              <h6>Loans</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={handShake}
                alt="handshake icon"
                className="self-center"
              />
              <h6>Decision Models</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={piggy}
                alt="piggy bank icon"
                className="self-center"
              />
              <h6>Savings</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={loan} alt="loan icon" className="self-center" />
              <h6>Loan Requests</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={userCheck}
                alt="user checked icon"
                className="self-center"
              />
              <h6>White List</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={userTimes}
                alt="user times icon"
                className="self-center"
              />
              <h6>Karma</h6>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="md:px-5 font-bold text-sm px-3">BUSINESS</h4>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={briefcase}
                alt="suitcase icon"
                className="self-center"
              />
              <h6>Organization</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={loan} alt="loan icon" className="self-center" />
              <h6>Loan Products</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={bank} alt="bank icon" className="self-center" />
              <h6>Savings Products</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={savings} alt="" className="self-center" />
              <h6>Fees and Charges</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={phone} alt="phone icon" className="self-center" />
              <h6>Transcations</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={spinner} alt="spinner icon" className="self-center" />
              Services
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={userCog} alt="" className="self-center" />
              <h6>Service Account</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={settlement}
                alt="settlement icon"
                className="self-center"
              />
              <h6>Settlements</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={report} alt="" className="self-center" />
              <h6>Reports</h6>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="md:px-5 font-bold text-sm px-3">SETTINGS</h4>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={sliders} alt="sliders icon" className="self-center" />
              <h6>Preferences</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image src={badge} alt="badge icon" className="self-center" />
              <h6>Fees and Pricing</h6>
            </div>
            <div className="flex gap-3 hover:border-l-[#39CDCC] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
              <Image
                src={clipboard}
                alt="clipboard icon"
                className="self-center"
              />
              <h6>Audit logs</h6>
            </div>
          </div>

          <hr />

          <div className="flex gap-3 hover:border-l-[#f17929] border-l-2 md:border-l-4 cursor-pointer border-white pl-2">
            <Image src={Signout} alt="sign out icon" className="self-center" />
            <h6>Sign Out</h6>
          </div>

          
          <h6 className="px-2">Version 1.2.4</h6>
          
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
