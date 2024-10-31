import React, { useContext, useState } from 'react'
import { PiDotsThreeVertical } from "react-icons/pi";
import { Theme } from '../context/ThemeProvider';

export const ButtonMedia = ({ Icon, name, link }) => {
  const { darkMode } = useContext(Theme)
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = () => {
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      <a target='_blank' rel='noreferrer noopener' href={link}
       className={`w-full max-w-container py-3 flex items-center justify-between
    font-poppins ${darkMode ? 'bg-bgDark text-textDark '
          : 'bg-bgLight text-textLight'} rounded-xl px-8 cursor-pointer`}>
        <Icon size={32}/>
        <h2 className='text-2xl'>{name}</h2>
        <PiDotsThreeVertical size={32}
          onClick={handleClick}/>
      </a>

      {isVisible && (
        <div className={`flex items-center justify-center w-full`}>
        </div>
      )}
    </>
  )
}
