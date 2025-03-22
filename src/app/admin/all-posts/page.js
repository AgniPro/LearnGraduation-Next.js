import Link from "next/link";
import RecentPosts from "@/components/Admin/RecentPosts";

const Page = async () => {
   return <>
      <div className="brdCmb" itemScope="itemscope" itemType="https://schema.org/BreadcrumbList">
        <div className="hm" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
          <Link href="/" itemProp="item"><span itemProp="name">Home</span></Link>
          <meta content={1} itemProp="position" />
        </div>
        <div className="hm" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
          <Link href="/admin" itemProp="item"><span itemProp="name">Admin</span></Link>
          <meta content={2} itemProp="position" />
        </div>
        <div className="lb" itemProp="itemListElement" itemScope="itemscope" itemType="https://schema.org/ListItem">
          <Link href="/admin/all-posts" itemProp="item"><span itemProp="name">All Posts</span></Link>
          <meta content={10} itemProp="position" />
        </div>
      </div><br />
     <RecentPosts limit={10}/>
    </>
};
export default Page;

export async function generateMetadata() {
    return {
      title: `All Posts | LearnGraduation`,
      description: `All Posts`,
      keywords: `All Posts`,
    };
  }
