import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from "react-native";

/**
 * Main App component
 * Displays a random dog image from the Dog API
 * @returns {JSX.Element} The rendered App component
 */
export default function App() {
  const [dogImageUrl, setDogImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  /**
   * Fetches a random dog image from the Dog API
   * @returns {Promise<string>} The URL of the dog image
   */
  const fetchRandomDogImage = async (): Promise<string> => {
    try {
      // Make API request to get random dog image
      const response = await fetch("https://dog.ceo/api/breeds/image/random");

      // Check if response is successful
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }

      // Parse JSON response
      const data = await response.json();

      // Return image URL
      return data.message;
    } catch (error) {
      console.error("Error fetching dog image:", error);
      // Return placeholder image URL in case of error
      throw error;
    }
  };

  /**
   * Handles button press to get a new dog image
   */
  const handleShowDogImage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      // Get new dog image URL
      const imageUrl = await fetchRandomDogImage();
      setDogImageUrl(imageUrl);
    } catch (error) {
      setError("Failed to load dog image. Please try again.");
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : dogImageUrl ? (
          <Image
            source={{ uri: dogImageUrl }}
            style={styles.dogImage}
            resizeMode="contain"
          />
        ) : (
          <Text style={styles.placeholderText}>
            Press the button to see a dog!
          </Text>
        )}

        {error && <Text style={styles.errorText}>{error}</Text>}
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleShowDogImage}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? "Loading..." : "Show me a dog!"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// Styles for the components
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  imageContainer: {
    width: "100%",
    height: 300,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    overflow: "hidden",
  },
  dogImage: {
    width: "100%",
    height: "100%",
  },
  placeholderText: {
    fontSize: 18,
    color: "#888",
  },
  errorText: {
    color: "red",
    marginTop: 10,
    textAlign: "center",
  },
  button: {
    backgroundColor: "#4CAF50",
    padding: 15,
    borderRadius: 8,
    width: "80%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
