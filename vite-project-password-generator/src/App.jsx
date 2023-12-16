import { useState,useCallback ,useEffect,useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState("password");

  const passwordGenerator =useCallback( ()=>{
    let pass="";
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%";

    if(numberAllowed) {
      str+="0123456789";
    }
    if(characterAllowed) {
      str+="@#$%^&*{}";
    }
    for(let i=1; i<length; i++) {
      let char=Math.random()*str.length+1;
      pass +=str.charAt(char);
    }
    setPassword(pass);
  },[length,numberAllowed,characterAllowed,setPassword])

  const passwordRef = useRef(null);

  const copyPassword= useCallback(()=>{
    window.navigator.clipboard.writeText(password);
  },[password])

  useEffect(()=>{
    passwordGenerator();
  },[length,numberAllowed,characterAllowed,passwordGenerator])
  return (
    <>
      
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700 '>
        <h3>Password Generator</h3>
        <div className='w-full max-w-md mx-auto shadow-md rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          placeholder='Password'
          className='outline-none w-full py-1 px-3'
          readOnly
          ref={passwordRef} />
          <button onClick={copyPassword} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={16}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=> setLength(e.target.value)}
            />
            <label >Length{length}</label>
          
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={()=> setNumberAllowed((prev)=> !prev)
            }/>
            <label className='numberInput'>Number</label>
          
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            
            defaultChecked={characterAllowed}
            id='numberInput'
            onChange={()=> setCharacterAllowed((prev)=> !prev)}/>
            <label className='numberInput'>Chatracter</label>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
