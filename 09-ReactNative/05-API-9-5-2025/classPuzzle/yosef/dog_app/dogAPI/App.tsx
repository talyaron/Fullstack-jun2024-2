import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
 
  const [dog, setNewDog] = useState();
  const [jokeQuestion, setJokeQuestion] = useState();
  const [jokeAnswer, setJokeAnswer] = useState();

  const getDog = async () => {
    const response = await fetch('https://dog.ceo/api/breeds/image/random');
    const data = await response.json();
    setNewDog(data.message);
  };

  // const getJoke = async () => {
  //   const response = await fetch('https://api.chucknorris.io/jokes/random');
  //   const data = await response.json();
  //   console.log(data)
  //   setJoke(data.value);
  // };

  const getJoke = async () => {
    const response = await fetch('http://10.0.0.15:3000/api/jokes/random');
    const data = await response.json();
    console.log(data)
    setJokeQuestion(data.setup);
    setJokeAnswer(data.punchline);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>the joke:</Text>
      <Text style={{}}>{jokeQuestion}</Text>
      <Text>{jokeAnswer}</Text>
      <Text style={styles.title}>YosefIB* - dog app</Text>
      <Image
        source= {{ uri: dog }}
        style={{ width: 400, height: 300 }} // הגדלתי כדי שתראה את התמונה
      />
      <TouchableOpacity
        onPress={getDog}
        style={styles.button}
        ><Text style={styles.buttonText}>Get a dog!</Text></TouchableOpacity>  
        <TouchableOpacity
          style={styles.button}
          onPress={getJoke}>
          <Text style={styles.buttonText}>Get a Joke!</Text>
          </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 3,
    letterSpacing: 1,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#4A90E2', // כחול מודרני
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5, // לצל באנדרואיד
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: 1,
  },
  
});
