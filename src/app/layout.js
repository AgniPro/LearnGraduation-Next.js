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
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta
          content="width=device-width, initial-scale=1, user-scalable=1, minimum-scale=1, maximum-scale=5"
          name="viewport"
        />
        <meta content="IE=edge" httpEquiv="X-UA-Compatible" />
        <meta content="max-image-preview:large" name="robots" />
        <meta name="google-site-verification" content={process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION} />
        <meta content="website" name="generator" />
        <meta content="#ff0040" name="theme-color" />
        <meta content="#ff0040" name="msapplication-navbutton-color" />
        <meta content="#ff0040" name="apple-mobile-web-app-status-bar-style" />
        <meta content="true" name="apple-mobile-web-app-capable" />
        <link
          href="https://learngraduation.blogspot.com/favicon.ico"
          rel="apple-touch-icon"
          sizes="120x120"
        />
        <link
          href="https://learngraduation.blogspot.com/favicon.ico"
          rel="apple-touch-icon"
          sizes="152x152"
        />
        <link
          href="https://learngraduation.blogspot.com/favicon.ico"
          rel="icon"
          type="image/x-icon"
        />
        <link
          href="https://learngraduation.blogspot.com/favicon.ico"
          rel="shortcut icon"
          type="image/x-icon"
        />
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