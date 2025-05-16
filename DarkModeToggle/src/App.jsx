import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [background,setBackground] = useState('bg-white')
  const [textColor,setTextColor] = useState('text-black')
  const [text, setText] = useState('Dark')
 const toggleBackground = () => {
  if (background === 'bg-white') {
    setBackground('bg-black')
    setText('Light')
    setTextColor('text-white')
  } else {
    setBackground('bg-white')
    setText('Dark')
    setTextColor('text-black')
  }
 }

  return (
    <>
     <div className={`w-full h-screen flex items-center justify-center ${background} ` }>
      <button onClick={toggleBackground} className={` bg-blue-500 p-3 rounded-full text-white`} >{text}mode</button>
     </div>
    </>
  )
}

export default App
