import Link from "next/link";
function AdminMenu() {
  return (
    <div className="blogMn">
      <div className="mnBr">
        <div className="mnBrs">
          <div className="mnH">
            <label
              aria-label="Close"
              className="c"
              data-text="Close"
              htmlFor="offNav"
            />
          </div>
          {/*[ Mobile additional menu(only shown in mobile view) ]*/}
          <div className="mnMob section" id="nav-widget-1">
            <div
              className="widget PageList"
              data-version={2}
              id="PageList002"
            >
              <ul className="mMenu">
                <li>
                  <Link href="https://learngraduation.blogspot.com/p/sitemap.html">
                    Sitemap
                  </Link>
                </li>
                <li>
                  <Link href="https://learngraduation.blogspot.com/p/disclaimer.html">
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link href="https://learngraduation.blogspot.com/p/privacy-policy.html">
                    Privacy
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className="widget LinkList"
              data-version={2}
              id="LinkList002"
            >
              <div className="mNav">
                <label className="tIc bIc" htmlFor="offNav">
                  <svg viewBox="0 0 512 512">
                    <path d="M417.4,224H288V94.6c0-16.9-14.3-30.6-32-30.6c-17.7,0-32,13.7-32,30.6V224H94.6C77.7,224,64,238.3,64,256 c0,17.7,13.7,32,30.6,32H224v129.4c0,16.9,14.3,30.6,32,30.6c17.7,0,32-13.7,32-30.6V288h129.4c16.9,0,30.6-14.3,30.6-32 C448,238.3,434.3,224,417.4,224z"></path>
                  </svg>
                </label>
              </div>
              <ul className="mSoc">
                <li>
                  <span className="a tIc bIc">
                    <svg viewBox="0 0 32 32">
                      <path d="M24,3H8A5,5,0,0,0,3,8V24a5,5,0,0,0,5,5H24a5,5,0,0,0,5-5V8A5,5,0,0,0,24,3Zm3,21a3,3,0,0,1-3,3H17V18h4a1,1,0,0,0,0-2H17V14a2,2,0,0,1,2-2h2a1,1,0,0,0,0-2H19a4,4,0,0,0-4,4v2H12a1,1,0,0,0,0,2h3v9H8a3,3,0,0,1-3-3V8A3,3,0,0,1,8,5H24a3,3,0,0,1,3,3Z"></path>
                    </svg>
                  </span>
                </li>
                <li>
                  <Link
                    aria-label="Instagram"
                    className="a tIc bIc"
                    href="https://www.instagram.com/learngraduation/"
                    rel="noopener"
                    role="button"
                    target="_blank"
                  >
                    <svg viewBox="0 0 32 32">
                      <path d="M22,3H10a7,7,0,0,0-7,7V22a7,7,0,0,0,7,7H22a7,7,0,0,0,7-7V10A7,7,0,0,0,22,3Zm5,19a5,5,0,0,1-5,5H10a5,5,0,0,1-5-5V10a5,5,0,0,1,5-5H22a5,5,0,0,1,5,5Z"></path>
                      <path d="M16,9.5A6.5,6.5,0,1,0,22.5,16,6.51,6.51,0,0,0,16,9.5Zm0,11A4.5,4.5,0,1,1,20.5,16,4.51,4.51,0,0,1,16,20.5Z"></path>
                      <circle cx={23} cy={9} r={1} />
                    </svg>
                  </Link>
                </li>
                <li>
                  <Link
                    aria-label="Twitter"
                    className="a tIc bIc"
                    href="https://twitter.com/hashtag/learngraduation?src=hash"
                    rel="noopener"
                    role="button"
                    target="_blank"
                  >
                    <svg viewBox="0 0 32 32">
                      <path d="M13.35,28A13.66,13.66,0,0,1,2.18,22.16a1,1,0,0,1,.69-1.56l2.84-.39A12,12,0,0,1,5.44,4.35a1,1,0,0,1,1.7.31,9.87,9.87,0,0,0,5.33,5.68,7.39,7.39,0,0,1,7.24-6.15,7.29,7.29,0,0,1,5.88,3H29a1,1,0,0,1,.9.56,1,1,0,0,1-.11,1.06L27,12.27c0,.14,0,.28-.05.41a12.46,12.46,0,0,1,.09,1.43A13.82,13.82,0,0,1,13.35,28ZM4.9,22.34A11.63,11.63,0,0,0,13.35,26,11.82,11.82,0,0,0,25.07,14.11,11.42,11.42,0,0,0,25,12.77a1.11,1.11,0,0,1,0-.26c0-.22.05-.43.06-.65a1,1,0,0,1,.22-.58l1.67-2.11H25.06a1,1,0,0,1-.85-.47,5.3,5.3,0,0,0-4.5-2.51,5.41,5.41,0,0,0-5.36,5.45,1.07,1.07,0,0,1-.4.83,1,1,0,0,1-.87.2A11.83,11.83,0,0,1,6,7,10,10,0,0,0,8.57,20.12a1,1,0,0,1,.37,1.05,1,1,0,0,1-.83.74Z"></path>
                    </svg>
                  </Link>
                </li>
                <li>
                  <span className="a tIc bIc">
                    <svg viewBox="0 0 32 32">
                      <path d="M16,2A13,13,0,0,0,8,25.23V29a1,1,0,0,0,.51.87A1,1,0,0,0,9,30a1,1,0,0,0,.51-.14l3.65-2.19A12.64,12.64,0,0,0,16,28,13,13,0,0,0,16,2Zm0,24a11.13,11.13,0,0,1-2.76-.36,1,1,0,0,0-.76.11L10,27.23v-2.5a1,1,0,0,0-.42-.81A11,11,0,1,1,16,26Z"></path>
                      <path d="M19.86,15.18a1.9,1.9,0,0,0-2.64,0l-.09.09-1.4-1.4.09-.09a1.86,1.86,0,0,0,0-2.64L14.23,9.55a1.9,1.9,0,0,0-2.64,0l-.8.79a3.56,3.56,0,0,0-.5,3.76,10.64,10.64,0,0,0,2.62,4A8.7,8.7,0,0,0,18.56,21a2.92,2.92,0,0,0,2.1-.79l.79-.8a1.86,1.86,0,0,0,0-2.64Zm-.62,3.61c-.57.58-2.78,0-4.92-2.11a8.88,8.88,0,0,1-2.13-3.21c-.26-.79-.25-1.44,0-1.71l.7-.7,1.4,1.4-.7.7a1,1,0,0,0,0,1.41l2.82,2.82a1,1,0,0,0,1.41,0l.7-.7,1.4,1.4Z"></path>
                    </svg>
                  </span>
                </li>
                <li>
                  <span className="a tIc bIc">
                    <svg viewBox="0 0 32 32">
                      <path d="M24,28a1,1,0,0,1-.62-.22l-6.54-5.23a1.83,1.83,0,0,1-.13.16l-4,4a1,1,0,0,1-1.65-.36L8.2,18.72,2.55,15.89a1,1,0,0,1,.09-1.82l26-10a1,1,0,0,1,1,.17,1,1,0,0,1,.33,1l-5,22a1,1,0,0,1-.65.72A1,1,0,0,1,24,28Zm-8.43-9,7.81,6.25L27.61,6.61,5.47,15.12l4,2a1,1,0,0,1,.49.54l2.45,6.54,2.89-2.88-1.9-1.53A1,1,0,0,1,13,19a1,1,0,0,1,.35-.78l7-6a1,1,0,1,1,1.3,1.52Z"></path>
                    </svg>
                  </span>
                </li>
                <li>
                  <Link
                    aria-label="Youtube"
                    className="a tIc bIc"
                    href="https://www.youtube.com/watch?v=BJUp5IrYEgo"
                    rel="noopener"
                    role="button"
                    target="_blank"
                  >
                    <svg viewBox="0 0 32 32">
                      <path d="M29.73,9.9A5,5,0,0,0,25.1,5.36a115.19,115.19,0,0,0-18.2,0A5,5,0,0,0,2.27,9.9a69,69,0,0,0,0,12.2A5,5,0,0,0,6.9,26.64c3,.24,6.06.36,9.1.36s6.08-.12,9.1-.36a5,5,0,0,0,4.63-4.54A69,69,0,0,0,29.73,9.9Zm-2,12A3,3,0,0,1,25,24.65a113.8,113.8,0,0,1-17.9,0,3,3,0,0,1-2.78-2.72,65.26,65.26,0,0,1,0-11.86A3,3,0,0,1,7.05,7.35C10,7.12,13,7,16,7s6,.12,9,.35a3,3,0,0,1,2.78,2.72A65.26,65.26,0,0,1,27.73,21.93Z"></path>
                      <path d="M21.45,15.11l-8-4A1,1,0,0,0,12,12v8a1,1,0,0,0,.47.85A1,1,0,0,0,13,21a1,1,0,0,0,.45-.11l8-4a1,1,0,0,0,0-1.78ZM14,18.38V13.62L18.76,16Z"></path>
                    </svg>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mnMen section" id="nav-widget-2">
            <div className="widget HTML" data-version={2} id="HTML000">
              <ul
                className="mnMn"
                itemScope="itemscope"
                itemType="https://schema.org/SiteNavigationElement"
              >
                <li className="br">
                  <Link
                    className="a"
                    href="/admin"
                    itemProp="url"
                  ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M513.33-580v-260H840v260H513.33ZM120-446.67V-840h326.67v393.33H120ZM513.33-120v-393.33H840V-120H513.33ZM120-120v-260h326.67v260H120Zm66.67-393.33H380v-260H186.67v260ZM580-186.67h193.33v-260H580v260Zm0-460h193.33v-126.66H580v126.66Zm-393.33 460H380v-126.66H186.67v126.66ZM380-513.33Zm200-133.34Zm0 200ZM380-313.33Z"/></svg>
                    <span className="n" itemProp="name">
                      Dashboard
                    </span>
                  </Link>
                </li>
                <li className="drp">
                  <input
                    className="drpI hidden"
                    id="drpDwn-1"
                    name="drpDwn"
                    type="checkbox"
                  />
                  <label className="a" htmlFor="drpDwn-1">
                  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M160-120v-142l556.33-556q11.34-11.33 24-16.67Q753-840 766.67-840q13.33 0 25.83 5.33Q805-829.33 816-818l42 42q11.33 10.33 16.67 22.83 5.33 12.5 5.33 26.5 0 13-5.33 26-5.34 13-16.67 24.34L302-120H160Zm66.67-66.67h48l428.33-428L679-639l-24.33-24-428 428.33v48Zm587.33-539L765.67-774 814-725.67ZM679-639l-24.33-24L703-614.67 679-639ZM560-120q76.67 0 138.33-36.67Q760-193.33 760-260q0-38.67-26-69.67t-78.67-50l-51 51q41 11.34 65 30 24 18.67 24 38.67 0 29-39.16 51.17Q615-186.67 560-186.67q-13.67 0-23.5 9.5t-9.83 23.84q0 13.66 9.83 23.5Q546.33-120 560-120ZM221-418l52-52q-42.67-11.33-64.5-23.83-21.83-12.5-21.83-26.17 0-14.67 20.33-28.33Q227.33-562 291.33-587q84.67-33.33 113.34-62.67 28.66-29.33 28.66-69.66 0-55.67-42-88.17T280-840q-43 0-77.5 15t-52.17 37.33q-9 10.34-8 23.67 1 13.33 12.67 22 11 9 24.67 7.33 13.66-1.66 22.66-10.66 14.67-14.67 33-21.34 18.34-6.66 44.67-6.66 44.33 0 65.5 16t21.17 38q0 18-18.5 31.83-18.5 13.83-83.5 39.5-89.34 34.33-117 62.5Q120-557.33 120-520q0 32 24.33 59.5Q168.67-433 221-418Z"/></svg>
                    <span className="n">Create</span>
                    <svg className="line d" viewBox="0 0 24 24">
                      <g transform="translate(5.000000, 8.500000)">
                        <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" />
                      </g>
                    </svg>
                  </label>
                  <ul>
                    <li itemProp="name">
                      <Link
                        href="/admin/create-post"
                        itemProp="url"
                      >
                        Create Post
                      </Link>
                    </li>
                    <li itemProp="name">
                      <Link
                        href="/admin/create-course"
                        itemProp="url"
                      >
                        Create Course
                      </Link>
                    </li>
                    <li itemProp="name">
                      <Link
                        href=""
                        itemProp="url"
                      >
                        Create Quiz
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="drp br">
                  <input
                    className="drpI hidden"
                    id="drpDwn-2"
                    name="drpDwn"
                    type="checkbox"
                  />
                  <label className="a" htmlFor="drpDwn-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M120-840h326.67v326.67H120V-840Zm66.67 66v178.67V-774Zm326.66-66H840v326.67H513.33V-840Zm82 66v178.67V-774ZM120-446.67h326.67V-120H120v-326.67ZM186.67-366v179.33V-366Zm456.66-80.67H710v130h130V-250H710v130h-66.67v-130h-130v-66.67h130v-130ZM580-773.33V-580h193.33v-193.33H580Zm-393.33 0V-580H380v-193.33H186.67Zm0 393.33v193.33H380V-380H186.67Z"/></svg>
                    <span className="n">Settings</span>
                    <svg className="line d" viewBox="0 0 24 24">
                      <g transform="translate(5.000000, 8.500000)">
                        <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" />
                      </g>
                    </svg>
                  </label>
                  <ul>
                    <li itemProp="name">
                      <Link href="#" itemProp="url">
                        Home Banner
                      </Link>
                    </li>
                    <li itemProp="name">
                      <Link href="#" itemProp="url">
                        Notification
                      </Link>
                    </li>
                    <li itemProp="name">
                      <Link href="#" itemProp="url">
                        Pinned Post
                      </Link>
                    </li>
                    <li itemProp="name">
                      <Link href="#" itemProp="url">
                        Social Links
                      </Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link
                    className="a"
                    href="/mocktest"
                    itemProp="url"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M482.67-484.67q27-32 40.5-68.33t13.5-81q0-44.67-13.5-81t-40.5-68.33q70.66-8.67 122.33 33 51.67 41.66 51.67 116.33T605-517.67q-51.67 41.67-122.33 33ZM700-160v-102.67q0-46-22.67-86.16-22.66-40.17-74-68.5 132.34 20.66 189.17 58.16 56.83 37.5 56.83 96.5V-160H700Zm100-286v-93.33h-93.33V-606H800v-93.33h66.67V-606H960v66.67h-93.33V-446H800Zm-483.33-34.67q-66 0-109.67-43.66Q163.33-568 163.33-634T207-743.67q43.67-43.66 109.67-43.66t109.66 43.66Q470-700 470-634t-43.67 109.67q-43.66 43.66-109.66 43.66ZM0-160v-100q0-34.67 18.17-63.17 18.16-28.5 48.5-42.83 68.66-31.67 127.66-46.17t122.34-14.5q63.33 0 122 14.5Q497.33-397.67 566-366q30.33 14.33 48.83 42.83t18.5 63.17v100H0Zm316.67-387.33q37 0 61.83-24.84Q403.33-597 403.33-634t-24.83-61.83q-24.83-24.84-61.83-24.84t-61.84 24.84Q230-671 230-634t24.83 61.83q24.84 24.84 61.84 24.84Zm-250 320.66h500V-260q0-14.33-7.17-26.67Q552.33-299 538-306q-64-30.33-114.33-42.17-50.34-11.83-107-11.83Q260-360 210-348.17 160-336.33 94.67-306q-13 6.33-20.5 19t-7.5 27v33.33Zm250-407.33Zm0 407.33Z"/></svg>
                    <span className="n" itemProp="name">
                      Manage Users
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="a"
                    href="/admin/all-posts"
                    itemProp="url"
                  >
                    <svg className="line" viewBox="0 0 24 24">
                      <g transform="translate(3.610000, 2.750100)">
                        <line
                          x1="11.9858"
                          x2="4.7658"
                          y1="12.9463"
                          y2="12.9463"
                        />
                        <line
                          x1="11.9858"
                          x2="4.7658"
                          y1="9.1865"
                          y2="9.1865"
                        />
                        <line
                          x1="7.521"
                          x2="4.766"
                          y1="5.4272"
                          y2="5.4272"
                        />
                        <path d="M7.63833441e-14,9.25 C7.63833441e-14,16.187 2.098,18.5 8.391,18.5 C14.685,18.5 16.782,16.187 16.782,9.25 C16.782,2.313 14.685,0 8.391,0 C2.098,0 7.63833441e-14,2.313 7.63833441e-14,9.25 Z"></path>
                      </g>
                    </svg>
                    <span className="n" itemProp="name">
                      All Posts
                    </span>
                  </Link>
                </li>
                <li className="br">
                  <Link
                    className="a"
                    href="https://learngraduation.blogspot.com/p/contact.html"
                    itemProp="url"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"></path></svg>
                    <span className="n" itemProp="name">
                      All courses
                    </span>
                  </Link>
                </li>
                <li className="br">
                  <Link
                    className="a"
                    href="https://learngraduation.blogspot.com/p/become-creator.html"
                    itemProp="url"
                  >
                   <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M282.67-278h66.66v-203.33h-66.66V-278Zm328 0h66.66v-413.33h-66.66V-278Zm-164 0h66.66v-118.67h-66.66V-278Zm0-203.33h66.66V-548h-66.66v66.67ZM186.67-120q-27 0-46.84-19.83Q120-159.67 120-186.67v-586.66q0-27 19.83-46.84Q159.67-840 186.67-840h586.66q27 0 46.84 19.83Q840-800.33 840-773.33v586.66q0 27-19.83 46.84Q800.33-120 773.33-120H186.67Zm0-66.67h586.66v-586.66H186.67v586.66Zm0-586.66v586.66-586.66Z"/></svg>
                    <span className="n" itemProp="name">
                      Analytics
                    </span>
                  </Link>
                </li>
                <li className="br">
                  <Link
                    className="a"
                    href=""
                    itemProp="url"
                  >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-120q-151 0-255.5-46.5T120-280v-400q0-66 105.5-113T480-840q149 0 254.5 47T840-680v400q0 67-104.5 113.5T480-120Zm0-485q87 0 177.33-26.17 90.34-26.16 111.34-57.83-21.67-31-111.84-57.67-90.16-26.66-176.83-26.66-89 0-177.5 25.83T190.67-689q23.33 33.33 111.16 58.67Q389.67-605 480-605Zm-.67 209q42 0 83-4.33 41-4.34 78.5-12.84T712.17-434q33.83-12.33 61.16-27.67V-605q-28 15.33-61.83 27.67-33.83 12.33-71.67 20.83-37.83 8.5-78.16 13.17-40.34 4.66-82.34 4.66T396-543.33q-41.33-4.67-78.83-13.17t-70.84-20.83Q213-589.67 186.67-605v143.33Q213-446.33 246-434q33 12.33 70.5 20.83 37.5 8.5 78.83 12.84 41.34 4.33 84 4.33Zm.67 209.33q47.33 0 97.17-8 49.83-8 91.5-21.16Q710.33-229 739-245.17q28.67-16.16 34.33-33.16v-116Q746-379 712.17-367q-33.84 12-71.34 20.5t-78.16 12.83q-40.67 4.34-83.34 4.34-42.66 0-84-4.34Q354-338 316.5-346.5T246-367q-33-12-59.33-27.33v117q5 16.33 33.16 32.66Q248-228.33 290-215.5q42 12.83 92 20.83 50 8 98 8Z"/></svg>
                    <span className="n" itemProp="name">
                      Redis Catch
                    </span>
                  </Link>
                </li>
                <li className="drp mr br">
                  <input
                    defaultChecked="checked"
                    className="drpI hidden"
                    id="drpMr-2"
                    name="drpDwn"
                    type="checkbox"
                  />
                  <label className="a" htmlFor="drpMr-2">
                    <span className="n">More...</span>
                    <svg className="line d" viewBox="0 0 24 24">
                      <g transform="translate(5.000000, 8.500000)">
                        <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" />
                      </g>
                    </svg>
                  </label>
                  <ul>
                    <li itemProp="name">
                      <Link
                        className="new"
                        href="/search/label/Notes"
                        itemProp="url"
                      >
                        Try Notes{" "}
                      </Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <label className="fCls" htmlFor="offNav" />
    </div>

  );
}
export default AdminMenu;