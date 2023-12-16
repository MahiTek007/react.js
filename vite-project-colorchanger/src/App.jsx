import { useState } from 'react'
// import Button from "./components/Button"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState('black')
 

  return (
    <>
           <div className="w-full h-green duration-200" style={{backgroundColor:color}}>
            <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button onClick={()=>setColor("red")} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:"red", color:'white'}}>Red</button>
                <button onClick={()=>setColor('indigo')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'indigo', color:'white'}}>Indigo</button>
                <button onClick={()=>setColor('yellow')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'yellow', color:'white'}}>Yellow</button>
                <button onClick={()=>setColor('blue')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'blue', color:'white'}}>Blue</button>
                <button onClick={()=>setColor('pink')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'pink', color:'white'}}>Pink</button>
                <button onClick={()=>setColor('black')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'black', color:'white'}}>Black</button>
                <button onClick={()=>setColor('green')} className="outline-none px-4 py-1 rounded-full" style={{backgroundColor:'green', color:'white'}}>Green</button>
              </div>
            </div>
            </div>   
    </>
  )
}

export default App
