"use client";
import React, { useEffect, useState } from "react";
import CustomModal from "../utils/CustomModal";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/SignUp";
import Verification from "../components/Auth/Verification";
import avatarDefault from "../../public/assets/avatar.png";
import Link from "next/link";
import ThemeSwitcher from "../utils/ThemeSwitcher";
import { useGetUserQuery, useLogoutUserMutation } from "@/lib/services/auth";
import Cookies from "js-cookie";

const Header = () => {

    const [authCheckbox, setAuthCheckbox] = useState(false);
    const [open,setOpen] = useState(false);
    const [route,setRoute]=useState("Login");
    const [isAuthenticated, setIsAuth] = useState(null);
    const [user, setUser] = useState({})
    const { data, isSuccess,error } = useGetUserQuery()

    useEffect(() => {
      const authCookie = Cookies.get('is_auth')
    console.log('Auth Cookie:', authCookie);  // Debugging
      setIsAuth(authCookie)
      if (data && isSuccess) {
        setIsAuth(authCookie)
        setUser(data.user);
      }
      if (error) {
        setIsAuth(false);
        Cookies.remove('is_auth')
      }
    }, [data, isSuccess,error])

    const [logoutUser] = useLogoutUserMutation()
    const handleLogout = async () => {
      try {
        const response = await logoutUser()
        if (response.data && response.data.success === true) {
            window.location.reload();
        }
      } catch (error) {
        console.log(error);
      }
    }
    const toggleSignUp = () => {
        setOpen(true);
        setAuthCheckbox(true);
        if (route === "Verification") {
          setRoute("Verification");
        } else {
          setRoute("Sign-Up");
        }
      };
      const handleGoogleLogin = async () => {
        window.open(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`,
          "_self"
        );
      }

    return (
        <header className="header" id="header">
            {/*[ Header content ]*/}
            <div className="headCn">
                <div className="headD headL">
                    <div className="headIc">
                        <label className="tNav tIc bIc" htmlFor="offNav">
                            <svg className="line" viewBox="0 0 24 24">
                                <line x1={3} x2={21} y1={12} y2={12} />
                                <line x1={3} x2={21} y1={5} y2={5} />
                                <line x1={3} x2={21} y1={19} y2={19} />
                            </svg>
                        </label>
                    </div>
                    {/*[ Header widget ]*/}
                    <div className="headN section" id="header-title">
                        <div className="widget Header" data-version={2} id="Header1">
                            <Link href={"/"}>
                                <img
                                    alt="Learn Graduation"
                                    height={71}
                                    src="https://1.bp.blogspot.com/-YurRRss-7Vs/YPF73EG4oqI/AAAAAAAACrQ/Zvp7-CXxPpUNT8dTJ3xnflcEpN1K1TRvACLcBGAsYHQ/w200/learngraduation.png"
                                    width={300}
                                />
                            </Link>
                            <div className="headInnr hidden">
                                <h1 className="headH">
                                    <bdi>
                                        <span className="headTtl"> Learn Graduation </span>
                                    </bdi>
                                </h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="headD headR">
                    <div className="headI">
                        <div className="headS section" id="header-search">
                            <div
                                className="widget BlogSearch"
                                data-version={2}
                                id="BlogSearch1"
                            >
                                <form action="../search" className="srchF" target="_top">
                                    <input
                                        aria-label="Search this blog"
                                        autoComplete="off"
                                        id="searchIn"
                                        minLength={3}
                                        name="q"
                                        placeholder="Enter a search term or a topic"
                                        required="required"
                                    />
                                    <span className="sb">
                                        <svg className="line" viewBox="0 0 24 24">
                                            <g transform="translate(2.000000, 2.000000)">
                                                <circle
                                                    cx="9.76659044"
                                                    cy="9.76659044"
                                                    r="8.9885584"
                                                />
                                                <line
                                                    x1="16.0183067"
                                                    x2="19.5423342"
                                                    y1="16.4851259"
                                                    y2="20.0000001"
                                                />
                                            </g>
                                        </svg>
                                    </span>
                                    <button
                                        aria-label="Clear"
                                        className="sb"
                                        data-text="clear"
                                        type="reset"
                                    />
                                    <span className="fCls" />
                                </form>
                            </div>
                        </div>
                        <div className="headP section" id="header-icon">
                            <div
                                className="widget TextList"
                                data-version={2}
                                id="TextList000"
                            >
                                <ul className="headIc">
                                    <ThemeSwitcher />
                                    <li className="isSrh">
                                        <label
                                            aria-label="Search"
                                            className="tSrch tIc bIc"
                                            htmlFor="searchIn"
                                        >
                                            <svg className="line" viewBox="0 0 24 24">
                                                <g transform="translate(2.000000, 2.000000)">
                                                    <circle
                                                        cx="9.76659044"
                                                        cy="9.76659044"
                                                        r="8.9885584"
                                                    />
                                                    <line
                                                        x1="16.0183067"
                                                        x2="19.5423342"
                                                        y1="16.4851259"
                                                        y2="20.0000001"
                                                    />
                                                </g>
                                            </svg>
                                        </label>
                                    </li>
                                    <li className="isProfile">
                                        <label
                                            aria-label="Profile"
                                            className="tPrfl tIc bIc"
                                            htmlFor="offPrf"
                                        >
                                            <svg className="line" viewBox="0 0 24 24">
                                                <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
                                                <path d="M20.5899 22C20.5899 18.13 16.7399 15 11.9999 15C7.25991 15 3.40991 18.13 3.40991 22" />
                                            </svg>
                                        </label>
                                    </li>
                                </ul>
                            </div>
                            <div className="widget Profile" data-version={2} id="Profile1">
                                <div className="wPrf tm">
                                    <div className="prfS fixLs">
                                        <div className="prfH fixH fixT" data-text="Account">
                                            <label
                                                aria-label="Close"
                                                className="c cl"
                                                htmlFor="offPrf"
                                            />
                                        </div>
                                        <div className="prfC">
                                            <div className="sImg">
                                                <Link title={user.name ? "Proflie" : "Login"} href={user.name ? "/profile" : ""} onClick={() => { isAuthenticated ? "" : (setOpen(true), setRoute("Login"), setAuthCheckbox(true)), document.getElementById('offPrf').checked = false }}>
                                                    <div
                                                        className="im lazy loaded"
                                                        data-style={`background-image: url(${user.avatar ? user.avatar?.url : avatarDefault.src})`}
                                                        lazied="true"
                                                        style={{
                                                            backgroundImage: `url(${user.avatar ? user.avatar?.url : avatarDefault.src})`, borderRadius: "50%"
                                                        }}
                                                    />
                                                </Link>
                                            </div>
                                            {isAuthenticated ? (
                                                <><Link title="profile" href={"/profile"} onClick={() => document.getElementById('offPrf').checked = false}>
                                                    <dl>
                                                        <dt className="sTxt">{user.name}</dt>
                                                    </dl>
                                                </Link>
                                                    <br />
                                                    {user.role === "admin" ? (
                                                        <>
                                                            <dl className="sInf">
                                                                <dt className="sDt">
                                                                    <Link
                                                                        className="l extL"
                                                                        title="Dashboard"
                                                                        href={"/admin"} onClick={() => document.getElementById('offPrf').checked = false}
                                                                    >
                                                                        <bdi>Dashboard</bdi>
                                                                    </Link>
                                                                </dt>
                                                            </dl>
                                                            <dl className="sInf">
                                                                <dt className="sDt">
                                                                    <Link
                                                                        className="l extL"
                                                                        title="Create Post"
                                                                        href={"/admin/create-post"} onClick={() => document.getElementById('offPrf').checked = false}
                                                                    >
                                                                        <bdi>Create Post</bdi>
                                                                    </Link>
                                                                </dt>
                                                            </dl>
                                                        </>
                                                    ) : (
                                                        <>
                                                            <dl className="sInf">
                                                                <dt className="sDt">
                                                                    <Link
                                                                        className="l extL"
                                                                        title="Purchase Courses"
                                                                        href={"/my-courses"} onClick={() => document.getElementById('offPrf').checked = false}
                                                                    >
                                                                        <bdi>Purchase Courses</bdi>
                                                                    </Link>
                                                                </dt>
                                                            </dl>
                                                            <br />
                                                            <dl className="sInf">
                                                                <dt className="sDt">
                                                                    <Link
                                                                        className="l extL"
                                                                        title="My Likes"
                                                                        href={"/likes"} onClick={() => document.getElementById('offPrf').checked = false}
                                                                    >
                                                                        <bdi>My Likes</bdi>
                                                                    </Link>
                                                                </dt>
                                                            </dl>
                                                        </>
                                                    )}
                                                    <br />
                                                    <dl className="sInf">
                                                        <dt className="sDt">
                                                            <Link href={""}
                                                                className="l extL"
                                                                title="Logout" onClick={() => {
                                                                    handleLogout();
                                                                    document.getElementById('offPrf').checked = false;
                                                                }}
                                                            >
                                                                <bdi>Logout</bdi>
                                                            </Link>
                                                        </dt>
                                                    </dl>
                                                    <br />
                                                </>
                                            ) : (
                                                <>
                                                    <dl className="sInf">
                                                        <dt className="sDt">
                                                            <Link
                                                                className="l extL"
                                                                title="Login"
                                                                href={""} onClick={() => { setOpen(true); setRoute("Login"); setAuthCheckbox(true); document.getElementById('offPrf').checked = false }}
                                                            >
                                                                Login
                                                            </Link>
                                                        </dt>
                                                    </dl>
                                                    <br />
                                                    <dl className="sInf">
                                                        <dt className="sDt">
                                                            <Link href={""}
                                                                className="l extL"
                                                                title="Sign in with Google"
                                                                onClick={() => {
                                                                    handleGoogleLogin();
                                                                    document.getElementById('offPrf').checked = false;
                                                                }}
                                                            >
                                                                <bdi>Sign in with Google</bdi>
                                                            </Link>
                                                        </dt>
                                                    </dl>
                                                    <br />
                                                    <dl className="sInf">
                                                        <dt className="sTxt">No account ?</dt>
                                                        <dt className="sDt">
                                                            <Link
                                                                className="l extL"
                                                                title="Sign Up"
                                                                href={""} onClick={() => { toggleSignUp(); document.getElementById('offPrf').checked = false }}
                                                            >
                                                                <bdi>Create one | Sign Up</bdi>
                                                            </Link>
                                                        </dt>
                                                    </dl>
                                                    <br />
                                                </>
                                            )}
                                        </div>
                                    </div>
                                </div>
                                <label className="fCls" htmlFor="offPrf" />
                                <input
                                    className="shIn fixi hidden"
                                    id="forAuth"
                                    type="checkbox"
                                    onChange={() => setAuthCheckbox(!authCheckbox)}
                                    checked={authCheckbox}
                                />
                                {route === "Sign-Up" && (
                                    <>
                                        {open && (
                                            <CustomModal
                                                setRoute={setRoute}
                                                route={route}
                                                component={SignUp}
                                                setOpen={setOpen}
                                            />
                                        )}
                                    </>
                                )}
                                {route === "Login" && (
                                    <>
                                        {open && (
                                            <CustomModal
                                                open={open}
                                                setOpen={setOpen}
                                                setRoute={setRoute}
                                                route={route}
                                                component={Login}
                                            />
                                        )}
                                    </>
                                )}
                                {route === "Verification" && (
                                    <>
                                        {open && (
                                            <CustomModal
                                                setRoute={setRoute}
                                                route={route}
                                                setOpen={setOpen}
                                                component={Verification}
                                            />
                                        )}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    );
};
export default Header;
