'use client';
import { useUpdatePasswordMutation } from "@/lib/services/auth";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

const ChangePassword = () => {
    const [password, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

    const passwordChangeHandler = async (e) => {
        e.preventDefault();
        if (
            newPassword === confirmPassword &&
            newPassword !== "" &&
            confirmPassword !== "" &&
            password !== ""
        ) {
            await updatePassword({ password, newPassword });
        } else {
            toast.error("Passwords do not match");
        }
    };
    useEffect(() => {
        if (isSuccess) {
            toast.success("Password updated successfully");
        }
        if (error) {
            if ("data" in error) {
                const errorData = error;
                toast.error(errorData.data.message);
            }
        }
    }, [isSuccess, error]);

    return (
        <div className="widget">
            <h2 className="">
                Change Password
            </h2>
            <br />
            <br />
            <div>
                <form
                    area-required='true'
                    onSubmit={passwordChangeHandler}
                >

                    <label>
                        Enter your Old Password
                    </label>
                    <input
                        type="password"
                        name="oldPassword"
                        required
                        onChange={(e) => setOldPassword(e.target.value)}
                        className="form-control"
                        minLength={8} maxLength={12}
                    />
                    <br />
                    <label className="">
                        Enter your NEW Password
                    </label>
                    <input
                        type="password"
                        name="oldPassword"
                        required
                        onChange={(e) => setNewPassword(e.target.value)}
                        className="form-control"
                        minLength={8} maxLength={12}
                    />
                    <br />
                    <label className="block pb-2 text-black ">
                        Confirm your new password
                    </label>
                    <input
                        type="password"
                        name="oldPassword"
                        required
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        className="form-control"
                        minLength={8} maxLength={12}
                    />
                    <br />

                    <input
                        className={``}
                        required
                        type="submit"
                        value="Update"
                    />
                </form>
            </div>
        </div>
    );
};
export default ChangePassword;