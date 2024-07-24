import React from "react";
import LattestPost from "@/components/Home/LattestPost";
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu";
import Footer from "@/components/LayoutComponents/Footer";
import { api } from "../Contexts";

async function getPostData() {
  const res = await fetch(api+"/api/get-posts?skip=0")
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
  return res.json()
}

const Page = async () => {
  const postData= await getPostData();
  const [pinnedPost, ...latestPosts] = postData;
  return (
    <div className="blogCont oneGrd onIndx onHm">
      <div className="secIn">
        <div className="blogM">
          {/*[ Main content ]*/}
          <main className="blogItm mainbar">
            <div className="section" id="main-widget">
              <div className="widget HTML" data-version={2} id="HTML93">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
              <LattestPost postData={postData} />
            </div>
            {/* post add */}
            <div className="section" id="add-widget">
              <div className="widget HTML" data-version={2} id="HTML94">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Mobilemenu />
        <Footer />
      </div>
    </div>
  );
}


export default Page;

export function generateMetadata() {
  return {
    title: {
      default: "My Likes || LearnGradution",
    },
    description: "description",
    keywords: "keywords",
    charSet: "UTF-8",
    msapplicationNavbuttonColor: "#ff0040",
    appleMobileWebAppStatusBarStyle: "#ff0040",
    appleMobileWebAppCapable: "true"
  };
}