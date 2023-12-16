import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp() {
  return(
    <div>
      <h1>Custom App!</h1>
    </div>
  )
}

const anotherElement = (
<>
  <a href="https://reactjs.org">Visit To React</a>
  <br />
</>
)

const anotherElement2 = React.createElement(
  'a',
  { href: 'https://reactjs.org' },
  'Visit To React'
)

const anotherElement3 = React.createElement(
  'p',
  null,
  'Visit To React'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <App />
    <MyApp />
    {anotherElement}
    {anotherElement2}
    {anotherElement3}
    </>
  </React.StrictMode>,
)
