import { styles } from "@/app/styles/style";
import { useActivationMutation } from "@/redux/features/auth/authApi";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { useSelector } from "react-redux";



const Verification = ({ setRoute }) => {
  const { token } = useSelector((state) => state.auth);
  const [activation, { isSuccess, error }] = useActivationMutation();
  const [invalidError, setInvalidError] = useState(false);
  useEffect(() => {
    if (isSuccess) {
      toast.success("Account activated successfully");
      setRoute("Login");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error;
        toast.error(errorData.data.message);
        setInvalidError(true);
      } else {
        toast.error("Something went wrong");
      }
    }
  }, [isSuccess, error, setRoute]);

  const inputRef = [
    useRef(null),
    useRef(null),
    useRef(null),
    useRef(null),
  ];
  const [verifyNumber, setVerifyNumber] = useState({
    "0": "",
    "1": "",
    "2": "",
    "3": "",
  });
  const VerificationHandler = async () => {
    const verificationNumber = Object.values(verifyNumber).join("");
    if (verificationNumber.length !== 4) {
      setInvalidError(true);
      return;
    }
    await activation({
      activation_token: token,
      activation_code: verificationNumber,
    });
  };
  const handleInputChange = (index, value) => {
    setInvalidError(false);
    const newVerifyNumber = { ...verifyNumber, [index]: value };
    setVerifyNumber(newVerifyNumber);
    if (value === "" && index > 0) {
      inputRef[index - 1].current?.focus();
    } else if (value.length === 1 && index < 3) {
      inputRef[index + 1].current?.focus();
    }
  };

  return (
    <div>
      <h1 className={`${styles.title}`}>Verify your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className="w-[80px] h-[80px] rounded-full bg-[#497DF2] flex items-center justify-center">
          <VscWorkspaceTrusted size={40} className="justify-center" />
        </div>
      </div>
      <br />
      <br />
      <div className="w-full flex items-center justify-center">
        <p className="text-center text-[#497DF2] text-xl">
          Enter the 4-digit code sent to your email
        </p>
      </div>
      <br />
      <div className=" m-auto flex item-center justify-around">
        {Object.keys(verifyNumber).map((key, index) => (
          <input
            key={key}
            ref={inputRef[index]}
            style={{
              width: "40px",
              height: "40px",
              margin: "2px"
            }}
            maxLength={1}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder=""
            value={verifyNumber[key]}
            type="text"
          />
        ))}
      </div>
      <br />
      <br />
      <div className="w-full flex justify-center">
        <button onClick={VerificationHandler} className={`${styles.button}`}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center text-[14px] font-Poppins font-[500] text-black dark:text-white">
        Go back to {""}
        <span
          onClick={() => setRoute("Login")}
          className="text-[#497DF2] cursor-pointer"
        >
          Sign in
        </span>
      </h5>
    </div>
  );
};
export default Verification;
