// import { useState } from 'react'
import './App.css'
import MainImage from './view/components/MainImage/MainImage'

function App() {
  // const [image, setImage] = useState<"dog" | "dog2" | "dog3">("dog")

  return (
    <>
      <MainImage image={`URL`} alt="Cute Dog" />
    </>
  )
}

export default App