import React from 'react'
import './App.css'
const Button = (props) => {
  let {color}=props
  return (
      <>
         <div className="w-full h-green duration-200"
           style={{background:color}}>
            <div className="fixed flex-wrap justify-center bottom-12 inset-x-0 px-2">

              <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                <button className="outline-none px-4 py-1 rounded-full" style={{background:color}}>{color}</button>
              </div>
            </div>

            </div>  
      </>
  )
}

export default Button