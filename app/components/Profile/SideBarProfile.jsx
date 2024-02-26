import Image from "next/image";
import React from "react";
import avatarDefault from "../../../public/assets/avatar.png";
import { SiCoursera } from "react-icons/si";
import { AiOutlineLogout, AiOutlineSecurityScan } from "react-icons/ai";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import Link from "next/link";

const SideBarProfile = ({
  user,
  active,
  avatar,
  setActive,
  logOutHandler,
}) => {
  return (
    <div className="w-full">
      <div
        className={`w-full flex items-center px-3 py-4 cursor-pointer ${
          active === 1 ? "bg-slate-800" : "bg-transparent"
        }`}
        onClick={() => setActive(1)}
      >
        <Image
          src={user.avatar || avatar ? user.avatar?.url || avatar : avatarDefault}
          alt="avatar"
          width={40}
          height={40}
          className="w-[20px] h-[20px] 800px:w-[30px] 800px:h-[30px] cursor-pointer rounded-full"
        />
        <div className="ml-2 text-black font-bold hidden 800px:block ">{user.name}</div>

      </div>
      <div className={`w-full flex items-center px-3 py-3 cursor-pointer ${active=== 2 ?"dark:bg-slate-800 bg-[#c8e5ff]" : "bg-transparent"}`} onClick={()=> setActive(2)}>
        <AiOutlineSecurityScan size={20} fill="#000"/>
        <h5 className="pl-2 800px:block hidden fornt-Poppins dark:text-white text-black">Change Password</h5>
      </div>
      
      {
        user.role === "admin" ? (
          <Link className={`w-full flex items-center px-3 py-3 cursor-pointer ${active=== 3 ?"dark:bg-slate-800 bg-[#c8e5ff]" : "bg-transparent"}`} href={"/admin"}>
            <MdOutlineAdminPanelSettings size={20} fill="#000"/>
            <h5 className="pl-2 800px:block hidden fornt-Poppins dark:text-white text-black">Admin Dashboard</h5>
          </Link>
        ):(
          <div className={`w-full flex items-center px-3 py-3 cursor-pointer ${active=== 3 ?"dark:bg-slate-800 bg-[#c8e5ff]" : "bg-transparent"}`} onClick={()=> setActive(3)}>
        <SiCoursera size={20} fill="#000"/>
        <h5 className="pl-2 800px:block hidden fornt-Poppins dark:text-white text-black">Enrolled Courses</h5>
      </div>
        )
      }
      <div className={`w-full flex items-center px-3 py-3 cursor-pointer ${active=== 4 ?"dark:bg-slate-800 bg-[#c8e5ff]" : "bg-transparent"}`} onClick={()=> logOutHandler() && setActive(4)}>
        <AiOutlineLogout size={20} fill="#000"/>
        <h5 className="pl-2 800px:block hidden fornt-Poppins dark:text-white text-black">Log Out</h5>
      </div>

    

    </div>
  );
};

export default SideBarProfile;
