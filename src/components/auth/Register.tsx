import { useRef } from "react"

export const Register = () => {
    const username = useRef<HTMLInputElement | null>(null)
    const password = useRef<HTMLInputElement | null>(null)
    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user = {
            username: username.current?.value,
            password: password.current?.value
        }

    }
    return <form onSubmit={() => { }}>
        <h2>Register</h2>
        <fieldset>
            <label htmlFor="username">Username: </label>
            <input type="text" name="username" id="username" ref={username} />
        </fieldset>
        <fieldset>
            <label htmlFor="password">Password: </label>
            <input type="password" name="password" id="password" ref={password} />
        </fieldset>
        <button type="submit">Submit</button>
    </form>
}