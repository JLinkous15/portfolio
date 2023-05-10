import React, { useState } from "react"
import "./Navbar.css"
//icons
import { FaBars, FaTimes } from "react-icons/fa"
//components
import { DropDownNav } from "./DropDownNav"

type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}
export const Navbar: React.FC<DarkModeProps> = ({ darkMode, setDarkMode }): JSX.Element => {
    const [navToggle, setNavToggle] = useState(true)
    return (<>
        <ul className="navbar">
            <li className="navbar-item">
                <button onClick={(e) => {
                    e.preventDefault()
                    setDarkMode(!darkMode)
                }}>
                    Dark
                </button>
            </li>
            <li className="navbar-item">
                {navToggle
                    ? <FaBars onClick={() => { setNavToggle(false) }} />
                    : <FaTimes onClick={() => { setNavToggle(true) }} />}
            </li>
        </ul>
        <DropDownNav navToggle={navToggle} />
    </>)
}