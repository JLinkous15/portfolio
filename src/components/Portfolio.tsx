import { useState } from 'react';
import './App.css';
import { NavBar } from './Navbar/Navbar';
import { DarkMode } from './DarkMode';
import { ApplicationViews } from './views/ApplicationViews';
import { Footer } from './Footer/Footer';


export const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false)

  //get the logged in user from either local storage or from a promise to render AdminViews using a ternary

  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DarkMode darkMode={darkMode} >
        <ApplicationViews />
      </DarkMode>
      <Footer />

    </>
  );
}
