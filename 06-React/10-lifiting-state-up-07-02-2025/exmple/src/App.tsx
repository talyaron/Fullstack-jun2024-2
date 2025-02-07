import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Box from './view/components/box/Box'
import Image from './view/components/image/Image'

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("light")

  return (

    <div className={`${theme} app`}>
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Box width={200} height={200} theme={theme} setTheme={setTheme} />
      <Image src={reactLogo} alt="React logo" width={200} height={200} theme={theme} />
    </div>

  )
}

export default App
