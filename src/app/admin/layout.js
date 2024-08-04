import AdminMenu from "@/components/Admin/AdminMenu";

export const metadata = {
  title: "Admin Dashboard | LearnGraduation",
  description: "LearnGraduation is owned and dev. by AgniPro",
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
};

export default function AdminLayout({ children }) {
  return (<>
    <AdminMenu />
    <div className="blogCont onItm onPg">
      <div className="secIn">
        <div className="blogM">
          <main className="blogItm mainbar">

            {children}
          </main>
        </div>
      </div>
    </div>
  </>

  );
}
