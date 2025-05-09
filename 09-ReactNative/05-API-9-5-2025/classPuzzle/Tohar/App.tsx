import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';

export default function App() {
  const [dogImageUrl, setDogImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const fetchDogImage = async () => {
    setIsLoading(true);

    try {
      const response = await fetch('https://dog.ceo/api/breeds/image/random');
      const data = await response.json();

      if (data.status === 'success') {
        setDogImageUrl(data.message);
      } else {
        setError('Failed to fetch dog image');
      }
    } catch (err) {
      setError('Failed to fetch dog image');
    } finally {
      setIsLoading(false);
    }
  };

  const fetchJoke = () => {
    setIsLoading(true);

    try {

    } catch {
      setError('Failed to fetch a joke');
    }

  }

  useEffect(() => {
    fetchDogImage();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.buttonText}>
        {isLoading ? 'Loading...' : 'Show A Dog!'}
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={fetchDogImage}
        disabled={isLoading}
      >    {
          isLoading ? (
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
          )
        }</TouchableOpacity>

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
    backgroundColor: '#000',
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