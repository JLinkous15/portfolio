import { useState } from 'react';
import './Portfolio.css';
import { theme } from './context/theme';
import { DarkModeContextProvider } from './context/DarkModeContextProvider';
import { Navbar } from './Navbar/Navbar';
import { ApplicationViews } from './views/ApplicationViews';
import { Footer } from './Footer/Footer';
import { DarkMode } from './DarkMode';


export const Portfolio = (): JSX.Element => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <DarkModeContextProvider>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DarkMode darkMode={darkMode}>
        <ApplicationViews darkMode={darkMode} />
        <Footer />
      </DarkMode>
    </DarkModeContextProvider>
  );
}
