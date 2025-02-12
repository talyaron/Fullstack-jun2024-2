
import { useSelector } from 'react-redux'
import './App.css'
import { RootState } from './redux/store'
import SetImage from './view/setImage/SetImage'
import images from './assets/images'

function App() {

  const image = useSelector((state: RootState) => state.counter.image)

  return (
    <div>
      <h1>your flower</h1>
      <img src={image ? image : ""}/>

      <h2>Choose your flower</h2>
      <div style={{ display: 'flex', gap: "2rem", margin: "1rem"}}>
        {images.map((image) => 
          <SetImage image={image}/>
        )}
      </div>
    </div>
  )
}

export default App
