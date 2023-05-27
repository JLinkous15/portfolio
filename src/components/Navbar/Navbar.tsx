import { useState } from "react"
import "./Navbar.css"
//components
import { DropDownNav } from "./DropDownNav"

type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}

export const Navbar = ({ darkMode, setDarkMode }: DarkModeProps): JSX.Element => {
    const [navToggle, setNavToggle] = useState(true)
    return (<>
        <ul className="navbar">
            <li className="navbar-item">
                <img src="../../media/logo.svg" alt="logo" className="nav-image" onClick={(e) => {
                    e.preventDefault()
                    setNavToggle(false)
                }} />
            </li>
            <li className="navbar-item">
                <button onClick={(e) => {
                    e.preventDefault()
                    setDarkMode(!darkMode)
                }}>
                    Dark
                </button>
            </li>

        </ul>
        <DropDownNav navToggle={navToggle} setNavToggle={setNavToggle} />
    </>)
}