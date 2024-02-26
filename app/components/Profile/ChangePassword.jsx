import React, {  useEffect, useState } from "react";
import { styles } from "@/app/styles/style";
import { useUpdatePasswordMutation } from "@/redux/features/user/userApi";
import toast from "react-hot-toast";

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [updatePassword, { isSuccess, error }] = useUpdatePasswordMutation();

  const passwordChangeHandler = async (e) => {
    e.preventDefault();
    if (
      newPassword === confirmPassword &&
      newPassword !== "" &&
      confirmPassword !== "" &&
      oldPassword !== ""
    ) {
      await updatePassword({ oldPassword, newPassword });
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
    <div className="w-full pl-7 px-2 800px:px-5 800px:pl-0">
      <h1 className="block 800px:text-[30px] text-[25px] font-Poppins text-center text-black">
        Change Password
      </h1>
      <div className="w-full">
        <form
          area-required
          onSubmit={passwordChangeHandler}
          className="flex flex-col item-center"
        >
          <div className="w-[100px] 800px:w-[60%] mt-5">
            <label className="block pb-2 text-black ">
              Enter your Old Password
            </label>
            <input
              type="password"
              name="oldPassword"
              required
              onChange={(e) => setOldPassword(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
            />
          </div>
          <div className="w-[100px] 800px:w-[60%] mt-2">
            <label className="block pb-2 text-black ">
              Enter your NEW Password
            </label>
            <input
              type="password"
              name="oldPassword"
              required
              onChange={(e) => setNewPassword(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
            />
          </div>
          <div className="w-[100px] 800px:w-[60%] mt-5">
            <label className="block pb-2 text-black ">
              Confirm our new password
            </label>
            <input
              type="password"
              name="oldPassword"
              required
              onChange={(e) => setConfirmPassword(e.target.value)}
              className={`${styles.input} !w-[95%] mb-4 800px:mb-0`}
            />
          </div>

          <input
            className={`${styles.button} w-[60%] 800px:w-[30%] h-[40px] mt-8 cursor-pointer`}
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
