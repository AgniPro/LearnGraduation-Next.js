import { api } from "@/app/Contexts";
import LattestPost from "@/components/Home/LattestPost";
import Link from "next/link";
async function getPostData() {
    const res = await fetch(api+ "/api/get-posts?skip=0", {
        method: 'GET',
        next: { revalidate: 0 },
        headers: {
            'Content-Type': 'application/json',
            'cache-control': 'no-cache',
        },
    });
    return res.json();
}
const Page = async () => {
    const postData = await getPostData();
  return (
    <>
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
          <meta content={3} itemProp="position" />
        </div>
      </div><br />
      <div className="section" id="main-widget">
      <LattestPost postData={postData} />
      </div>
    </>
  );
};
export default Page;

export async function generateMetadata() {
    return {
      title: `All Posts | LearnGraduation`,
      description: `All Posts`,
      keywords: `All Posts`,
    };
  }