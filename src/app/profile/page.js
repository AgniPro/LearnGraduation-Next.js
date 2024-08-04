'use client'
import React, { useEffect, useState } from "react";
import avatarDefault from '../../../public/assets/avatar.png'
import { useEditProfileMutation, useGetUserQuery, useUpdateAvatarMutation } from "@/lib/services/auth";
import toast from "react-hot-toast";

const Page = () => {
  const { data, refetch, isSuccess: psuccess, error: perror } = useGetUserQuery();
  const [name, setName] = useState("");
  const [user, setUser] = useState('');

  useEffect(() => {
    if (data && psuccess) {
      setName(data.user.name);
      setUser(data.user);
    }
    if (perror) {
      redirect('/login');
    }
  }, [data, psuccess, perror]);

  const [updateAvatar, { isSuccess: avatarSuccess, error: updateError }] = useUpdateAvatarMutation();
  const [editProfile, { isSuccess: profileSuccess, error: profileError }] = useEditProfileMutation();

  useEffect(() => {
    if (avatarSuccess) {
      toast.success('Profile Picture updated successfully');
      refetch();
    }
    if (profileSuccess) {
      toast.success('Profile updated successfully');
      refetch();
    }
    if (profileError || updateError) {
      toast.error('Fail to update profile');
    }
  }, [avatarSuccess, profileSuccess, profileError, updateError, refetch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name !== "" && name !== user.name) {
      await editProfile({ name });
    }
  };

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
  return (
    <>
      <div className="justify-center">
        <img
          src={
            user ? user.avatar.url : avatarDefault.src
          }
          width={120}
          height={120}
          alt="avatar"
          style={{ border: "2px solid #37a39a", borderRadius: "50%" }}
        />
        <input
          type="file"
          name=""
          id="avatar"
          className="hidden"
          onChange={imageHandler}
          accept="image/png, image/jpg,image/jpeg,image/webp"
        />
        <label htmlFor="avatar" className="profileInput">
          📷
        </label>
      </div>
      <br />
      <br />
      <div className="widget">
        <form onSubmit={handleSubmit}>
          <div className="800px:w-[50] m-auto block pb-4">
            <div className="w-[100%]">
              <label className="block pb-2 text-black ">Name</label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="form-control "
                placeholder="Enter your name"
                minLength={2}
                maxLength={30}
              />
            </div>
            <br />
            <div className="w-[100%] pt-2">
              <label className="block pb-2 text-black ">Email Address</label>
              <input
                type="text"
                name="email"
                placeholder="Enter your email"
                readOnly
                value={user ? user.email : ""}
                className="text-black w-full border-2 border-gray-300 p-2 rounded-md"
              />
            </div>
            <br></br>
            <input
              className={`w-full 800px:w-[240px] h-[40px] border border-[#fffff] text-center text-black rounded-md mt-8 cursor-pointer`}
              required
              type="submit"
              value="Update"
            />
          </div>
        </form>
        <br />
        <br />
      </div>
    </>
  );
};

export default Page;
