'use client'
import CreateCourse from "@/app/components/Admin/Course/CreateCourse";
import AdminSidebar from "@/app/components/Admin/sidebar/AdminSidebar";
import Heading from "@/app/utils/Heading";
import React from "react";


const Page = () => {
  return (
    <div>
      <Heading title="Create Course" description="Create a new course" keywords="course, create" />
      <div>
        <AdminSidebar/>
        <CreateCourse/>
      </div>
    </div>
  );
};

export default Page;
