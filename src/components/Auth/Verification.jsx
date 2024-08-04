'use client'
import React, { useRef, useState } from "react";
import { useVerifyEmailMutation } from "@/lib/services/auth";
import fromStyles from './authStyle.module.css';
import Cookies from "js-cookie";
import toast from "react-hot-toast";

const Verification = ({ setRoute }) => {
  const [loading, setLoading] = useState(false);
  const [verifyEmail] = useVerifyEmailMutation()
 
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
      return;
    }
    setLoading(true);
    try {
      const email = Cookies.get('email');
      const response = await verifyEmail({ email: email, otp: verificationNumber })
      if (response.data && response.data.success === true) {
        toast.success('Verification Success')
        setLoading(false);
        Cookies.remove('email');
        setRoute("Login");
      }
      if (response.error && response.error.data.success === false) {
        toast.error(response.error.data.message)
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const handleInputChange = (index, value) => {
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
      <h1 className={``}>Verify your Account</h1>
      <br />
      <div className="w-full flex items-center justify-center mt-2">
        <div className={`${fromStyles.flexItemCenter}`}><svg xmlns="http://www.w3.org/2000/svg" style={{height:"42px", width:"42px"}} viewBox="0 0 512 512"><path fill="#3AAF3C" d="M256 0c141.39 0 256 114.61 256 256S397.39 512 256 512 0 397.39 0 256 114.61 0 256 0z"/><path fill="#0DA10D"  d="M391.27 143.23h19.23c-81.87 90.92-145.34 165.89-202.18 275.52-29.59-63.26-55.96-106.93-114.96-147.42l22.03-4.98c44.09 36.07 67.31 76.16 92.93 130.95 52.31-100.9 110.24-172.44 182.95-254.07z"/><path fill="#fff" d="M158.04 235.26c19.67 11.33 32.46 20.75 47.71 37.55 39.53-63.63 82.44-98.89 138.24-148.93l5.45-2.11h61.06c-81.87 90.93-145.34 165.9-202.18 275.53-29.59-63.26-55.96-106.93-114.96-147.43l64.68-14.61z"/></svg>
        </div>
      </div>
      <br />
      <br />
      <div className={`w-full ${fromStyles.flexItemCenter}`}>
        <p className="text-center text-[#497DF2] text-xl">
          Enter the 4-digit code sent to your email
        </p>
      </div>
      <br />
      <div className= {`m-auto ${fromStyles.flexItemCenter} justify-around`}>
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
      <div className={` w-full btn ${fromStyles.flexItemCenter} ${fromStyles.btnBox}`}>
        <button onClick={VerificationHandler} className={fromStyles.btn} disabled={loading}>
          Verify OTP
        </button>
      </div>
      <br />
      <h5 className="text-center text-[14px] font-Poppins font-[500] text-black dark:text-white">
        Go back to {""}
        <span
          onClick={() => setRoute("Login")}
          style={{ cursor: "pointer" ,color: "#497DF2"}}
        >
          Sign in
        </span>
      </h5>
    </div>
  );
};
export default Verification;
