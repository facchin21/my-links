import React, { createContext, useState, useEffect } from 'react';

export const Theme = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(() => {
        // Detecta la preferencia del sistema
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        // Escucha cambios en la preferencia del sistema y actualiza el tema
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = () => setDarkMode(mediaQuery.matches);

        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleDarkMode = () => setDarkMode((prev) => !prev);
    return (
        <Theme.Provider value={{ darkMode, toggleDarkMode }}>
            {children}
        </Theme.Provider>
    );
};
