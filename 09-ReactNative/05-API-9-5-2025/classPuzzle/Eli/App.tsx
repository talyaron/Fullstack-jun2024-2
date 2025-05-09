import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Image, View } from "react-native";
export default function App() {
  const [dogImg, setDogImg] = useState<string | null>(null);

  async function fetchDog() {
    try {
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("something went wrong fetching");
      }
      const data = await response.json();
      const img = data.message;
      setDogImg(img);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        {dogImg && <Image source={{ uri: dogImg }} style={styles.img}></Image>}
      </View>
      <View style={styles.bottom}>
        <Button title="Click for dog!" onPress={() => fetchDog()} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  bottom: { position: "absolute", bottom: 20 },
  img: {marginLeft:"10%" ,width: "80%", height: 400 },
  imgContainer:{width: "100%",}
});
