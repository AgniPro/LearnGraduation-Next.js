"use client";
import "./globals.css";
import { ThemeProvider } from "./utils/Theme-provider";
import { Toaster } from "react-hot-toast";
import { Providers } from "./Provider";
import { SessionProvider } from "next-auth/react";
import { useLoadUserQuery } from "@/redux/features/api/apiSlice";
import Loader from "./components/Loader/Loader";
import Menu from "./components/Menu";
import { useState } from "react";
import Header from "./components/Header";

export default function RootLayout({
  children,
}) {

  const [open, setOpen] = useState(false);
  const [activeItem, setActiveitem] = useState(0);
  const [route, setRoute] = useState("Login");

  return (
    <html lang="en">
      <body
        className={"MN-2 mobS hdMn bD  oneGrd onIndx onHm"} id="mainCont" >
        <Providers>
          <SessionProvider>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
              <div>
                <input className="prfI hidden" id="offPrf" type="checkbox" />
                <input className="navI hidden" id="offNav" type="checkbox" />
                <div className="mainWrp">
                  <Header
                    open={open}
                    setOpen={setOpen}
                    activeItem={activeItem}
                    route={route}
                    setRoute={setRoute}
                  />
                  <div className="mainIn">
                    <Menu />
                    <Custom>{children}</Custom>
                  </div>
                </div>
              </div>
              <Toaster position="top-center" reverseOrder={false} />
            </ThemeProvider>
          </SessionProvider>
        </Providers>
      </body>
    </html>
  );
}

const Custom = ({ children }) => {
  const { isLoading } = useLoadUserQuery({});
  return <>{isLoading ? <Loader /> : <>{children}</>}</>;
};
