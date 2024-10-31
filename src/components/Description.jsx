import React, { useContext } from 'react'
import { Theme } from '../context/ThemeProvider'

export const Description = () => {
    const { darkMode } = useContext(Theme)
    return (
        <div className={`w-8/12 py-4 px-8 rounded-xl
        max-w-container text-center ${darkMode ? 'bg-bgDark text-textDark' : 'bg-bgLight text-textLight'}`}>
            <p className='text-lg'>
                ¡Hola! 👋 Soy Fermín
                💻 Desarrollador web. Si necesitas un sitio web para tu negocio, estás en el lugar indicado. Aquí abajo encontrarás algunos de mis proyectos, redes y más.
            </p>
            <span className='block text-lg font-medium mt-2'>📩 Si te interesa mi perfil, ¡no dudes en contactarme!</span>
        </div>
    )
}
