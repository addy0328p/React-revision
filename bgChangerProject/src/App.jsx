import { useState } from 'react'; // Importing useState hook from React

function App() {
  // Declaring a state variable 'color' with initial value 'olive' and a function to update it 'setColor'
  const [color, setColor] = useState('olive');

  return (
    <>
      {/* Main div that covers the entire screen with a dynamic background color */}
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
      </div>
      
      {/* Fixed position container at the bottom center with flexbox layout */}
      <div className='fixed justify-center bottom-14 flex flex-wrap'>
        
        {/* Button container with some padding and background color */}
        <div className='flex flex-wrap bg-white px-3 py-3 bg-clip-padding text-yellow-300'>
        
        {/* Button to set background color to blue */}
        <button onClick={() => setColor("blue")} className='outline-none px-4 py-1 rounded-3xl shadow-xl' style={{ backgroundColor: "blue" }}>BLUE</button>
        
        {/* Button to set background color to red */}
        <button onClick={() => setColor("red")} className='outline-none px-4 py-1 rounded-3xl shadow-xl' style={{ backgroundColor: "red" }}>RED</button>
        
        {/* Button to set background color to green */}
        <button onClick={() => setColor("green")} className='outline-none px-4 py-1 rounded-3xl shadow-xl' style={{ backgroundColor: "green" }}>GREEN</button>
        
        {/* Button to set background color to orange */}
        <button onClick={() => setColor("orange")} className='outline-none px-4 py-1 rounded-3xl shadow-xl' style={{ backgroundColor: "orange" }}>ORANGE</button>
        
        {/* Button to set background color to purple */}
        <button onClick={() => setColor("purple")} className='outline-none px-4 py-1 rounded-3xl shadow-xl' style={{ backgroundColor: "purple" }}>PURPLE</button>
        
        </div> 
      </div>
    </>
  );
}

export default App; // Exporting the App component as default export
