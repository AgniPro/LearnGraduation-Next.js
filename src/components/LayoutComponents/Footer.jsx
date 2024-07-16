'use client';
import Link from "next/link";

function Footer(props) {
    const currentYear = new Date().getFullYear();
  return (
    <>
      <footer>
        <div className="cdtIn section" id="credit-widget">
          <div className="widget HTML" data-version={2} id="HTML88">
            <div className="footCdt">
              <span className="credit">
                © <span id="getYear">{currentYear}</span> ‧{" "}
                <bdi>
                  <Link href={"/"}>
                    Learn Graduation
                  </Link>
                </bdi>
                . All rights reserved.
              </span>
              <span className="creator">
                Diesigned by <Link href="https://agnipro.web.app/">AgniPro</Link>
              </span>
            </div>
          </div>
          <div className="widget TextList" data-version={2} id="TextList88">
            <div
              className="toTop tTop"
              data-text="Top"
              onClick={()=> window.scrollTo(0, 0)}
            >
              <svg className="line" viewBox="0 0 24 24">
                <g transform="translate(12.000000, 12.000000) rotate(-180.000000) translate(-12.000000, -12.000000) translate(5.000000, 8.500000)">
                  <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" />
                </g>
              </svg>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
export default Footer;
