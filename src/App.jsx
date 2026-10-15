import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  const [bgColor, setBgColor] = useState("bg-gray")
   console.log(bgColor)
  return(
    < div className={`${bgColor} bg-gray-600  min-h-screen`}>
      <h1 className='text-center text-6xl mb-5 font-bold'>Display Color Changer</h1>
      <div className='flex bg-amber-600  w-250 justify-center rounded-4xl mx-auto shadow-2xl p-2 gap-6'>
          <button 
          onClick={()=> setBgColor("bg-green-600") }
            className='rounded-4xl px-4 bg-green-600'>
            Green
          </button>
          <button 
          onClick={()=> setBgColor("bg-red-600")}
            className='rounded-4xl px-4 bg-red-600'>
            Red
          </button>
          <button 
          onClick={()=> setBgColor("bg-sky-600")}
            className='rounded-4xl px-4 bg-sky-600'>
            Sky
          </button>
          <button 
              onClick={()=>setBgColor("bg-gray-600")}
          className='rounded-4xl px-4 bg-gray-600'>
            Gray
          </button>
          <button 
          onClick={()=> setBgColor("bg-white")}
            className='rounded-4xl px-4 bg-white'>
            White
          </button>
          <button 
          onClick={()=> setBgColor("bg-yellow-600")}
            className='rounded-4xl px-4 bg-yellow-600'>
            Yellow
          </button>
          <button 
          onClick={()=> setBgColor("bg-pink-600")}
            className='rounded-4xl px-4 bg-pink-600'>
            Pink
          </button>
          <button 
          onClick={()=> setBgColor("bg-purple-600")}
          className='rounded-4xl px-4 bg-bottom bg-purple-600 text-white'>Black</button>
      </div>
    </div>
  )
}

export default App
