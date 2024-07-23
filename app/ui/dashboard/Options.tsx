import view from "@/public/icons/np_view_1214519_000000 1.png";
import activate from "@/public/icons/np_user_2995993_000000 1.png";
import blacklist from "@/public/icons/np_delete-friend_3248001_000000 1.png";
import Image from "next/image";

/* type Prop = {
  dropdownVisible: string | boolean | number | undefined;
  setDropdownVisible: (dropdownVisible: string | boolean) => void;
  userId: string | undefined ;
}; */

const Options = () => {


  return (
    <div className="dropdown-content menu w-full">
      <div>
        <div className="viewDetails">
          <Image src={view} alt="" />
          View Details
        </div>
      </div>
      <div>
        <div className="viewDetails">
          <Image src={blacklist} alt="" />
          Blacklist User
        </div>
      </div>
      <div>
        <div className="viewDetails">
          <Image src={activate} alt="" />
          Activate User
        </div>
      </div>
    </div>
  );
};

export default Options;
