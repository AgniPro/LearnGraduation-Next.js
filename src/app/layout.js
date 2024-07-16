import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import Menu from "@/components/Menu";
import Header from "@/components/Header";
export const metadata = {
  title: "LearnGraduation",
  description: "LearnGraduation is owned and dev. by AgniPro",
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
                <Menu />
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
