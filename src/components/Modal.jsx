import { Theme } from '../context/ThemeProvider';
import { ButtonsShared } from './ButtonsShared';
import React, { useContext, useEffect } from 'react';

export const Modal = ({ isVisible, onClose, Icon, name, link, description = '' }) => {
  const { darkMode } = useContext(Theme);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isVisible, onClose])


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className={`rounded-lg py-12 px-6 relative w-80 sm:w-96 font-poppins 
        ${darkMode ? 'bg-bgDark text-textDark' : 'bg-bgLight text-textLight'}`}>
        <span className='absolute top-4 left-1/2 transform -translate-x-1/2
         font-semibold text-sm'>Shared Link</span>
        {/* Botón de cerrar */}
        <button onClick={onClose}
          className="absolute top-1 right-4 text-3xl font-extralight 
        font-sans transition-colors duration-300 hover:text-red-300">
          &times;
        </button>

        <div className={`transition-all hover:scale-105 my-8 p-4 
        rounded-lg shadow-lg  
          ${darkMode ? "bg-bgDark" : "bg-bgLight"}`}>
          {/* Imagen de perfil */}
          <div className="flex justify-center mb-4">
            {
              typeof Icon === 'string' ? (
                <img src={Icon} 
                alt={`Image de ${name}`} 
                className='w-40'/>
              ):(
                <Icon size={120} />
              )
            }
          </div>

          {/* Información del usuario */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-semibold">{name}</h2>
            <a href={link} target='_blank'
            className='opacity-80 transition-all 
            duration-100 hover:opacity-100'>
              {link}
            </a>
            <p className='opacity-75'>{description}</p>
          </div>
        </div>

        {/* Botones de compartir */}
        <ButtonsShared link={link} name={name}/>
      </div>
    </div>
  );
};

export default Modal;