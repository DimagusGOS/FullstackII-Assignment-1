import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import configScreenshot from './screenshots/1.png'
import gitdiffScreenshot from './screenshots/2.png'

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
      <h1>Testing Github Branches for the first time!!!</h1>
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

      <p>ba2dea2 (HEAD -&gt; main) Initial commit: set up Vite React app</p>

      <div>
        <br />
        <h2>Assignment Questions</h2>
        <p>1. What does running the two config commands do? Where are they stored? <br /> Setting up name and email when linking to cloud repositories, everything stored locally in computer</p>
        <p>2. Run the third command what do you get back? <br /> <img src={configScreenshot} alt="git config screen shot" height={200} /></p>
        <p>3. Why should commit messages be written in present tense? <br /> To make sure the message and changes align with the commit they are linked to</p>
        <p>4. What does git diff show? What do the + and - mean? <br /> Diff shows the difference between the version being worked on and the last commited version, + means what was added and - what was removed <br /> <img src={gitdiffScreenshot} alt="git diff screen shot" height={200} /> </p>
        <p>5. What does the line 'git restore src/App.jsx' accomplish? <br /> This line restores everything to the commited version</p>
        <p>6. What does the -u flag do in git push? Include GitHub repo link <br /> it saves up the push settings, so there is no need to rewrite it all again <a href="https://github.com/DimagusGOS/FullstackII-Assignment-1">Repolink here</a></p>
      </div>
    </>
  )
}
export default App
