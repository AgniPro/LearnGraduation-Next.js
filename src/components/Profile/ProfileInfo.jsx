"use client";

import Image from "next/image";
import React, {  useEffect, useState } from "react";
import { AiOutlineCamera } from "react-icons/ai";
import avatarDefault from "../../../public/assets/avatar.png";
import {
  useEditProfileMutation,
  useUpdateAvatarMutation,
} from "@/redux/features/user/userApi";
import toast from "react-hot-toast";
import { useSession } from "next-auth/react";

const ProfileInfo = ({ avatar, user ,setLoadUser }) => {
  const { data: session, status } = useSession();
  const [name, setName] = useState(user.name);
  const [updateAvatar, { isSuccess: success, error: updateError }] =
    useUpdateAvatarMutation();
  const [editProfile, { isSuccess, error }] = useEditProfileMutation();


  const imageHandler = async (e) => {
    const fileReader = new FileReader();
    fileReader.onload = () => {
      if (fileReader.readyState === 2) {
        const avatar = fileReader.result;
        updateAvatar(avatar);
      }
    };
    fileReader.readAsDataURL(e.target.files[0]);
  };

  useEffect(() => {
    if (isSuccess || success) {
      setLoadUser(true);
      toast.success("Profile Picture updated successfully");
    }
    if (error || updateError) {
      console.log(error);
    }
    if (isSuccess) {
      toast.success("Profile updated successfully");
    }
  }, [isSuccess, error, updateError, success]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "") {
      await editProfile({ name: name });
    }
  };
  return (
    <>
      <div className="w-full flex justify-center">
        <div className="relative">
          <Image
            src={
              user.avatar || avatar ? user.avatar?.url || avatar : avatarDefault
            }
            width={120}
            height={120}
            alt="avatar"
            style={{ border: "2px solid #37a39a", borderRadius: "50%"}}
          />
          <input
            type="file"
            name=""
            id="avatar"
            className="hidden"
            onChange={imageHandler}
            accept="image/png, image/jpg,image/jpeg,image/webp"
          />
          <label htmlFor="avatar">
            <div className="w-[30px] h-[30px] bg-900 rounded-full absolute bottom-2 right-2 flex item-center text-black justify-center cursor-pointer">
              <AiOutlineCamera
                size={20}
                className="z-1 bg-[#fff] rounded-full"
              />
            </div>
          </label>
        </div>
      </div>
      <br />
      <br />
      <div className="w-full pl-6 800px:pl-10">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2 text-black ">Name</label>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="text-black w-full border-2 border-gray-300 p-2 rounded-md"
              />
            </div>
            <div className="w-[100%] pt-2">
              <label className="block pb-2 text-black ">Email Address</label>
              <input
                type="text"
                name="email"
                readOnly
                value={user?.email}
                className="text-black w-full border-2 border-gray-300 p-2 rounded-md"
              />
            </div>
            <input
              className={`w-full 800px:w-[240px] h-[40px] border border-[#fffff] text-center text-black rounded-md mt-8 cursor-pointer`}
              required
              type="submit"
              value="Update"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileInfo;
