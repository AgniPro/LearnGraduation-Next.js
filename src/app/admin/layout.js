import AdminMenu from "@/components/Admin/AdminMenu";

export const metadata = {
  title: "Admin Dashboard",
  description: "Learn Graduation is owned and dev. by AgniPro",
  keywords: 'learnGraduation, AgniPro,learn graduation, under graduate , vbu ug , vbu graduation, vbu new syllabus, vbu FYUGP syllabus,VBU previous year question paper, vbu notes',
};

export default function AdminLayout({ children }) {
  return (<>
    <AdminMenu />
    <div className="blogCont onItm onPg">
      <div className="secIn">
          <main className="blogItm">
            {children}
          </main>
      </div>
    </div>
  </>
  );
}
