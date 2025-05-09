import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import { Button, StyleSheet, Image, View, Animated } from "react-native";
export default function App() {
  const [dogImg, setDogImg] = useState<string | null>(null);
  const [fadeAnim] = useState(new Animated.Value(0));
  const [scaleAnim] = useState(new Animated.Value(0.5));

  async function fetchDog() {
    try {
      fadeOut();
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("something went wrong fetching");
      }
      const data = await response.json();
      const img = data.message;
     setTimeout(()=>setDogImg(img),1200) 
    } catch (error) {
      console.error(error);
    }
  }
  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    Animated.timing(scaleAnim, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    if (dogImg) fadeIn();
  }, [dogImg]);
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Animated.Image
          source={dogImg ? { uri: dogImg } : undefined}
          style={[
            styles.img,
            {
              opacity: fadeAnim,
              transform: [{ scale: scaleAnim }],
              display: dogImg ? "flex" : "none",
            },
          ]}
        />
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
  img: { marginLeft: "10%", width: "80%", height: 400 },
  imgContainer: { width: "100%" },
});
