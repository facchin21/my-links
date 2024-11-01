import React, { useContext, useState } from 'react'
import { Theme } from '../context/ThemeProvider'
import { FaTelegramPlane } from "react-icons/fa";
import Modal from './Modal';
import { profile } from '../data/socialMedia.data';

export const ButtonSharedProfile = () => {
    const { darkMode } = useContext(Theme);
    const [show, setShow] = useState(false);
    
    const hanldeShared = () => {
        setShow((prev) => !prev)
    }

    const { Icon, name, link, description } = profile;
    return (
        <>
            <button
                className={`absolute transform -translate-y-24 
                    md:-translate-x-72 px-6 py-2 rounded-full
                     -translate-x-32 sm:-translate-x-60
                ${darkMode ? 'bg-bgDark text-textDark'
                        : 'bg-bgLight text-textLight'}`}
                onClick={hanldeShared}>
                <FaTelegramPlane className='inline-block' 
                size={20}/>
            </button>
            {
                show && (
                    <Modal onClose={hanldeShared}
                    Icon={Icon}
                    name={name}
                    link={link}
                    description={description}
                    />
                )
            }
        </>
    )
}
