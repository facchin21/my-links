import React, { useContext, useState } from 'react'
import { PiDotsThreeVertical } from "react-icons/pi";
import { Theme } from '../context/ThemeProvider';
import { Modal } from '../components/Modal';

export const ButtonMedia = ({ Icon, name, link }) => {
  const { darkMode } = useContext(Theme)
  const [isVisible, setIsVisible] = useState(false)

  const handleClick = (event) => {
    event.preventDefault();
    setIsVisible((prev) => !prev)
  }

  return (
    <>
      <a target='_blank' rel='noreferrer noopener' aria-label='button social media' href={link}
        className={`w-8/12 max-w-container py-3 flex items-center justify-between
    font-poppins ${darkMode ? 'bg-bgDark text-textDark'
            : 'bg-bgLight text-textLight'} rounded-xl px-8 
          cursor-pointer transition-transform duration-300 
          hover:scale-105 shadow-md`}>
            {
              typeof Icon === 'string' ? (
                <img src={Icon} 
                alt={`Image de ${name}`}
                className='w-9 h-9' />
              ):(
                <Icon size={32} />
              )
            }
        <h2 className='text-lg sm:text-2xl'>{name}</h2>
        <PiDotsThreeVertical size={32}
          onClick={handleClick}
          className={`transition-all duration-300
          ${darkMode ? 'text-gray-400 hover:text-white'
              : 'text-gray-500 hover:text-black'}`} />
      </a>

      {isVisible && (
        <Modal
          onClose={handleClick}
          Icon={Icon}
          name={name}
          link={link} />
      )}
    </>
  )
}
