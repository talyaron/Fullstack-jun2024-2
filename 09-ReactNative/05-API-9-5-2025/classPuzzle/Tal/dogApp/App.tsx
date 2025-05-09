import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View, Image } from 'react-native';

export default function App() {

  const [image, setImage] = useState<string | null>(null);

  useEffect(()=>{

    handleGetDogImage();
  }, [])

  function handleGetDogImage() {
    fetch('https://dog.ceo/api/breeds/image/random')
      .then((response) => response.json())
      .then((data) => {
        setImage(data.message);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  return (
    <View style={styles.container}>
      {image && <Image
        source={{ uri: image }}
        style={styles.image}
      />}
     

      <Button
        title="Show me one more dog"
        onPress={handleGetDogImage}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image:{
    width: 200,
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    borderWidth: 1,
    borderColor: 'black',
    resizeMode: 'cover',
  }
});
