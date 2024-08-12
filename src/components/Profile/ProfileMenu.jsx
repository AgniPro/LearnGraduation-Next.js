import Link from "next/link";
import ToggleCheckbox from "../LayoutComponents/TogleCheckbox";
function ProfileMenu() {
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
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href="/profile"
                                        itemProp="url"
                                    >
                                        <svg className="line" viewBox="0 0 24 24">
                                            <path d="M12.12 12.78C12.05 12.77 11.96 12.77 11.88 12.78C10.12 12.72 8.71997 11.28 8.71997 9.50998C8.71997 7.69998 10.18 6.22998 12 6.22998C13.81 6.22998 15.28 7.69998 15.28 9.50998C15.27 11.28 13.88 12.72 12.12 12.78Z"></path>
                                            <path d="M18.74 19.3801C16.96 21.0101 14.6 22.0001 12 22.0001C9.40001 22.0001 7.04001 21.0101 5.26001 19.3801C5.36001 18.4401 5.96001 17.5201 7.03001 16.8001C9.77001 14.9801 14.25 14.9801 16.97 16.8001C18.04 17.5201 18.64 18.4401 18.74 19.3801Z"></path>
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                                        </svg>
                                        <span className="n" itemProp="name">
                                            Your Information
                                        </span>
                                    </Link></ToggleCheckbox>
                                </li>
                                <li className="drp br">
                                    <input
                                        className="drpI hidden"
                                        id="drpDwn-1"
                                        name="drpDwn"
                                        type="checkbox"
                                    />
                                    <label className="a" htmlFor="drpDwn-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="m382-80-18.67-126.67q-17-6.33-34.83-16.66-17.83-10.34-32.17-21.67L178-192.33 79.33-365l106.34-78.67q-1.67-8.33-2-18.16-.34-9.84-.34-18.17 0-8.33.34-18.17.33-9.83 2-18.16L79.33-595 178-767.67 296.33-715q14.34-11.33 32.34-21.67 18-10.33 34.66-16L382-880h196l18.67 126.67q17 6.33 35.16 16.33 18.17 10 31.84 22L782-767.67 880.67-595l-106.34 77.33q1.67 9 2 18.84.34 9.83.34 18.83 0 9-.34 18.5Q776-452 774-443l106.33 78-98.66 172.67-118-52.67q-14.34 11.33-32 22-17.67 10.67-35 16.33L578-80H382Zm55.33-66.67h85l14-110q32.34-8 60.84-24.5T649-321l103.67 44.33 39.66-70.66L701-415q4.33-16 6.67-32.17Q710-463.33 710-480q0-16.67-2-32.83-2-16.17-7-32.17l91.33-67.67-39.66-70.66L649-638.67q-22.67-25-50.83-41.83-28.17-16.83-61.84-22.83l-13.66-110h-85l-14 110q-33 7.33-61.5 23.83T311-639l-103.67-44.33-39.66 70.66L259-545.33Q254.67-529 252.33-513 250-497 250-480q0 16.67 2.33 32.67 2.34 16 6.67 32.33l-91.33 67.67 39.66 70.66L311-321.33q23.33 23.66 51.83 40.16 28.5 16.5 60.84 24.5l13.66 110Zm43.34-200q55.33 0 94.33-39T614-480q0-55.33-39-94.33t-94.33-39q-55.67 0-94.5 39-38.84 39-38.84 94.33t38.84 94.33q38.83 39 94.5 39ZM480-480Z"/></svg>
                                        <span className="n">Settings</span>
                                        <svg className="line d" viewBox="0 0 24 24">
                                            <g transform="translate(5.000000, 8.500000)">
                                                <path d="M14,0 C14,0 9.856,7 7,7 C4.145,7 0,0 0,0" />
                                            </g>
                                        </svg>
                                    </label>
                                    <ul>
                                        <li itemProp="name">
                                        <ToggleCheckbox htmlFor="offNav">
                                            <Link
                                                href="/profile/change-password"
                                                itemProp="url"
                                            >
                                                Change Password
                                            </Link></ToggleCheckbox>
                                        </li>
                                        <li itemProp="name">
                                        <ToggleCheckbox htmlFor="offNav">
                                            <Link
                                                href=""
                                                itemProp="url"
                                            >
                                                ....
                                            </Link></ToggleCheckbox>
                                        </li>
                                        <li itemProp="name">
                                        <ToggleCheckbox htmlFor="offNav">
                                            <Link
                                                href=""
                                                itemProp="url"
                                            >
                                                .....
                                            </Link></ToggleCheckbox>
                                        </li>
                                    </ul>
                                </li>
                               
                                <li>
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href="/"
                                        itemProp="url"
                                    ><svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="M480-120 200-272v-240L40-600l440-240 440 240v320h-80v-276l-80 44v240L480-120Zm0-332 274-148-274-148-274 148 274 148Zm0 241 200-108v-151L480-360 280-470v151l200 108Zm0-241Zm0 90Zm0 0Z"/></svg>
                                        <span className="n" itemProp="name">
                                            My Courses
                                        </span>
                                    </Link></ToggleCheckbox>
                                </li>
                                <li>
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href="/profile/likes"
                                        itemProp="url"
                                    >
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M480-388q51-47 82.5-77.5T611-518q17-22 23-38.5t6-35.5q0-36-26-62t-62-26q-21 0-40.5 8.5T480-648q-12-15-31-23.5t-41-8.5q-36 0-62 26t-26 62q0 19 5.5 35t22.5 38q17 22 48 52.5t84 78.5ZM200-120v-656.67q0-27 19.83-46.83 19.84-19.83 46.84-19.83h426.66q27 0 46.84 19.83Q760-803.67 760-776.67V-120L480-240 200-120Zm66.67-101.33L480-312l213.33 90.67v-555.34H266.67v555.34Zm0-555.34h426.66-426.66Z"/></svg>
                                        <span className="n" itemProp="name">
                                            My Likes
                                        </span>
                                    </Link></ToggleCheckbox>
                                </li>
                                <li className="br">
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href="https://learngraduation.blogspot.com/p/contact.html"
                                        itemProp="url"
                                    ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" ><path d="M546.67-426.67q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-293.33q-27.5 0-47.08-19.59-19.59-19.58-19.59-47.08v-373.33q0-27.5 19.59-47.09Q212.5-800 240-800h613.33q27.5 0 47.09 19.58Q920-760.83 920-733.33V-360q0 27.5-19.58 47.08-19.59 19.59-47.09 19.59H240ZM333.33-360H760q0-39 27.17-66.17 27.16-27.16 66.16-27.16V-640q-39 0-66.16-27.17Q760-694.33 760-733.33H333.33q0 39-27.16 66.16Q279-640 240-640v186.67q39 0 66.17 27.16Q333.33-399 333.33-360ZM800-160H106.67q-27.5 0-47.09-19.58Q40-199.17 40-226.67V-680h66.67v453.33H800V-160ZM240-360v-373.33V-360Z"/></svg>
                                        <span className="n" itemProp="name">
                                            Payments
                                        </span>
                                    </Link></ToggleCheckbox>
                                </li>
                                <li className="br">
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href="https://learngraduation.blogspot.com/p/become-creator.html"
                                        itemProp="url"
                                    >
                                       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="M280.67-240q-15 0-27.84-13.17Q240-266.33 240-281.33v-92h506.67V-720H840q15 0 27.5 13.17Q880-693.67 880-678v597.33L720.67-240h-440ZM80-280v-558.67q0-15 12.5-28.16Q105-880 120-880h519.33q15.67 0 28.17 12.83 12.5 12.84 12.5 28.5v357.34q0 15-12.5 28.16Q655-440 639.33-440H240L80-280Zm533.33-226.67v-306.66H146.67v306.66h466.66Zm-466.66 0v-306.66 306.66Z"/></svg>
                                        <span className="n" itemProp="name">
                                         Chat Groups
                                        </span>
                                    </Link></ToggleCheckbox>
                                </li>
                                <li className="br">
                                <ToggleCheckbox htmlFor="offNav">
                                    <Link
                                        className="a"
                                        href=""
                                        itemProp="url"
                                    >
                                       <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 -960 960 960" ><path d="m503.33-80-10-113.33h-30q-142.66 0-243-100.34Q120-394 120-536.67q0-142.66 100.67-243Q321.33-880 464.67-880q71 0 131.83 25.83 60.83 25.84 106.33 72 45.5 46.17 71.34 108.34Q800-611.67 800-538.67q0 69-21.17 136-21.16 67-60 126.67-38.83 59.67-93.66 109.67-54.84 50-121.84 86.33Zm60-120.67q78.34-66 124.17-155.16 45.83-89.17 45.83-182.84 0-119-76.83-196.83-76.83-77.83-191.83-77.83-116.34 0-197.17 80.83-80.83 80.83-80.83 195.83 0 115 80.83 195.84Q348.33-260 463.33-260h100v59.33Zm-99-108.33q16.34 0 27.67-11.33 11.33-11.34 11.33-27.67 0-16.33-11.33-27.67Q480.67-387 464.33-387q-16.33 0-27.66 11.33-11.34 11.34-11.34 27.67 0 16.33 11.34 27.67Q448-309 464.33-309Zm-27.66-133H490q0-26.67 7.67-41.67 7.66-15 36.33-43.66 24-24 35.33-46 11.34-22 11.34-47.34 0-47-31.84-74.83-31.83-27.83-81.5-27.83-42.66 0-74.66 22.83T346-640.67l49.33 20q9-23 26.67-36.83 17.67-13.83 43.33-13.83 29 0 44.84 14.66Q526-642 526-620q0 18.33-10.67 35.83-10.66 17.5-34 41.5-29.66 28.67-37.16 45.84-7.5 17.16-7.5 54.83ZM460-507Z"/></svg>
                                        <span className="n" itemProp="name">
                                            Help Center
                                        </span>
                                    </Link></ToggleCheckbox>
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
                                        <ToggleCheckbox htmlFor="offNav">
                                            <Link
                                                className="new"
                                                href="/"
                                                itemProp="url"
                                            >
                                                Try Notes{" "}
                                            </Link></ToggleCheckbox>
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
export default ProfileMenu;