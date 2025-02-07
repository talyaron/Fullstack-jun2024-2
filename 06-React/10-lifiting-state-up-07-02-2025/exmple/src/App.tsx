import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Box from './view/components/box/Box'
import Image from './view/components/image/Image'

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  function handleSetState() {
    setTheme(theme === "light" ? "dark" : "light")
  }

  return (

    <div className={`${theme} app`}>
      <Box width={200} height={200} theme={theme} setTheme={setTheme} handleSetState={handleSetState} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} handleSetState={handleSetState} />
     
      <Image src={reactLogo} alt="React logo" width={200} height={200} theme={theme} />
    </div>

  )
}

export default App
