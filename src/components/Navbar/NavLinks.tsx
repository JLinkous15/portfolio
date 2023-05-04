import { ReactNode } from "react"
import { FaHome, FaPaintBrush } from "react-icons/fa";

type NavLink = {
    path: string,
    icon?: ReactNode,
    name: string,
}

export const NavLinks: NavLink[] = [
    {
        path: "/",
        icon: <FaHome />,
        name: "Home"
    },
    {
        path: "/art",
        icon: <FaPaintBrush />,
        name: "Art"
    },
    {
        path: "/food",
        icon: <FaPaintBrush />,
        name: "Food and Cocktails"
    },
]

export const AuthorizedLinks: NavLink[] = [
    {
        path: "/",
        icon: <FaHome />,
        name: "Home"
    },
    {
        path: "/art",
        icon: <FaPaintBrush />,
        name: "Art"
    },
    {
        path: "/food",
        icon: <FaPaintBrush />,
        name: "Food and Cocktails"
    },
]