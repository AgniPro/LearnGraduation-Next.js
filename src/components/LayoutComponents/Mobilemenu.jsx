import React from "react";
import ThemeSwitcher from "@/utils/ThemeSwitcher";
import Link from "next/link";

function Mobilemenu() {

  return (
    <div className="mobMn section" id="mobile-menu">
      <div className="widget TextList" data-version={2} id="TextList99">
        <ul>
          <li className="mH nmH">
            <span aria-label="Home" data-text="Home">
            <Link href={"/"} >
              <svg className="line" viewBox="0 0 24 24">
                <g transform="translate(2.400000, 2.000000)">
                  <path d="M1.24344979e-14,11.713 C1.24344979e-14,6.082 0.614,6.475 3.919,3.41 C5.365,2.246 7.615,0 9.558,0 C11.5,0 13.795,2.235 15.254,3.41 C18.559,6.475 19.172,6.082 19.172,11.713 C19.172,20 17.213,20 9.586,20 C1.959,20 1.24344979e-14,20 1.24344979e-14,11.713 Z">
                  </path>
                </g>
              </svg>
              </Link>
            </span>
          </li>
          <li className="mS">
            <label data-text="Search" htmlFor="searchIn">
              <svg className="line" viewBox="0 0 24 24">
                <g transform="translate(2.000000, 2.000000)">
                  <circle cx="9.76659044" cy="9.76659044" r="8.9885584" />
                  <line x1="16.0183067" x2="19.5423342" y1="16.4851259" y2="20.0000001" />
                </g>
              </svg>
            </label>
          </li>
          <li className="mN">
            <label data-text="Menu" htmlFor="offNav">
              <svg className="line" viewBox="0 0 24 24">
                <g transform="translate(3.000000, 3.000000)">
                  <path className="fill" d="M18.00036,3.6738 C18.00036,5.7024 16.35516,7.3476 14.32656,7.3476 C12.29796,7.3476 10.65366,5.7024 10.65366,3.6738 C10.65366,1.6452 12.29796,-6.39488462e-15 14.32656,-6.39488462e-15 C16.35516,-6.39488462e-15 18.00036,1.6452 18.00036,3.6738 Z">
                  </path>
                  <path className="fill" d="M7.3467,3.6738 C7.3467,5.7024 5.7024,7.3476 3.6729,7.3476 C1.6452,7.3476 4.79616347e-15,5.7024 4.79616347e-15,3.6738 C4.79616347e-15,1.6452 1.6452,-6.39488462e-15 3.6729,-6.39488462e-15 C5.7024,-6.39488462e-15 7.3467,1.6452 7.3467,3.6738 Z">
                  </path>
                  <path className="fill" d="M18.00036,14.26194 C18.00036,16.29054 16.35516,17.93484 14.32656,17.93484 C12.29796,17.93484 10.65366,16.29054 10.65366,14.26194 C10.65366,12.23334 12.29796,10.58814 14.32656,10.58814 C16.35516,10.58814 18.00036,12.23334 18.00036,14.26194 Z">
                  </path>
                  <path className="fill" d="M7.3467,14.26194 C7.3467,16.29054 5.7024,17.93484 3.6729,17.93484 C1.6452,17.93484 4.79616347e-15,16.29054 4.79616347e-15,14.26194 C4.79616347e-15,12.23334 1.6452,10.58814 3.6729,10.58814 C5.7024,10.58814 7.3467,12.23334 7.3467,14.26194 Z">
                  </path>
                </g>
              </svg>
            </label>
          </li>
          <ThemeSwitcher />
          {/* <li class="mS">
            <label data-text="Share" for="forShare">
              <svg className="line" viewBox="0 0 24 24"><path d="M92.30583,264.72053a3.42745,3.42745,0,0,1-.37,1.57,3.51,3.51,0,1,1,0-3.13995A3.42751,3.42751,0,0,1,92.30583,264.72053Z" transform="translate(-83.28571 -252.73452)"></path><circle cx="18.48892" cy="5.49436" r="3.51099"></circle><circle cx="18.48892" cy="18.50564" r="3.51099"></circle><line class="cls-3" x1="12.53012" x2="8.65012" y1="8.476" y2="10.416"></line><line class="cls-3" x1="12.53012" x2="8.65012" y1="15.496" y2="13.556"></line></svg>
            </label>
          </li> */}
        </ul>
      </div>
    </div>
  );
}
export default Mobilemenu;