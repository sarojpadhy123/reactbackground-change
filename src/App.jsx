// key points :
// delete the indexcss code and paste only this @tailwind base;
// @tailwind components;
// @tailwind utilities;
 
// define div the css would be w-full h-screen
//define another div fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2
// define another div flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md
// Logic and react integration 
// define useState 

// color , setColor = useState("this is your default value ")

// implement style {{backgroundColor:color}}   color is the variable coming from state you need to change this wherever you want to upadate the state
// now  just define the onClick function and call the setColor 
// onClick={()=>setColor("yourcolor")}


import React, { useState } from 'react'

const App = () => {
  const [color, setColor]= useState("green");
// this is a function for changing color in a single button
  // const changecolor = ()=>{
  //   const newcolor = color === "green" ? "blue" : "red";
  //   setColor(newcolor);
  // }
  return (
    <>
    <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2' >
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-md' >
          <button className='outline-none px-4 py-1 rounded-md shadow-md bg-red-600' onClick={()=>setColor("red")} >Red </button>
          <button className='outline-none px-4 py-1 rounded-md shadow-md bg-green-600' onClick={()=>setColor("green")} >Green </button>
          <button className='outline-none px-4 py-1 rounded-md shadow-md bg-gray-600' onClick={()=>setColor("black")} >Dark </button>
          <button className='outline-none px-4 py-1 rounded-md shadow-md bg-blue-600' onClick={()=>setColor("blue")} >Blue </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
