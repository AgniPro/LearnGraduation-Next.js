import React from "react";
import Toc from "./Toc";
import BookMark from "../Svg/BookMark";
import PopularPost from "./PopularPost";

export default function Sidebar() {
  const labels = [{ title: "Under Graduatie", noP: 36 },
  { title: "B.Sc", noP: 31 },
  { title: "Mathematics", noP: 30 },
  { title: "khel-khel_mein_ganit_seekhen", noP: 26 },
  { title: "mathematical tips and trick", noP: 25 },
  { title: "Syllabus", noP: 15 },
  { title: "Notes", noP: 18 },
  { title: "Graduation", noP: 14 },
  { title: "English Syllabus", noP: 8 },
  { title: "e-Book", noP: 7 },
  { title: "PHYSICS Syllabus", noP: 7 },
  { title: "PHYSICS", noP: 13 },
  { title: "JEE- Main &amp; Advanced", noP: 6 },
  { title: "Nobel", noP: 5 },
  { title: "BSc previous year question papers", noP: 4 },
  { title: "Chemistry", noP: 4 },
  { title: "VBU", noP: 4 },
  ]
  return (
    <aside className="blogItm sidebar">
      <div className="sideIn">
        <div className="section" id="side-widget">
          <PopularPost />
          <div className="widget Label" data-version={2} id="Label00">
            <h3 className="title">
              Labels
            </h3>
            <div className="wL pSml bg ls">
              <ul>
                {labels?.slice(0, 8).map((label) => (
                  <li key={label.title}>
                    <a aria-label={label.title} className="lbN" href={`/search?q=${(label.title)}`}>
                      <span className="lbT">{label.title}</span>
                      <span className="lbR">
                        <span className="lbC" data-text={label.noP} />
                        <BookMark />
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
              <div className="lbSh">
                <input className="lbIn hidden" id="lbAl-2" type="checkbox" />
                <ul className="lbAl">
                  {labels?.slice(8).map((label) => (
                    <li key={label.title}>
                      <a aria-label={label.title} className="lbN" href={`/search?q=${(label.title)}`}>
                        <span className="lbT">{label.title}</span>
                        <span className="lbR">
                          <span className="lbC" data-text={label.noP} />
                          <BookMark />
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <label aria-label="Show labels" className="lbM" data-hide="Show less" data-show="Show more" data-text={`(+${labels.length-8})`} htmlFor="lbAl-2" role="button" />
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
