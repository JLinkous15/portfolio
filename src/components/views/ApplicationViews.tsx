import { Route, Routes } from "react-router-dom"
import { Login } from "../auth/Login"
import { Register } from "../auth/Register"
import { Authorized } from "./Authorized"
import { Unauthorized } from "./Unauthorized"
import { ArtForm } from "../FineArt/ArtForm"
import { Home } from "../Home/Home"

export const ApplicationViews = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />

            {/* views only for admins */}
            <Route element={<Authorized />} >
                <Route element={<ArtForm />} />
            </Route>

            {/* views for all visitors */}
            <Route element={<Unauthorized />} >
                <Route element={<Home />} path="/" />
            </Route>
        </Routes>
    )
}