import { createContext, useState } from 'react'
import { theme } from './theme'

export const DarkModeContext = createContext(theme)

export type DarkModeContextProviderProps = {
    children: React.ReactNode
}
export const DarkModeContextProvider = ({ children }: DarkModeContextProviderProps): JSX.Element => {

    return (
        <DarkModeContext.Provider value={theme}>{children}</DarkModeContext.Provider >
    )
}