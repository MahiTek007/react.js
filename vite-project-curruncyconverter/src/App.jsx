// import { useState } from 'react'
import { useState } from 'react'
// import './App.css'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  // const [count, setCount] = useState(0)

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] = useState(0)



  const currencyInfoFrom = useCurrencyInfo(from)
  // const currencyInfoTo = useCurrencyInfo(to)

  const options =Object.keys(currencyInfoFrom)
  
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)

  }

  const convert = ()=>{
    setConvertedAmount(amount* currencyInfoFrom[to])
  }


  return (
    <>
      <div style={{
        alignItems: 'center',
        margin: '10px',
        marginBottom:'none',
        color: 'white',
        border: '1px solid black',
        height: '100px',
        background: 'black'
        
      }}>
        <h1 className="text-3xl bg-slate-500 font-bold text-white text-center">
          Curruncy App

        </h1>
        
      </div>

      <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-15")`,

      }}
      >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
              <form action="" 
              onSubmit={(e)=>{
                e.preventDefault()
              }}>
                <div className="w-full mb-1">
                  <InputBox
                  label="From"
                  amount={amount}
                  onCurrencyChange={(currency)=>setAmount(amount)}
                  currencyOptions={options}
                  selectCurrency={from}
                  onAmountChange={(amount)=>setAmount(amount)}
                  />
                </div>
                <button type='button'
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={swap}
                >
                  swap
                </button>
                <div className="w-full mb-1">
                  <InputBox
                  label="to"
                  amount={amount}
                  onCurrencyChange={(currency)=>setTo(currency)}
                  currencyOptions={options}
                  selectCurrency={to}
                  onAmountChange={(amount)=>setTo(amount)}
                  currencyDisable
                  amountDisable
                  />
                </div>
                <button type='button'
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={convert}
                >
                  Convert{ from.toUpperCase()} to { to.toLowerCase()}
                </button>
              </form>

            </div>
        </div>
      </div>

    </>
  )
}

export default App
