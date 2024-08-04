import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";

export const metadata = {
  title: "LearnGraduation",
  description: "LearnGraduation is owned and dev. by AgniPro",
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
  charSet: "UTF-8",
  msapplicationNavbuttonColor: "#ff0040",
  appleMobileWebAppStatusBarStyle: "#ff0040",
  appleMobileWebAppCapable: "true"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`MN-2 mobS hdMn bD`} id="mainCont" >
        <StoreProvider>
          <div>
            <input className="prfI hidden" id="offPrf" type="checkbox" />
            <input className="navI hidden" id="offNav" type="checkbox" />
            <div className="mainWrp">
              <Header/>
              <div className="mainIn">
                {children}
              </div>
            </div>
          </div>
          <Toaster position="top-center" reverseOrder={false} />
        </StoreProvider>
      </body>
    </html>
  );
}
