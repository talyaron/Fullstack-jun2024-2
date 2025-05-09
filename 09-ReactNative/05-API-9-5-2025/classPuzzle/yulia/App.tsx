import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRandomDog = async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch("https://dog.ceo/api/breeds/image/random");
      const data = await response.json();

      if (data.status === "success") {
        setDogImage(data.message);
      } else {
        setError("Failed to fetch dog image");
      }
    } catch (err) {
      setError("Error fetching dog image");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dogs</Text>

      {error && <Text style={styles.errorText}>{error}</Text>}

      <View style={styles.imageContainer}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          dogImage && (
            <Image source={{ uri: dogImage }} style={styles.dogImage} />
          )
        )}
      </View>

      <Button
        title="New Dog"
        onPress={fetchRandomDog}
        disabled={loading}
      />

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
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 10,
    overflow: "hidden",
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  dogImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  errorText: {
    color: "red",
    marginBottom: 10,
  },
});
