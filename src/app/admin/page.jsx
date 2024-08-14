
import AllUsers from "@/components/Admin/AllUsers";
import RecentPosts from "@/components/Admin/RecentPosts";
import Link from "next/link";

const Page = async () => {

  return (
    <>
      <div className="brdCmb" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
        <div className="hm" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
          <meta content={1} itemProp="position" />
        </div>
        <div className="lb" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
          <Link href="/admin" itemProp="item"><span itemProp="name">Admin Dashboard</span></Link>
          <meta content={2} itemProp="position" />
        </div>
      </div><br />
      <AllUsers />
      <div className="section" id="main-widget">
        <RecentPosts limit={4} />
      </div>
    </>
  );
};
export default Page;

export async function generateMetadata({ params: { post } }) {
  return {
    title: `Admin Dashboard | LearnGraduation`,
    description: `Admin Dashboard`,
    keywords: `Admin Dashboard`,
  };
}