import { NavLinks, AuthorizedLinks } from "./NavLinks";
import { Link } from "react-router-dom";
export const DropDownNav = () => {
    const allLinks = NavLinks.concat(AuthorizedLinks)
    if (localStorage.getItem("token")) {
        return (
            <ul>
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
            <ul>
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