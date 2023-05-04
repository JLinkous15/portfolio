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
                {navToggle
                    ? <FaBars onClick={() => { setNavToggle(true) }} />
                    : <FaTimes onClick={() => { setNavToggle(false) }} />}
            </li>
        </ul>
        <DropDownNav />
    </>)
}