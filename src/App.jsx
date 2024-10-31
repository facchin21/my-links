import { bgLight, bgDark } from './data/background.data';
import { Description } from './components/Description'
import { ButtonMedia } from './components/ButtonMedia';
import { socialMedia } from './data/socialMedia.data'
import { Theme } from './context/ThemeProvider';
import { Header } from './components/Header'
import { useContext } from 'react';
import './App.css'

function App() {
  const name = 'Programate';
  const { darkMode } = useContext(Theme)
  return (
    <>
      <main
        className='flex flex-col justify-center items-center min-h-screen
           bg-cover bg-center bg-no-repeat w-full font-poppins'
        style={{
          backgroundImage: darkMode ? `url(${bgDark.image})`
            : `url(${bgLight.image})`,
        }}
      >
        <Header name={name} />
        <Description />
        <div className='flex flex-col justify-center 
        items-center w-full gap-3 mt-6'>
          {socialMedia.map((social) => (
            <ButtonMedia key={social.id}
              Icon={social.icon}
              name={social.name}
              link={social.link} />
          ))}
        </div>
      </main>
    </>
  )
}

export default App