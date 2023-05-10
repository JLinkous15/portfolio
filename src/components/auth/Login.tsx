import { useRef } from "react"
import { loginUser } from "../Managers/AuthManager"
import { useNavigate } from "react-router-dom"

export const Login = () => {
    const email = useRef<HTMLInputElement>(null)
    const password = useRef<HTMLInputElement>(null)
    const navigate = useNavigate()
    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            username: email.current?.value,
            password: password.current?.value
        }
        loginUser(user)
            .then(res => {
                if ("token" in res) {
                    localStorage.setItem("token", res.token)
                    navigate("/")
                }
            }
            )
            .catch(err => console.log(err))
    }
    return <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <fieldset>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
        </fieldset>
        <button type="submit">Login</button>
    </form>
}