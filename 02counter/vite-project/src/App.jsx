import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
let [counter,setCounter]=useState(Math.floor(Math.random()*10)) // useState is a Hook that allows you to add React state to function components.
  // Here, 'counter' is the current state, and 'setCounter' is the function that updates the state.
  // We initialize the counter state with a value of 2.

  const addValue =()=>{
    setCounter(counter + 1) // update the counter 
  }
  const minusvalue =()=>{
    if(counter <=0)
    {
      counter = 0;
    }
    else { // else decrement the counter  if counter is not less than 0. 0 is the minimum value.
    setCounter(counter - 1) // update the counter 
  }}
  return (
    <>
    <h1>ADDY HACK {counter}</h1>
     <h2><button onClick={addValue} >Increament</button></h2>
     <br />
     <h2><button onClick={minusvalue}>decreamnet</button></h2>
    </>
  )
}

export default App
