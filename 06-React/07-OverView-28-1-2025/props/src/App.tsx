import { useEffect } from 'react'

import './App.css'
import Image from './view/components/image/Image'
import { AppMV } from './AppMV'


function App() {

  const { images, getOneMoreDogFromDB, counter, setCounter } = AppMV()

  console.log("the component was rerendered")

  useEffect(() => {
    console.log("counter changed")
  }, [counter])

  useEffect(() => {
    console.log("images changed")

    return () => { // component will unmount
      console.log("images cleanup")
    }
  }, [images.length ])

  return (
    <>
      <h1>React App</h1>
      {counter}
      <button onClick={() => setCounter(c => c + 1)}>Add Count</button>
      {images.map((image, index) => (<Image key={index} src={image.src} alt={image.alt} text={image.text} />))}
      <Image src={"https://cdn.mos.cms.futurecdn.net/Y8oFodGLyPJZRtKjyFjBLN-1280-80.jpg"} alt="Flower" text="Flower" />
      <button onClick={getOneMoreDogFromDB}>Get One More Dog</button>
    </>
  )
}

export default App
