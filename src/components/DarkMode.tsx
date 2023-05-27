import { useContext } from "react"
import "./Portfolio"
import { DarkModeContext } from "./context/DarkModeContextProvider"
//This component is going to be the parent of the app as a whole, to allow background and text color to be inherited.

type DarkModeProps = {
    darkMode: boolean,
    children: React.ReactNode
}
export const DarkMode = ({ darkMode, children }: DarkModeProps): JSX.Element => {
    const theme = useContext(DarkModeContext)
    return <section className="component-container" style={darkMode ? theme.light : theme.dark}>
        {children}
    </section>
}