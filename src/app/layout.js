import "./globals.css";
import { Toaster } from "react-hot-toast";
import StoreProvider from "./StoreProvider";
import Header from "@/components/Header";
import Head from "next/head";

export const metadata = {
  title: {
    template: '%s | LearnGraduation',
    default: 'LearnGraduation',
  },
  description: 'LearnGraduation is owned and dev. by AgniPro',
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
  verification: {
    google: `${process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION}`,
  },
  appleMobileWebAppCapable: 'yes',
  mobileWebAppCapable: 'yes',
  appleTouchIcon: '/favicon.ico',
  image: '/favicon.ico',
}
export const viewport = {
  themeColor: '#ff0040',
  mobileWebAppStatusBarStyle: '#ff0040',
  msapplicationNavbuttonColor: '#ff0040',
  appleMobileWebAppStatusBarStyle: '#ff0040',
  colorScheme: 'dark light',
  initialScale: 1,
  minimumScale: 1,
  maximumScale: 1,
  viewportWidth: 'device-width',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
      </Head>
      <body className={`MN-2 mobS hdMn bD`} id="mainCont">
        <StoreProvider>
          <div>
            <input className="prfI hidden" id="offPrf" type="checkbox" />
            <input className="navI hidden" id="offNav" type="checkbox" />
            <div className="mainWrp">
              <Header />
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