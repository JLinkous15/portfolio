import { Outlet } from "react-router-dom"


export const Authorized = () => {
    const token: string | null = localStorage.getItem("token")
    if (token) {
        return <Outlet />
    } else {
        return null
    }
}