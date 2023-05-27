import { FaTimes } from "react-icons/fa";
import { NavLinks, AuthorizedLinks } from "./NavLinks";
import { Link } from "react-router-dom"
import { Dispatch, SetStateAction } from "react";

type DropDownNavProps = {
    navToggle: boolean,
    setNavToggle: Dispatch<SetStateAction<boolean>>
}
export const DropDownNav = ({ navToggle, setNavToggle }: DropDownNavProps) => {
    const allLinks = NavLinks.concat(AuthorizedLinks)
    if (localStorage.getItem("token")) {
        return (
            <ul className={`nav-dropdown ${navToggle ? "" : "down"}`}>
                {allLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link to={link.path}>{link.icon}<span />{link.name}</Link>
                        </li>)
                })}
            </ul>
        )
    } else {
        return (
            <ul className={`nav-dropdown ${navToggle ? "" : "down"}`}>
                {NavLinks.map((link, index) => {
                    return (
                        <li key={index}>
                            <Link to={link.path}>{link.icon}<span />{link.name}</Link>
                        </li>)
                })}
                <li>
                    <FaTimes onClick={(e) => {
                        setNavToggle(true)
                    }} />
                </li>
            </ul>
        )
    }
}