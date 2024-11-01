// import { BsGlobe } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import imageWeb from '../assets/image/iconweb.png';
import imageProfile from '../assets/image/profile.png'

export const socialMedia = [
    {
        id : '01',
        icon : imageWeb,
        name : 'Portfolio',
        link : 'https://ferminfacchin.website',
    },
    {
        id : '02',
        icon : FaGithub,
        name : 'GitHub',
        link : 'https://github.com/facchin21',
    },
    {
        id : '03',
        icon : FaLinkedinIn,
        name : 'LinkedIn',
        link : 'https://www.linkedin.com/in/ferminfacchin21/',
    },
    {
        id : '04',
        icon : FaTiktok,
        name : 'TikTok',
        link : 'https://www.tiktok.com/@programate_',
    },
    {
        id : '05',
        icon : FaInstagram,
        name : 'Instagram',
        link : 'https://www.instagram.com/programate__/',
    }
]

export const profile = {
    name : 'Fermin Facchin Facchin',
    description : `Desarrollador Web Front-end`,
    Icon : imageProfile,
    link : 'https://programate.website'
}