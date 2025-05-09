import React, { useState } from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
  ActivityIndicator,
} from 'react-native';

// Button Component
type BtnProps = {
  onPress: () => void;
};

const Btn: React.FC<BtnProps> = ({ onPress }) => (
  <Pressable onPress={onPress} style={styles.button}>
    <Text style={styles.buttonText}>🎲 Get Random Joke</Text>
  </Pressable>
);

// Main App
const App = () => {
  const [joke, setJoke] = useState<{ setup: string; punchline: string } | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchRandomJoke = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://192.168.1.14:3000/api/jokes/random');
      if (!response.ok) throw new Error('Network error');
      const data = await response.json();
      console.log('Fetched joke:', data); // Optional: check what's received
      setJoke(data);
    } catch (error) {
      console.error('Error fetching joke:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>🤓 Developer Joke Generator</Text>
      <Btn onPress={fetchRandomJoke} />
      {loading && <ActivityIndicator size="large" color="#2196F3" />}
      {joke && (
        <View style={styles.jokeContainer}>
          <Text style={styles.jokeText}>{joke.setup}</Text>
          <Text style={styles.jokePunchline}>{joke.punchline}</Text>
        </View>
      )}
    </View>
  );
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  button: {
    padding: 12,
    backgroundColor: '#4caf50',
    borderRadius: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  jokeContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  jokeText: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  jokePunchline: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
