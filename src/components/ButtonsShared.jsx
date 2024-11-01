import { TiSocialLinkedin } from "react-icons/ti";
import { FaWhatsapp } from "react-icons/fa";
import React from 'react'
import { toast } from "react-toast";

export const ButtonsShared = ({ link, name }) => {

    const handleCopyLink = () => {
        navigator.clipboard.writeText(link)
            .then(() => {
                toast.success('Link copied to clipboard');
            })
            .catch((err) => {
                toast.error('Error copying link');
            }
            )
    }

    const hanldeShareWhatsapp = () => {
        const whatsappUrl = `https://api.whatsapp.com/send?text=${name} - ${encodeURIComponent(link)}`
        window.open(whatsappUrl, '_blank')
    }

    const handleSharedLinkedin = () => {
        const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(link)}`
        window.open(linkedinUrl, '_blank')
    }

    return (
        <div className="flex justify-around">
            <div className='flex flex-col justify-center items-center'>
                <button className="flex items-center bg-gray-200
             text-black p-3 rounded-full transition-all
             duration-300 hover:bg-gray-300 hover:scale-105"
             onClick={handleCopyLink}>
                    🔗
                </button>
                <span className="mt-1">Copy link</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <button className="flex items-center bg-green-500
             text-black p-3 rounded-full transition-all
             duration-300 hover:bg-green-700 hover:scale-105"
             onClick={hanldeShareWhatsapp}>
                    <FaWhatsapp size={24}
                        color='white' />
                </button>
                <span className="mt-1">WhatsApp</span>
            </div>

            <div className='flex flex-col justify-center items-center'>
                <button className="flex items-center bg-blue-600
             text-black p-3 rounded-full transition-all
             duration-300 hover:bg-blue-700 hover:scale-105"
             onClick={handleSharedLinkedin}>
                    <TiSocialLinkedin size={24}
                        color='white' />
                </button>
                <span className="mt-1">LinkedIn</span>
            </div>
        </div>
    )
}
