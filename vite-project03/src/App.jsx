import { useState } from 'react'
import Card from "./components/Card";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  return (
    < >
      <div>
        <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind Test</h1>
      </div>      
      < Card username="Rani" btnText="Click Me" password="1234"/>
      <Card username="Moni" btnText="Visit me"password="56789"/>
    </>
  )
}

export default App
