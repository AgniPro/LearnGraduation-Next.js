import Footer from "@/components/LayoutComponents/Footer";
import Menu from "@/components/LayoutComponents/Menu";
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu";
import Notification from "@/components/LayoutComponents/Notification";
import Sidebar from "@/components/LayoutComponents/Sidebar";
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
              {/*[ Main content ]*/}
              <main className="blogItm mainbar">
              Loading...
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