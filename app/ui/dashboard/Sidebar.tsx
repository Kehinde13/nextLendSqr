import avatar from "@/public/avatar.png";
import dropdown from "@/public/icons/Vector (2).png";
import search from "@/public/icons/Search.png";
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

const MobileMenu = () => {
  return (
    <div>
      <div className="menu">
        <div className="flex gap-4">
          <Image src={avatar} alt="user image" />
          <p className="self-center">Adedeji</p>
        </div>

        <form className="my-10">
          <input
            type="text"
            placeholder="Search for user"
            className="bg-white border-gray-300 border input"
          />
          <button className="bg-[#39CDCC] btn border-none rounded-l-none ml-[-15px] mt-[-5px]">
            <Image src={search} alt="Search" />
          </button>
        </form>

        <div className="flex flex-col gap-5">
          <div className="flex space-x-10">
            <Image src={briefcase} alt="" className="self-center"/>
            <h3>Switch Organization</h3>
            <Image src={down} alt="" className="self-center"/>
          </div>

          <h3 className="flex gap-5">
            <Image src={home} alt="" className="self-center"/>
            Dashboard
          </h3>

          <div>
            <h4>CUSTOMERS</h4>
            <p className="flex gap-5">
              <Image src={userIcon} alt="user icon" className=""/>
              Users
            </p>
            <li>
              <Image src={users} alt="" />
              Guarantors
            </li>
            <li>
              <Image src={sack} alt="" />
              Loans
            </li>
            <li>
              <Image src={handShake} alt="" />
              Decision Models
            </li>
            <li>
              <Image src={piggy} alt="" />
              Savings
            </li>
            <li>
              <Image src={loan} alt="" />
              Loan Requests
            </li>
            <li>
              <Image src={userCheck} alt="" />
              White List
            </li>
            <li>
              <Image src={userTimes} alt="" />
              Karma
            </li>
          </div>

          <div>
            <h4>BUSINESS</h4>
            <li>
              <Image src={briefcase} alt="" />
              Organization
            </li>
            <li>
              <Image src={loan} alt="" />
              Loan Products
            </li>
            <li>
              <Image src={bank} alt="" />
              Savings Products
            </li>
            <li>
              <Image src={savings} alt="" />
              Fees and Charges
            </li>
            <li>
              <Image src={phone} alt="" />
              Transcations
            </li>
            <li>
              <Image src={spinner} alt="" />
              Services
            </li>
            <li>
              <Image src={userCog} alt="" />
              Service Account
            </li>
            <li>
              <Image src={settlement} alt="" />
              Settlements
            </li>
            <li>
              <Image src={report} alt="" />
              Reports
            </li>
          </div>

          <div>
            <h4>SETTINGS</h4>
            <li>
              <Image src={sliders} alt="" />
              Preferences
            </li>
            <li>
              <Image src={badge} alt="" />
              Fees and Pricing
            </li>
            <li>
              <Image src={clipboard} alt="" />
              Audit logs
            </li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
