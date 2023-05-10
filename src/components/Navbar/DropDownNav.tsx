import { NavLinks, AuthorizedLinks } from "./NavLinks";
import { Link } from "react-router-dom"

type DropDownNavProps = {
    navToggle: boolean,
}
export const DropDownNav = ({ navToggle }: DropDownNavProps) => {
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
            </ul>
        )
    }
}