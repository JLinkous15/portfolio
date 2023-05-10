import "./Portfolio"
//This component is going to be the parent of the app as a whole, to allow background and text color to be inherited.

type DarkModeProps = {
    darkMode: boolean,
    children: React.ReactNode
}
export const DarkMode = ({ darkMode, children }: DarkModeProps): JSX.Element => {
    return <section className={darkMode ? 'dark' : 'light'}>
        {children}
    </section>
}