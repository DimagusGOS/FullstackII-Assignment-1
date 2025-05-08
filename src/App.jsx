import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import configscreenshot from './screenshots/1.png'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <div>
        <br />
        <h2>Assignment Questions</h2>
        <p>1. What does running the first two commands do? Where are they stored? <br /> setting up name and email when linking to cloud repositories like github</p>
        <p>2. Run the third command what do you get back? <br /> <img src={configscreenshot} alt="git config screen shot" height={200} /></p>
        
      </div>
    </>
  )
}

export default App
