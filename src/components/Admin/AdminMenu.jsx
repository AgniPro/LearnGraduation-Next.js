import Link from "next/link";
function AdminMenu (){
    return(
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
                        >
                          <svg className="line" viewBox="0 0 24 24">
                            <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"></path>
                            <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"></path>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                          </svg>
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
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300"  preserveAspectRatio="xMidYMid meet" aria-hidden="true" focusable="false">
    <g transform="matrix(1,0,0,1,-2,-3.5)" opacity="1">
    <g opacity="1" transform="matrix(1,0,0,1,147.263,153.121)"><path fill="rgb(255,185,2)" fill-opacity="1" d="M0 0 M63.631,-87.125 C63.631,-87.125 87.125,-63.63 87.125,-63.63 C87.125,-63.63 -63.631,87.125 -63.631,87.125 C-63.631,87.125 -87.125,63.631 -87.125,63.631 C-87.125,63.631 63.631,-87.125 63.631,-87.125z"/></g><g opacity="1" transform="matrix(1,0,0,1,156.073,161.931)"><path fill="rgb(253,139,0)" fill-opacity="1" d="M0 0 M72.442,-78.314 C72.442,-78.314 78.314,-72.44 78.314,-72.44 C78.314,-72.44 -72.441,78.314 -72.441,78.314 C-72.441,78.314 -78.314,72.441 -78.314,72.441 C-78.314,72.441 72.442,-78.314 72.442,-78.314z"/></g>
    <g opacity="1" transform="matrix(1,0,0,1,61.225,239.159)"><path fill="rgb(241,241,241)" fill-opacity="1" d="M0 0 M22.407,1.087 C22.407,1.087 -1.087,-22.406 -1.087,-22.406 C-1.087,-22.406 -22.406,11.094 -22.406,11.094 C-22.406,11.094 -11.094,22.406 -11.094,22.406 C-11.094,22.406 22.407,1.087 22.407,1.087z"/></g><g opacity="1" transform="matrix(1,0,0,1,37.126,263.257)"><path fill="rgb(117,117,117)" fill-opacity="1" d="M0 0 M13.005,-1.692 C13.005,-1.692 1.691,-13.005 1.691,-13.005 C1.691,-13.005 -11.415,7.592 -11.415,7.592 C-13.004999999999999,10.091 -10.09,13.004999999999999 -7.592,11.415 C-7.592,11.415 13.005,-1.692 13.005,-1.692z"/></g>
    <g opacity="1" transform="matrix(1,0,0,1,236.346,64.038)"><path fill="rgb(241,241,241)" fill-opacity="1" d="M0 0 M1.958,-25.452 C1.958,-25.452 25.452,-1.957 25.452,-1.957 C25.452,-1.957 -1.958,25.452 -1.958,25.452 C-1.958,25.452 -25.452,1.958 -25.452,1.958 C-25.452,1.958 1.958,-25.452 1.958,-25.452z"/></g>
    <g opacity="1" transform="matrix(1,0,0,1,257.503,42.882)"><path fill="rgb(253,67,66)" fill-opacity="1" d="M0 0 M10.824,-13.431 C10.824,-13.431 13.43,-10.825 13.43,-10.825 C19.198999999999998,-5.055999999999999 19.198999999999998,4.296 13.43,10.064 C13.43,10.064 4.296,19.199 4.296,19.199 C4.296,19.199 -19.198,-4.296 -19.198,-4.296 C-19.198,-4.296 -10.064,-13.431 -10.064,-13.431 C-4.296,-19.198999999999998 5.056,-19.198999999999998 10.824,-13.431z"/></g></g>
</svg>
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
                          <svg className="line" viewBox="0 0 24 24">
                            <g transform="translate(2.500000, 2.500000)">
                              <line
                                x1="6.6787"
                                x2="12.4937"
                                y1="12.0742685"
                                y2="12.0742685"
                              ></line>
                              <path d="M-1.13686838e-13,5.29836453 C-1.13686838e-13,2.85645977 1.25,0.75931691 3.622,0.272650243 C5.993,-0.214968804 7.795,-0.0463973758 9.292,0.761221672 C10.79,1.56884072 10.361,2.76122167 11.9,3.63645977 C13.44,4.51265024 15.917,3.19645977 17.535,4.94217405 C19.229,6.7697931 19.2200005,9.57550739 19.2200005,11.3640788 C19.2200005,18.1602693 15.413,18.6993169 9.61,18.6993169 C3.807,18.6993169 -1.13686838e-13,18.2288407 -1.13686838e-13,11.3640788 L-1.13686838e-13,5.29836453 Z"></path>
                            </g>
                          </svg>
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
                        <svg className="line" viewBox="0 0 24 24">
                            <g transform="translate(2.749500, 2.549500)">
                              <path d="M6.809,18.9067 C3.137,18.9067 9.41469125e-14,18.3517 9.41469125e-14,16.1277 C9.41469125e-14,13.9037 3.117,11.8997 6.809,11.8997 C10.481,11.8997 13.617,13.8847 13.617,16.1077 C13.617,18.3307 10.501,18.9067 6.809,18.9067 Z"></path>
                              <path d="M6.809,8.728 C9.219,8.728 11.173,6.774 11.173,4.364 C11.173,1.954 9.219,-2.48689958e-14 6.809,-2.48689958e-14 C4.399,-2.48689958e-14 2.44496883,1.954 2.44496883,4.364 C2.436,6.766 4.377,8.72 6.778,8.728 L6.809,8.728 Z"></path>
                              <path d="M14.0517,7.5293 C15.4547,7.1543 16.4887007,5.8753 16.4887007,4.3533 C16.4897,2.7653 15.3627,1.4393 13.8647,1.1323"></path>
                              <path d="M14.7113,11.104 C16.6993,11.104 18.3973,12.452 18.3973,13.655 C18.3973,14.364 17.8123,15.092 16.9223,15.301"></path>
                            </g>
                          </svg>
                          <span className="n" itemProp="name">
                            Manage Users
                          </span>
                        </Link>
                      </li>
                      <li>
                        <Link
                          className="a"
                          href="https://learngraduation.blogspot.com/p/about-me.html"
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
                          <svg className="line" viewBox="0 0 24 24">
                            <g transform="translate(2.452080, 2.851980)">
                              <path d="M15.0928322,6.167017 C15.0928322,6.167017 11.8828071,10.0196486 9.53493746,10.0196486 C7.18807029,10.0196486 3.941955,6.167017 3.941955,6.167017"></path>
                              <path d="M1.04805054e-13,9.11679198 C1.04805054e-13,2.27869674 2.38095238,8.8817842e-15 9.52380952,8.8817842e-15 C16.6666667,8.8817842e-15 19.047619,2.27869674 19.047619,9.11679198 C19.047619,15.9538847 16.6666667,18.233584 9.52380952,18.233584 C2.38095238,18.233584 1.04805054e-13,15.9538847 1.04805054e-13,9.11679198 Z"></path>
                            </g>
                          </svg>
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
                          <svg className="line" viewBox="0 0 24 24">
                            <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"></path>
                            <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"></path>
                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                          </svg>
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
                          <svg viewBox="0 0 64 64">
                            <path d="M8,54.7C8,55.4,8.6,56,9.3,56h9.3c0.7,0,1.3-0.6,1.3-1.3V23.9c0-0.7-0.6-1.3-1.3-1.3H9.3 c-0.7,0-1.3,0.6-1.3,1.3V54.7z"></path>
                            <path d="M46.6,22.3c-4.5,0-7.7,1.8-9.4,3.7c-0.4,0.4-1.1,0.1-1.1-0.5l0-1.6c0-0.7-0.6-1.3-1.3-1.3h-9.4 c-0.7,0-1.3,0.6-1.3,1.3c0.1,5.7,0,25.4,0,30.7c0,0.7,0.6,1.3,1.3,1.3h9.5c0.7,0,1.3-0.6,1.3-1.3V37.9c0-1,0-2,0.3-2.7 c0.8-2,2.6-4.1,5.7-4.1c4.1,0,6,3.1,6,7.6v15.9c0,0.7,0.6,1.3,1.3,1.3h9.3c0.7,0,1.3-0.6,1.3-1.3V37.4C60,27.1,54.1,22.3,46.6,22.3 z"></path>
                            <path d="M13.9,18.9L13.9,18.9c3.8,0,6.1-2.4,6.1-5.4C19.9,10.3,17.7,8,14,8c-3.7,0-6,2.3-6,5.4 C8,16.5,10.3,18.9,13.9,18.9z"></path>
                          </svg>
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