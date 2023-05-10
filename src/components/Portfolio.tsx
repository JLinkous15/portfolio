import React, { useState } from 'react';
import './Portfolio.css';
import { Navbar } from './Navbar/Navbar';
import { DarkMode } from './DarkMode';
import { ApplicationViews } from './views/ApplicationViews';
import { Footer } from './Footer/Footer';


export const Portfolio: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false)

  return (
    <div className="portfolio">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DarkMode darkMode={darkMode} >
        <ApplicationViews />
      </DarkMode>
      <Footer />
    </div>
  );
}
