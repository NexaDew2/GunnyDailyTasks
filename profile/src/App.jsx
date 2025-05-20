import React from 'react'
import { Logo } from './assets'
function App() {
  return (
    <>
    <div className="flex justify-center h-screen items-center bg-blue-100"> 
      <div className="w-96 h-96 bg-slate-100 shadow-lg  rounded-2xl p-5">
        <div className="imagebox flex justify-center rounded-full p-1">
     <div className="flex bg-black rounded-full p-1">
      <img className="h-32 w-32 rounded-full  p-2" src={Logo} alt="" />
     </div>
     </div>
     <h1 className="text-center p-2 text-2xl font-bold font-sans"> THATIPAMULA GUNNY
     </h1>
     <h2 className="text-center p-5 font-semibold">React Front-End Developer</h2>
     <p className="text-center">Implemented Full Stack Projects and React Projects</p>
     
     
     </div></div>
    </>
  )
}

export default App
