import { useState } from 'react'
import reactLogo from './assets/react.svg'

import './App.css'
import Box from './view/components/box/Box'
import Image from './view/components/image/Image'

function App() {
  const [selectedImage, setSelectedImage] = useState<{ src: string, name: string }>({});

  return (
    <div>
    <div className='players'>
      <Box picture={'https://forbes.co.il/wp-content/uploads/2022/10/shutterstock-21952131992.jpg'} 
           name="emppa" 
           width={200} 
           height={200} 
           margin2={9}
           onSelect={setSelectedImage} 
      />

      <Box picture={'https://hazavit.co.il/wp-content/uploads/2020/11/%D7%96%D7%9C%D7%90%D7%98%D7%9F-%D7%90%D7%99%D7%91%D7%A8%D7%94%D7%99%D7%9E%D7%95%D7%91%D7%99%D7%A5-e1606551361911.jpg'} 
           name="Zlatan Ibrahimović" 
           width={200} 
           height={200} 
           margin2={9}
           onSelect={setSelectedImage} 
      />

      <Box picture={'https://mor-levi.co.il/wp-content/uploads/2020/07/13323431_10208005236702191_7745052650369108919_o-768x511.jpg'} 
           name="dont know" 
           width={200} 
           height={200} 
           margin2={9}
           onSelect={setSelectedImage} 
      />
     </div>

      <div style={{ textAlign: "center" }}>
        <h2>my choice is: {selectedImage.name}</h2>
        <Image src={selectedImage.src} alt={selectedImage.name} width={400} height={400}/>
      </div>
    </div>
  )
}

export default App
