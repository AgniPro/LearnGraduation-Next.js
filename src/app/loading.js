import { CardLoading, PinndeLoading } from "@/components/LayoutComponents/CardLodaing";
import Footer from "@/components/LayoutComponents/Footer";
import Menu from "@/components/LayoutComponents/Menu";
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu";
import Notification from "@/components/LayoutComponents/Notification";
import Sidebar from "@/components/LayoutComponents/Sidebar";
import Slider from "@/components/LayoutComponents/Slider";
import Link from "next/link";

const LoadingPage = () => {
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
          <main className="blogItm mainbar">
            <Slider />
            <div className="section" id="top-widget">
              <div
                className="widget FeaturedPost"
                data-version={2}
                id="FeaturedPost1"
              >
                <h2 className="title">Pinned Post</h2>
                <div className="itemFt" role="feed">
                  <PinndeLoading /> </div>
              </div>
            </div>
            <div className="section" id="main-widget">
              <div className="widget Blog" data-version={2} id="Blog1">
                <div className="blogTtl hm">
                  <h3 className="title">Latest Posts</h3>
                </div>
                <CardLoading /></div>
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
};

export default LoadingPage;