import React, { createContext, useState, useEffect } from 'react';

export const DarkModeContext = createContext({
  isDarkMode: false,
  toggleDarkMode: () => {},
});

export const DarkModeProvider = ({ children }:
  { children: React.ReactNode }
) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(prevMode => {
      const newMode = !prevMode;

      localStorage.setItem('darkMode', newMode.toString());

      document.documentElement.setAttribute('theme-mode', newMode ? 'dark' : 'light');

      return newMode;
    });
  };

  useEffect(() => {
    const darkModePreference = localStorage.getItem('darkMode') === 'true';
    setIsDarkMode(darkModePreference);
    toggleDarkMode();
  }, []);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
