import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  Button,
  StyleSheet,
  Image,
  View,
  Animated,
  Pressable,
  Text,
} from "react-native";

interface Joke {
  setup: string;
  punchline: string;
}
export default function App() {
  const [dogImg, setDogImg] = useState<string | null>(null);
  const [joke, setJoke] = useState<Joke>({ setup: "", punchline: "" });
  const [jokeWindowOpen, setJokeWindowOpen] = useState(false);
  const [showPunchline, setShowPunchline] = useState(false);

  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.5);

  async function fetchDog() {
    try {
      fadeOut();
      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      if (!response.ok) {
        throw new Error("something went wrong fetching");
      }
      const data = await response.json();
      const img = data.message;

      setTimeout(() => setDogImg(img), 1200);
    } catch (error) {
      console.error(error);
    }
  }

  async function fetchJoke() {
    try {
      setShowPunchline(false);
      const response = await fetch("http://192.168.1.14:3000/api/jokes/random");
      if (!response.ok) {
        throw new Error("something went wrong fetching");
      }
      const data = await response.json();
      setJoke({ punchline: data.punchline, setup: data.setup });
      setJokeWindowOpen(true);
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
      <View style={styles.top}>
        <Button title="Click for Dog!" onPress={() => fetchDog()} />
      </View>

      {jokeWindowOpen && (
        <View style={styles.popupWrapper}>
          <Pressable
            style={styles.overlay}
            onPress={() => setJokeWindowOpen(false)}
          />
          <View style={styles.modal}>
            <Text style={{ fontSize: 23 }}>{joke.setup}</Text>
            <Pressable onPress={() => setShowPunchline(true)}>
              <Text style={!showPunchline ? styles.covered : styles.revealed}>
                {joke.punchline}
              </Text>
            </Pressable>
            <View style={styles.bottom}>
              <Button title="Close" onPress={() => setJokeWindowOpen(false)} />
            </View>
          </View>
        </View>
      )}

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
        <Button title="Click for Joke!" onPress={() => fetchJoke()} />
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
  top: { position: "absolute", top: 20 },
  img: { marginLeft: "10%", width: "80%", height: 400 },
  imgContainer: { width: "100%" },
  modal: {
    width: 300,
    height: 350,
    backgroundColor: "#3b82f6",
    padding: 20,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -150 }, { translateY: -175 }],
    zIndex: 99999,
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
  },
  overlay: {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  popupWrapper: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    zIndex: 99999,
  },
  covered: {
    fontSize: 23,
    backgroundColor: "black",
    color: "black",
    marginTop: 40,
  },
  revealed: {
    fontSize: 23,
    marginTop: 40,

    backgroundColor: "transplant",
    color: "white",
  },
});
