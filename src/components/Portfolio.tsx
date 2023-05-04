import React, { useState } from 'react';
import './App.css';
import { Navbar } from './Navbar/Navbar';
import { DarkMode } from './DarkMode';
import { ApplicationViews } from './views/ApplicationViews';
import { Footer } from './Footer/Footer';


export const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  //get the logged in user from either local storage or from a promise to render AdminViews using a ternary

  return (
    <div className="portfolio">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DarkMode darkMode={darkMode} >
        <ApplicationViews />
      </DarkMode>
      <Footer />
      app
    </div>
  );
}
