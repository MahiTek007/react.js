import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [counter,setCounter]=useState(5)

  // let counter = 5;

  const addValue = () => {
    // counter++;
    if(counter<20){
    setCounter(counter+1);
    }
    if(counter>=20){
      for(let i=counter;i<counter+4;i++){
        setCounter(counter=>counter+1);
    }}
  }
  const subtractValue = () => {
    // counter--;
    if(counter>0){
    setCounter(counter-1);
    }
    if(counter>20){
      for(let i=counter;i>counter-3;i--){
        setCounter(counter=>counter-1);
    }}
  }
  return (
    <>
     <h1>Learn react</h1>
    <h2>Counter Value {counter}</h2>
    <button onClick={addValue}>Add Value</button>
    <br/>
    <button onClick={subtractValue}>Remove Value</button>
    </>
  )
}

export default App
