import React, { useEffect, useState } from 'react';
import './App.css';
import { NavBar } from './Navbar/Navbar';
import { DarkMode } from './DarkMode';
import { Outlet } from 'react-router-dom';
import { ApplicationViews } from './views/ApplicationViews';

type User = {
  token: string,
}
export const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false)
  const [admin, setAdmin] = useState<User | null>(null)

  //get the logged in user from either local storage or from a promise to render AdminViews using a ternary

  return (
    <>
      <NavBar darkMode={darkMode} setDarkMode={setDarkMode} />
      <DarkMode darkMode={darkMode} >
        <ApplicationViews />
      </DarkMode>

    </>
  );
}
