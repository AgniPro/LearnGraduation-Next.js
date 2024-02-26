"use client";
import Heading from "@/app/utils/Heading";
import React, { FC, useState } from "react";
import Header from "../components/Header";
import Protected from "../components/hooks/useProtected";
import { useSelector } from "react-redux";
import Profile from "../components/Profile/Profile";


const Page = (props) => {
  const [open, setOpen] = useState(false);
  const [activeItem, setActiveitem] = useState(6);
  const [route, setRoute] = useState("Login");
  const {user} = useSelector((state) => state.auth);
  return (
    <>
      <Protected>
        <Heading
          title={`${user?.name} profile`}
          description="this is discription for now"
          keywords="this,keywords,thiskeyword,agnipro"
        />
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={activeItem}
          route={route}
          setRoute={setRoute}
        />
        <Profile />
      </Protected>
    </>
  );
};

export default Page;
