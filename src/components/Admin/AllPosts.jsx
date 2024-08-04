import { api } from "@/app/Contexts";
import LattestPost from "../Home/LattestPost";

async function getPostData() {
  const res = await fetch(api + '/api/get-posts?skip=0')
  return res.json()
}

const AllPosts= async () => {
  const postData = await getPostData();
  return (
    <>
      <div className="section" id="main-widget">
        <LattestPost postData={postData} />
      </div>
    </>
  );
};
export default AllPosts;
