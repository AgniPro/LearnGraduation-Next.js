'use client'
import React, { useEffect, useState } from "react";
import avatarDefault from "../../../public/assets/avatar.png";
import Link from "next/link";
import Cookies from "js-cookie";
import { useGetUserQuery, useLogoutUserMutation } from "@/lib/services/auth";
import ResetPasswordLink from "../Auth/ResetPasswordLink";
import Verification from "../Auth/Verification";
import Login from "../Auth/Login";
import SignUp from "../Auth/SignUp";
import CustomModal from "@/utils/CustomModal";
import ResetPassword from "../Auth/ResetPassword";
import { useSearchParams } from 'next/navigation'

const HeaderProfile=()=>{
    const searchParams = useSearchParams();
    const [authCheckbox, setAuthCheckbox] = useState(false);
    const [open, setOpen] = useState(false);
    const [route, setRoute] = useState(null);
    const [isAuthenticated, setIsAuth] = useState(null);
    const [user, setUser] = useState({});
    const { data, isSuccess, error } = useGetUserQuery();
    const i = searchParams.get('i');
    const t = searchParams.get('t');
    useEffect(() => {
        if (i!== null && t!== null ) {
            setAuthCheckbox(true);
            setRoute("Reset Password");
            setOpen(true);
        }
    }, [i, t]);

    useEffect(() => {
        if (data && isSuccess) {
            setUser(data.user);
            setIsAuth(true);
            if (data.user.role==="admin") {
                Cookies.set('is_auth', '1415914');
                Cookies.set('uid', data.user._id);
            } else {
                Cookies.set('is_auth', '2119518');
                Cookies.set('uid', data.user._id);
            }
        }
        if (error) {
            setIsAuth(false);
            Cookies.remove('is_auth');
            Cookies.remove('uid');
        }
    }, [data, isSuccess, error])

    const [logoutUser] = useLogoutUserMutation()
    const handleLogout = async () => {
        try {
            const response = await logoutUser()
            if (response.data && response.data.success === true) {
                // Clear all cookies
                const allCookies = Cookies.get();
                for (let cookie in allCookies) {
                    Cookies.remove(cookie);
                }
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

    return(
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
            title="forAuth"
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
        {route === "Reset Password Link" && (
            <>
                {open && (
                    <CustomModal
                        setRoute={setRoute}
                        route={route}
                        setOpen={setOpen}
                        component={ResetPasswordLink}
                    />
                )}
            </>
        )}
        {route === "Reset Password" && (
            <>
                {open && (
                    <CustomModal
                        setRoute={setRoute}
                        route={route}
                        setOpen={setOpen}
                        component={ResetPassword}
                    />
                )}
            </>
        )}
    </div>
    )
}
export default HeaderProfile;