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
            <Route element={<Authorized />} />
            <Route element={<ArtForm />} />

            <Route element={<Unauthorized />} />
            <Route element={<Home />} />
        </Routes>
    )
}