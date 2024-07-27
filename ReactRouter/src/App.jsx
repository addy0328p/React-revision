import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <h1 className='bg-green-400 p-34'> React Router</h1>
   </>
  )
}

export default App
