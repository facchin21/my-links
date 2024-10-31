import imageProfile from '../assets/image/profile.png'
import { SwitchMode } from './SwitchMode';

export const Header = ({ name }) => {
  return (
    <header className='mb-6 flex flex-col justify-center items-center'>
      <div className='w-52 h-52'>
        <img src={imageProfile}
          alt={`Image de ${name}`}
          className='w-full h-full' />
      </div>
      <div className='mt-2'>
        <h1
          className='text-center text-3xl text-semibold
            text-textDark'
        >{name}</h1>
      </div>
      <SwitchMode/>
    </header>
  )
}
