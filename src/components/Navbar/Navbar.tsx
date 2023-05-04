import { FaBars, FaTimes } from "react-icons/fa"
import { DropDownNav } from "./DropDownNav"
import { useState } from "react"

type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}
export const NavBar = ({ darkMode, setDarkMode }: DarkModeProps) => {
    const [navToggle, setNavToggle] = useState(false)
    return (<>
        <ul>
            <li>
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