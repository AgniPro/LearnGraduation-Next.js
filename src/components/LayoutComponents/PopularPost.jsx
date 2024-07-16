import React from "react";
import Link from "next/link";
import { api, date } from "@/app/Contexts";

async function getPopularPost(skip) {
  const res = await fetch(api+"popular-posts")
  return res.json()
}

const PopularPost = async (props) => {

  const popularPost = await getPopularPost();
  const [firstPost, ...restpost] = popularPost;
  const { pubinfo, month, year } = date(firstPost?.createdAt, firstPost?.updatedAt);

  return (
          <div className="widget PopularPosts" data-version={2} id="PopularPosts00">
            <h2 className="title">Popular Posts</h2>
            <div className="itemPp" role="feed">
              {firstPost ? <>
                <article className="itm mostP">
                  <div className="iThmb pThmb">
                    <Link className="thmb" href={"/p/" + firstPost.url}>
                      <img alt={firstPost.title} className="imgThm lazy loaded" data-src={firstPost.image} lazied="true" />

                    </Link>
                  </div>
                  <div className="iInf pSml">
                    <time className="aTtmp iTtmp pbl" data-text={month} dateTime={firstPost.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                    {firstPost.categories[0, 1] ?
                      <div className="pLbls" data-text="in">
                        <Link aria-label={firstPost.categories[0]} data-text={firstPost.categories[0]} href={"/search/" + firstPost.categories[0]} rel="tag">
                        </Link>
                        <Link aria-label={firstPost.categories[1]} data-text={firstPost.categories[1]} href={"/search/" + firstPost.categories[1]} rel="tag">
                        </Link>
                      </div>
                      : <></>}
                  </div>
                  <div className="iCtnt">
                    <div className="iInr">
                      <h3 className="iTtl aTtl"><Link href={"/p/" + firstPost.url}>{firstPost.title} </Link></h3>
                      <div className="pSnpt">
                        {firstPost.description}
                      </div>
                    </div>
                  </div>
                </article>
              </> : <></>}

              {restpost?.map((item) => {
                const { pubinfo, month, year } = date(item.createdAt, item.updatedAt);
                return (
                  <article className="itm" key={item._id}>
                    <div className="iCtnt">
                      <div className="iInr">
                        <h3 className="iTtl aTtl"><Link href={"/p/" + item.url} >{item.title}</Link></h3>
                      </div>
                    </div>
                    <div className="iInf pSml">
                      <time className="aTtmp iTtmp pbl" data-text={month} dateTime={item.updatedAt} title={`${pubinfo} ${month}, ${year}`} />
                      {item.categories[0, 1] ?
                        <div className="pLbls" data-text="in">
                          <Link aria-label={item.categories[0]} data-text={item.categories[0]} href={"/search/" + item.categories[0]} rel="tag">
                          </Link>
                          <Link aria-label={item.categories[1]} data-text={item.categories[1]} href={"/search/" + item.categories[1]} rel="tag">
                          </Link>
                        </div>
                        : <></>}
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
  )
}
export default PopularPost;