"use client";
import React from "react";
import Heading from "../utils/Heading";
import AdminSidebar from "../components/Admin/sidebar/AdminSidebar";
import AdminProtected from "../components/hooks/adminProtected";


const Page= () => {
  return (
    <>
      <AdminProtected>
        <Heading
          title="Elearning- Adimn"
          description="this is admin pannnel disc"
          keywords="peroc,fdsdf,sdfsdf,sdfdsf"
        />
        <AdminSidebar />
        <div className="w-[70vw] right-[12px] absolute ">
          <div className="flex justify-between">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="flex">
              <input
                type="text"
                placeholder="Search"
                className="border-2 border-gray-200 p-2 rounded-md"
              />
              <button className="bg-blue-500 text-white p-2 rounded-md ml-2">
                Search
              </button>
            </div>
          </div>
          <div className="mt-4">
            <div className="flex justify-between">
              <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Total Users</h1>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Total Courses</h1>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Total Students</h1>
                <p className="text-4xl font-bold">100</p>
              </div>
              <div className="w-1/4 bg-white p-4 rounded-md shadow-md">
                <h1 className="text-2xl font-bold">Total Teachers</h1>
                <p className="text-4xl font-bold">100</p>
              </div>
            </div>
          </div>
        </div>
      </AdminProtected>
    </>
  );
};
export default Page;
