"use client";
import React, { use, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ProfileInfo from "./ProfileInfo";
import ChangePassword from "./ChangePassword";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";


const Profile = (props) => {
  const [avatar, setAvatar] = useState("");
  const [active, setActive] = useState(1);
  const user = useSelector((state) => state.auth.user);
  const [loadUser, setLoadUser] = useState(false);
  const {} = useLoadUserQuery(undefined, { skip: !loadUser ? true : false });
  useEffect(() => {
    if (user) {
      setAvatar(user.avatar);
      setLoadUser(true)
    }
  }, [user]);

  return (
    <>
    <div>

    </div>
      {active === 1 && (
        <ProfileInfo avatar={avatar} user={user} setLoadUser={setLoadUser}/>
      )}
      {active === 2 && (
        <>
        <div style={{padding: "20px"}}>
        My Courses
        </div>
        </>
      )}
    </>
  );
};

export default Profile;
