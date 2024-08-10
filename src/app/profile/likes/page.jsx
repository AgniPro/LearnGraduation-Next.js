import React from "react";
import LattestPost from "@/components/Home/LattestPost";
import { api } from "@/app/Contexts";

async function getPostData() {
  const res = await fetch(api+"/api/get-posts?skip=0")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page = async () => {
  const postData= await getPostData();
  return (

    <LattestPost postData={postData} />
           
  );
}


export default Page;

export function generateMetadata() {
  return {
    title:"My Likes | LearnGraduation",
    description: "description",
    keywords: "keywords",
  };
}