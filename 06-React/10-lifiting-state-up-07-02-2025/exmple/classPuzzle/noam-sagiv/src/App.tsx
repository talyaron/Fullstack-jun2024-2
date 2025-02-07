import { useState } from 'react';
import MainImage from './view/components/MainImage/MainImage';
import Image from './view/components/Image/Image';

function App() {
  const [image, setImage] = useState('https://images.dog.ceo/breeds/waterdog-spanish/20180723_185559.jpg');

  return (
    <div>
      <h2>הכלב הנבחר:</h2>
      <MainImage image={image} alt="Main Image" />

      <h2>בחר את הכלב שלך:</h2>
      <Image setImage={setImage} />
    </div>
  );
}

export default App;
