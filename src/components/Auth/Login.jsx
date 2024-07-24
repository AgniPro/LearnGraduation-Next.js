import React, { useState } from "react";
import formStyles from './authStyle.module.css';
import { useFormik } from "formik";
import { loginSchema } from "@/validation/schemas";
import { useLoginUserMutation } from "@/lib/services/auth";


const initialValues = {
  email: "",
  password: ""
}

const Login = ({ setRoute, setOpen }) => {
  const [serverMsg, setServerMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [loginUser] = useLoginUserMutation()
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: async (values, action) => {
      setLoading(true);
      try {
        const response = await loginUser(values)
        if (response.data && response.data.success === true) {
          action.resetForm()
          setLoading(false);
          setOpen(false);
          window.location.reload();
        }
        if (response.error && response.error.data.success === false) {
          setLoading(false);
          setServerMsg("Invalid Email or Password");
        }
      } catch (error) {
        // console.log(error);
        setLoading(false);
      }
    }
  })

  return (
    <>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <label className={`${formStyles.authLabel}`} htmlFor="email">
          Enter Your Email
        </label>
        <input
          type="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          id="email"
          placeholder="loginmail@gmail.com"
          className={`${"border-red-500"} ${formStyles.authInput
            }`}
        />
        {errors.email &&(
          <span className="text-red-500 pt-2 block">{errors.email}</span>
        )}
        <div className={formStyles.passwordField}>
          <label className={`${formStyles.authLabel}`} htmlFor="password">
            Enter Your Password
          </label>
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            id="password"
            placeholder="********"
            className={`${errors.password && "border-red-500"
              } ${formStyles.authInput}`}
          />
          {errors.password&&(
            <span className="text-red-500 pt-2 block">{errors.password}</span>
          )}
        </div>
        <div className={formStyles.btnBox}>
          <button
            type="submit"
            className={formStyles.btn}
            disabled={loading}
          >
            Login
          </button>
        </div>
      </form>
      {serverMsg && (<> <span style={{color:"red"}}>Invalid Email and Password</span> <br/></>)}
      <br />
      <h5 className={formStyles.authH5}>
        OR Login With Social Media Accounts <br />{" "}
      </h5>
      <div className={formStyles.socialAuth}>
        <div onClick={() => window.open(
          `${process.env.NEXT_PUBLIC_SERVER_URL}/auth/google`,
          "_self"
        )}>
          <svg className={formStyles.socialAuthBtn} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="-0.5 0 48 48" version="1.1">
            <g id="Icons" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g id="Color-" transform="translate(-401.000000, -860.000000)">
                <g id="Google" transform="translate(401.000000, 860.000000)">
                  <path d="M9.82727273,24 C9.82727273,22.4757333 10.0804318,21.0144 10.5322727,19.6437333 L2.62345455,13.6042667 C1.08206818,16.7338667 0.213636364,20.2602667 0.213636364,24 C0.213636364,27.7365333 1.081,31.2608 2.62025,34.3882667 L10.5247955,28.3370667 C10.0772273,26.9728 9.82727273,25.5168 9.82727273,24" id="Fill-1" fill="#FBBC05">
                  </path>
                  <path d="M23.7136364,10.1333333 C27.025,10.1333333 30.0159091,11.3066667 32.3659091,13.2266667 L39.2022727,6.4 C35.0363636,2.77333333 29.6954545,0.533333333 23.7136364,0.533333333 C14.4268636,0.533333333 6.44540909,5.84426667 2.62345455,13.6042667 L10.5322727,19.6437333 C12.3545909,14.112 17.5491591,10.1333333 23.7136364,10.1333333" id="Fill-2" fill="#EB4335">
                  </path>
                  <path d="M23.7136364,37.8666667 C17.5491591,37.8666667 12.3545909,33.888 10.5322727,28.3562667 L2.62345455,34.3946667 C6.44540909,42.1557333 14.4268636,47.4666667 23.7136364,47.4666667 C29.4455,47.4666667 34.9177955,45.4314667 39.0249545,41.6181333 L31.5177727,35.8144 C29.3995682,37.1488 26.7323182,37.8666667 23.7136364,37.8666667" id="Fill-3" fill="#34A853">
                  </path>
                  <path d="M46.1454545,24 C46.1454545,22.6133333 45.9318182,21.12 45.6113636,19.7333333 L23.7136364,19.7333333 L23.7136364,28.8 L36.3181818,28.8 C35.6879545,31.8912 33.9724545,34.2677333 31.5177727,35.8144 L39.0249545,41.6181333 C43.3393409,37.6138667 46.1454545,31.6490667 46.1454545,24" id="Fill-4" fill="#4285F4">
                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div onClick={() => signIn("github")} >
          <svg className={formStyles.socialAuthBtn} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="800px" height="800px" viewBox="0 0 20 20" version="1.1">
            <g id="Page-1" stroke="none" strokeWidth={1} fill="none" fillRule="evenodd">
              <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000">
                <g id="icons" transform="translate(56.000000, 160.000000)">
                  <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                  </path>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
      <br />
      <h5 className={formStyles.authH5}>
        Not have any Account ? Create One{" "}
      </h5>
      <br />
      <div className={formStyles.btnBox}>
        <button
          type="button"
          className={formStyles.btn}
          onClick={() => setRoute("Sign-Up")}
        >
          Sign Up
        </button>
      </div>

    </>
  );
};
export default Login;
