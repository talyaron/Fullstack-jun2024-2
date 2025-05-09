import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [jokeSetup, setJokeSetup] = useState(null);
  const [jokePunchline, setJokePunchline] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRandomDogImage = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      if (data.status === 'success') {
        setDogImageUrl(data.message);
      } else {
        setError('Failed to fetch dog image');
      }
    } catch (err) {
      setError('dog Network error: ' + err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomDogImage();
  }, []);

const fetchRandomJoke = async () => {
  setIsLoading(true);
  setError(null);

  try {
    const response = await fetch('http://10.0.0.11:3000/api/jokes/random');
    const data = await response.json();
    console.log(data)

    if (data.id) {
      setJokeSetup(data.setup);
      setJokePunchline(data.punchline);
    } else {
      setError('Failed to fetch joke');
    }
  } catch (err) {
    setError('Joke Network error: ' + err.message);
  } finally {
    setIsLoading(false);
  }
};


  useEffect(() => {
    fetchRandomJoke();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={fetchRandomDogImage}
        disabled={isLoading}
      >
        <Text style={styles.buttonText}>
          {isLoading ? 'Loading...' : 'Show A Dog!'}
        </Text>
      </TouchableOpacity>

      {isLoading ? (
        <Text style={styles.loadingText}>Loading...</Text>
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : dogImageUrl ? (
        <Image
          source={{ uri: dogImageUrl }}
          style={styles.dogImage}
          resizeMode="contain"
        />
      ) : (
        <View style={styles.placeholderImage}>
          <Text>No image loaded</Text>
        </View>
      )}

        <TouchableOpacity
            style={styles.button}
            onPress={fetchRandomJoke}
            disabled={isLoading}
        >
            <Text style={styles.buttonText}>
                {isLoading ? 'Loading...' : 'Get A Joke!'}
            </Text>
        </TouchableOpacity>

        <Text>{jokeSetup}</Text>
        <Text>{jokePunchline}</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  dogImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: '#e0e0e0',
  },
  placeholderImage: {
    width: 300,
    height: 300,
    borderRadius: 8,
    marginVertical: 20,
    backgroundColor: '#e0e0e0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loadingText: {
    marginVertical: 20,
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    marginVertical: 20,
    fontSize: 16,
  },
});