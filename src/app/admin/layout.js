import AdminMenu from "@/components/Admin/AdminMenu";

export const metadata = {
  title: "LearnGraduation",
  description: "LearnGraduation is owned and dev. by AgniPro",
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
  charSet: "UTF-8",
  msapplicationNavbuttonColor: "#ff0040",
  appleMobileWebAppStatusBarStyle: "#ff0040",
  appleMobileWebAppCapable: "true"
};

export default function AdminLayout({ children }) {
  return (<>
<AdminMenu />
 {children}
  </>
               
  );
}
