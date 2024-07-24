import React from "react";
import LattestPost from "@/components/Home/LattestPost";
import Sidebar from "@/components/LayoutComponents/Sidebar";
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu";
import Footer from "@/components/LayoutComponents/Footer";
import { PinndeLoading } from "@/components/LayoutComponents/CardLodaing";
import Slider from "@/components/LayoutComponents/Slider";
import Notification from "@/components/LayoutComponents/Notification";
import Link from "next/link";
import { api, date } from "./Contexts";
import Menu from "@/components/Menu";

async function getPostData() {
  const res = await fetch(api + '/api/get-posts?skip=0')
  if (res.status !== 200) {
    return [];
  }
  return res.json()
}

const Page = async () => {
  const postData = await getPostData();
  const [pinnedPost, ...latestPosts] = postData;
  const { pubinfo, month, year } = date(pinnedPost?.createdAt, pinnedPost?.updatedAt);
  return (<>
    <Menu />
    <div className="blogCont oneGrd onIndx onHm">
      <div className="secIn">
        <Notification />
        <div className="blogAd">
          <div className="section" id="horizontal-ad">
            <div className="widget HTML" data-version={2} id="HTML91">
              <Link href={"https://github.com/agnipro"} title="Hire Me">

                <div className="adB" data-text="This MERN application is developed by AgniPro"></div>
              </Link>
            </div>
          </div>
        </div>
        <div className="blogM">
          {/*[ Main content ]*/}
          <main className="blogItm mainbar">
            <Slider />

            <div className="section" id="top-widget">
              <div className="widget HTML" data-version={2} id="HTML92">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
              <div
                className="widget FeaturedPost"
                data-version={2}
                id="FeaturedPost1"
              >
                <h2 className="title">Pinned Post</h2>
                <div className="itemFt" role="feed">
                  {pinnedPost ?
                    <article key={pinnedPost._id} className="itm">
                      <div className="iThmb pThmb">
                        <Link
                          className="thmb"
                          href={"/p/" + pinnedPost.url}
                        >
                          <img
                            alt={pinnedPost.title}
                            className="imgThm lazy loaded"
                            data-src={pinnedPost.image}
                            src={pinnedPost.image}
                            lazied="true"
                          />
                        </Link>
                      </div>
                      <div className="iCtnt">
                        <div className="pHdr">
                          <div className="pLbls" data-text="in">
                            <a
                              aria-label="Bsc"
                              data-text="Bsc"
                              href="/search/label/Bsc"
                              rel="tag"
                            ></a>
                            <a
                              aria-label="Mathematics"
                              data-text="Mathematics"
                              href="/search/label/Mathematics"
                              rel="tag"
                            ></a>
                          </div>
                        </div>
                        <h3 className="pTtl aTtl">
                          <Link href={"/p/" + pinnedPost.url}>
                            {pinnedPost.title}
                          </Link>
                        </h3>
                        <div className="pSnpt">
                          {pinnedPost.description}
                        </div>
                        <div className="pInf">
                          <time className="aTtmp pTtmp pbl" data-text={`${month}, ${year}`} dateTime={pinnedPost.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                          <Link
                            aria-label="Read more"
                            className="pJmp"
                            data-text="Keep reading"
                            href={"/p/" + pinnedPost.url}
                          />
                        </div>
                      </div>
                    </article>
                    : <PinndeLoading />
                  }
                </div>
              </div>
            </div>
            <div className="section" id="main-widget">
              <div className="widget HTML" data-version={2} id="HTML93">
                <div className="widget-content">
                  <div className="adB" data-text="Ads go here" />
                </div>
              </div>
              <LattestPost postData={latestPosts} />
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
          <Sidebar />
        </div>
        <Mobilemenu />
        <Footer />
      </div>
    </div>
  </>
  );
}


export default Page;