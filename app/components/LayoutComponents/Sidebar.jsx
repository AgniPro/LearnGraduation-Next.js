import React from "react";
import Link from "next/link";
import { date } from "@/app/Contexts";
import Toc from "./Toc";

async function getPopularPost(skip) {
  const res = await fetch(`https://learngraduation.cyclic.app/popularpost`)
  return res.json()
}

const Sidebar = async (props) => {

  const popularPost = await getPopularPost();
  const [firstPost, ...restpost] = popularPost;
  const { pubinfo, month, year } = date(firstPost?.createdAt, firstPost?.updatedAt);

  return (
    <aside className="blogItm sidebar">
      <div className="sideIn">
        <div className="section" id="side-widget">
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
                        {firstPost.discription}
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
          <div className="widget Label" data-version={2} id="Label00">
            <h3 className="title">
              Labels
            </h3>
            <div className="wL pSml bg ls">
              <ul>
                <li>
                  <a aria-label="Under Graduate" className="lbN" href="https://learngraduation.blogspot.com/search/label/Under%20Graduate">
                    <span className="lbT">Under Graduate</span>
                    <span className="lbR">
                      <span className="lbC" data-text={36} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a aria-label="Bsc" className="lbN" href="https://learngraduation.blogspot.com/search/label/Bsc">
                    <span className="lbT">Bsc</span>
                    <span className="lbR">
                      <span className="lbC" data-text={31} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a aria-label="Mathematics" className="lbN" href="https://learngraduation.blogspot.com/search/label/Mathematics">
                    <span className="lbT">Mathematics</span>
                    <span className="lbR">
                      <span className="lbC" data-text={30} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a aria-label="khel-khel_mein_ganit_seekhen" className="lbN" href="https://learngraduation.blogspot.com/search/label/khel-khel_mein_ganit_seekhen">
                    <span className="lbT">khel-khel_mein_ganit_seekhen</span>
                    <span className="lbR">
                      <span className="lbC" data-text={26} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a aria-label="mathematical tips and trick" className="lbN" href="https://learngraduation.blogspot.com/search/label/mathematical%20tips%20and%20trick">
                    <span className="lbT">mathematical tips and trick</span>
                    <span className="lbR">
                      <span className="lbC" data-text={26} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
                <li>
                  <a aria-label="Syllabus" className="lbN" href="https://learngraduation.blogspot.com/search/label/Syllabus">
                    <span className="lbT">Syllabus</span>
                    <span className="lbR">
                      <span className="lbC" data-text={22} />
                      <svg className="line" viewBox="0 0 24 24">
                        <g transform="translate(4.500000, 2.500000)">
                          <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                          </path>
                        </g>
                      </svg>
                    </span>
                  </a>
                </li>
              </ul>
              <div className="lbSh">
                <input className="lbIn hidden" id="lbAl-2" type="checkbox" />
                <ul className="lbAl">
                  <li>
                    <a aria-label="Notes" className="lbN" href="https://learngraduation.blogspot.com/search/label/Notes">
                      <span className="lbT">Notes</span>
                      <span className="lbR">
                        <span className="lbC" data-text={11} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="graduation" className="lbN" href="https://learngraduation.blogspot.com/search/label/graduation">
                      <span className="lbT">graduation</span>
                      <span className="lbR">
                        <span className="lbC" data-text={9} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Physics" className="lbN" href="https://learngraduation.blogspot.com/search/label/Physics">
                      <span className="lbT">Physics</span>
                      <span className="lbR">
                        <span className="lbC" data-text={8} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="English Syllabus" className="lbN" href="https://learngraduation.blogspot.com/search/label/English%20Syllabus">
                      <span className="lbT">English Syllabus</span>
                      <span className="lbR">
                        <span className="lbC" data-text={7} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="e-Book" className="lbN" href="https://learngraduation.blogspot.com/search/label/e-Book">
                      <span className="lbT">e-Book</span>
                      <span className="lbR">
                        <span className="lbC" data-text={7} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="PHYSICS Syllabus" className="lbN" href="https://learngraduation.blogspot.com/search/label/PHYSICS%20Syllabus">
                      <span className="lbT">PHYSICS Syllabus</span>
                      <span className="lbR">
                        <span className="lbC" data-text={6} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="JEE- Main & Advanced" className="lbN" href="https://learngraduation.blogspot.com/search/label/JEE-%20Main%20%26%20Advanced">
                      <span className="lbT">JEE- Main &amp; Advanced</span>
                      <span className="lbR">
                        <span className="lbC" data-text={2} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Nobel" className="lbN" href="https://learngraduation.blogspot.com/search/label/Nobel">
                      <span className="lbT">Nobel</span>
                      <span className="lbR">
                        <span className="lbC" data-text={2} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="BSc previous year question papers" className="lbN" href="https://learngraduation.blogspot.com/search/label/BSc%20previous%20year%20question%20papers">
                      <span className="lbT">BSc previous year question papers</span>
                      <span className="lbR">
                        <span className="lbC" data-text={1} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="Chemistry" className="lbN" href="https://learngraduation.blogspot.com/search/label/Chemistry">
                      <span className="lbT">Chemistry</span>
                      <span className="lbR">
                        <span className="lbC" data-text={1} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a aria-label="VBU" className="lbN" href="https://learngraduation.blogspot.com/search/label/VBU">
                      <span className="lbT">VBU</span>
                      <span className="lbR">
                        <span className="lbC" data-text={1} />
                        <svg className="line" viewBox="0 0 24 24">
                          <g transform="translate(4.500000, 2.500000)">
                            <path d="M7.47024319,0 C1.08324319,0 0.00424318741,0.932 0.00424318741,8.429 C0.00424318741,16.822 -0.152756813,19 1.44324319,19 C3.03824319,19 5.64324319,15.316 7.47024319,15.316 C9.29724319,15.316 11.9022432,19 13.4972432,19 C15.0932432,19 14.9362432,16.822 14.9362432,8.429 C14.9362432,0.932 13.8572432,0 7.47024319,0 Z">
                            </path>
                          </g>
                        </svg>
                      </span>
                    </a>
                  </li>
                </ul>
                <label aria-label="Show labels" className="lbM" data-hide="Show less" data-show="Show more" data-text="(+11)" htmlFor="lbAl-2" role="button" />
              </div>
            </div>
          </div>
          <Toc />
        </div>
        {/*[ Sidebar sticky ]*/}
        <div className="sideSticky section" id="side-sticky">
          <div className="widget HTML" data-version={2} id="HTML95">
            <div className="adB" data-text="Ads go here" />
          </div>
        </div>
      </div>
    </aside>
  )
}
export default Sidebar;