import LattestPost from "@/components/Home/LattestPost";
import { api } from "../Contexts";

async function getPostData() {
  const res = await fetch(api + '/api/get-posts?skip=0')
  return res.json()
}
const Flower = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" _ngcontent-woo-c43="" width="100%" height="100%" viewBox="0 0 80 80" className="flower ng-star-inserted">
      <path _ngcontent-woo-c43="" d="M77.1461 39.9994C83.6068 52.0411 78.7255 62.9426 66.2666 66.2653C62.9426 78.7255 52.0411 83.6055 39.9994 77.1461C27.9577 83.6068 17.0561 78.7255 13.7334 66.2666C1.27453 62.9426 -3.60675 52.0411 2.85391 39.9994C-3.60675 27.9577 1.27453 17.0561 13.7334 13.7334C17.0561 1.27453 27.9577 -3.60675 39.9994 2.85391C52.0411 -3.60675 62.9426 1.27453 66.2653 13.7334C78.7255 17.0561 83.6055 27.9577 77.1461 39.9994Z" fill="aquamarine" />
    </svg>
  )
}

const Page = async () => {
  const postData = await getPostData();
  return (
    <>
      <div className="section admins">
        <ul className="mSoc">
          <li>
            <Flower />
          </li>
          <li>
            <Flower />
          </li>
          <li>
            <Flower />
          </li>
          <li>
            <Flower />
          </li>
        </ul>
      </div>
      <div className="section" id="main-widget">
        <LattestPost postData={postData} />
      </div>
    </>
  );
};
export default Page;
