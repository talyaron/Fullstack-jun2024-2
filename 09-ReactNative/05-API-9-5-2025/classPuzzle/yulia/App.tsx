import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  ActivityIndicator,
  Platform,
} from "react-native";
import { useState, useEffect } from "react";

export default function App() {
  const [dogImage, setDogImage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(
    null
  );
  const [jokeLoading, setJokeLoading] = useState<boolean>(false);
  const [jokeError, setJokeError] = useState<string | null>(null);

  // For iOS simulators, use localhost
  // For Android emulators, use 10.0.2.2 instead of localhost
  // The server should be running on port 3000
  const SERVER_URL =
    Platform.OS === "android"
      ? "http://10.0.2.2:3000"
      : "http://localhost:3000";

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

  const fetchRandomJoke = async () => {
    try {
      setJokeLoading(true);
      setJokeError(null);
      console.log(`Fetching joke from: ${SERVER_URL}/api/jokes/random`);

      const response = await fetch(`${SERVER_URL}/api/jokes/random`);

      if (!response.ok) {
        throw new Error(`Server responded with status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Joke data received:", data);

      if (data && data.setup && data.punchline) {
        setJoke(data);
      } else {
        setJokeError("Invalid joke data received");
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Unknown error";
      setJokeError(`Error fetching joke: ${errorMessage}`);
      console.error("Joke fetch error:", err);
    } finally {
      setJokeLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDog();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Dogs</Text>

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

      <Button title="New Dog" onPress={fetchRandomDog} disabled={loading} />

      <View style={styles.jokeContainer}>
        {jokeLoading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : jokeError ? (
          <Text style={styles.errorText}>{jokeError}</Text>
        ) : joke ? (
          <View>
            <Text style={styles.jokeText}>{joke.setup}</Text>
            <Text style={[styles.jokeText, styles.punchline]}>
              {joke.punchline}
            </Text>
          </View>
        ) : (
          <Text style={styles.hintText}>Click the button to get a joke</Text>
        )}
      </View>

      <Button
        title="Get a Joke"
        onPress={fetchRandomJoke}
        disabled={jokeLoading}
        color="#228B22"
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
  jokeContainer: {
    minHeight: 80,
    width: "100%",
    marginVertical: 15,
    padding: 10,
    backgroundColor: "#f9f9f9",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  jokeText: {
    fontSize: 16,
    textAlign: "center",
    color: "#333",
    marginBottom: 8,
  },
  punchline: {
    fontWeight: "bold",
    marginTop: 8,
  },
  hintText: {
    fontSize: 14,
    color: "#999",
    textAlign: "center",
  },
});
