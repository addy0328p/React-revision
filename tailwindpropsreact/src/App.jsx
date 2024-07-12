import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card';
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className='bg-green-200 text-blue-900 mb-5'>Tailwind css</h1>
      <Card></Card>
    </>
  )
}

export default App
