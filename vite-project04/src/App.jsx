import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let counter = 0;
  const [count, setCount] = useState(counter);
  
  const addValue = () => {
    setCount(count+1);
  }
  return (
    <>
      <button onClick={addValue}>Add VAlue {count}</button>
    </>
  )
}

export default App
