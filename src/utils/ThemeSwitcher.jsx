'use client'
import { useEffect } from "react"

export default function ThemeSwitcher() {

  useEffect(() => {
    "dark" === localStorage.getItem("theme") ? document.querySelector("#mainCont").classList.add(
      "drK") : document.querySelector("#mainCont").classList.remove("drK")
  }, [])

  const setTheme= ()=>{
    localStorage.setItem("mode", "darkmode" === localStorage.getItem("mode") ? "light" : "darkmode"),
    "darkmode" === localStorage.getItem("mode") ? document.querySelector("#mainCont").classList.add(
      "drK") : document.querySelector("#mainCont").classList.remove("drK")
  }

  return (
    <li className="isDrk">
      <span
        aria-label="Dark"
        className="tIc tDL bIc"
        onClick={() => {setTheme()}}
        role="button"
      >
        <svg className="line" viewBox="0 0 24 24">
          <g className="d1">
            <path
              d="M183.72453,170.371a10.4306,10.4306,0,0,1-.8987,3.793,11.19849,11.19849,0,0,1-5.73738,5.72881,10.43255,10.43255,0,0,1-3.77582.89138,1.99388,1.99388,0,0,0-1.52447,3.18176,10.82936,10.82936,0,1,0,15.118-15.11819A1.99364,1.99364,0,0,0,183.72453,170.371Z"
              transform="translate(-169.3959 -166.45548)"
            />
          </g>
          <g className="d2">
            <path
              className="f"
              d="M12 18.5C15.5899 18.5 18.5 15.5899 18.5 12C18.5 8.41015 15.5899 5.5 12 5.5C8.41015 5.5 5.5 8.41015 5.5 12C5.5 15.5899 8.41015 18.5 12 18.5Z"
            />
            <path
              d="M19.14 19.14L19.01 19.01M19.01 4.99L19.14 4.86L19.01 4.99ZM4.86 19.14L4.99 19.01L4.86 19.14ZM12 2.08V2V2.08ZM12 22V21.92V22ZM2.08 12H2H2.08ZM22 12H21.92H22ZM4.99 4.99L4.86 4.86L4.99 4.99Z"
              strokeWidth={2}
            />
          </g>
        </svg>
      </span>
    </li>
  )
}
