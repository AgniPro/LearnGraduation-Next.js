import Footer from "@/components/LayoutComponents/Footer";
import Mobilemenu from "@/components/LayoutComponents/Mobilemenu";
import Notification from "@/components/LayoutComponents/Notification";
import ProfileMenu from "@/components/Profile/ProfileMenu";

export const metadata = {
  title: "Profile | LearnGraduation",
  description: "LearnGraduation is owned and dev. by AgniPro",
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
  charSet: "UTF-8",
  msapplicationNavbuttonColor: "#ff0040",
  appleMobileWebAppStatusBarStyle: "#ff0040",
  appleMobileWebAppCapable: "true"
};

export default function AdminLayout({ children }) {
  return (<>
    <ProfileMenu />
        <div className="blogCont onItm onPg">
            <div className="secIn">
                <Notification />
                <div className="blogM">
                    {/*[ Main content ]*/}
                    <main className="blogItm mainbar">
                        <div className="section" id="main-widget"><div className="widget HTML" data-version={2} id="HTML93">
                            <div className="widget-content">
                                <div className="adB" data-text="Ads go here" />
                            </div>
                        </div>
                            {children}
                        </div>
                    </main>
                </div>
                <Mobilemenu />
                <Footer />
            </div>
        </div>
    </>    
  );
}
