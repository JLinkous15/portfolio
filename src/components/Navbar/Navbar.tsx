type DarkModeProps = {
    darkMode: boolean,
    setDarkMode: (darkMode: boolean) => void
}
export const NavBar = ({ darkMode, setDarkMode }: DarkModeProps) => {
    return <ul>
        <button onClick={(e) => {
            e.preventDefault()
            setDarkMode(!darkMode)
        }}>
            Dark
        </button>
    </ul>
}