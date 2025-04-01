import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Background from './view/components/background/Background'
import Modal from './view/components/modal/Modal'
import Button from "./view/components/button/Button"
import { KeyRound } from 'lucide-react'
import { Banana } from 'lucide-react'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Button text='Call Us' link="https://www.google.co.il"><KeyRound /></Button>
          <br />
          <Button text='Call Us' link="https://www.google.co.il"><KeyRound /></Button>
          <br />
          <Button text='Call Us' link="https://www.google.co.il"><Banana /></Button>

    {/* <Background>
        <Icons></Icons>
    </Background>

    <Background>
        <Icons></Icons>
    </Background> */}

    {/* <Background>
     <Modal></Modal>
    </Background> */}
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
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
