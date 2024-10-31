import React, { useContext } from 'react'
import { IoMoonSharp } from "react-icons/io5";
import { AiFillSun } from "react-icons/ai";
import { Theme } from '../context/ThemeProvider';

export const SwitchMode = () => {
    const { darkMode, toggleDarkMode } = useContext(Theme);
    return (
        <button
            className={` px-6 py-2 rounded-full
          ${darkMode ? 'bg-bgDark text-textDark'
                    : 'bg-bgLight text-textLight'}`}
            onClick={toggleDarkMode}>
            {
                darkMode
                    ? <AiFillSun className='w-6 h-6' />
                    : <IoMoonSharp className='w-6 h-6' />
            }
        </button>
    )
}
