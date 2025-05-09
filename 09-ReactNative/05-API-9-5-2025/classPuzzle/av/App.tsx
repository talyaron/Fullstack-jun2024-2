import React, { useState } from 'react';
import { View, Text, Pressable, ImageBackground, StyleSheet } from 'react-native';

type BtnProps = {
  onPress: () => void;
};

const Btn: React.FC<BtnProps> = ({ onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>I am the button</Text>
    </Pressable>
  );
};



const App = () => {
  const [showPicture, setShowPicture] = useState(false);

  if (showPicture) {
    return (
      <ImageBackground
        source ={require("./image.png")}
        style={styles.imageBackground}
      >
      </ImageBackground>
    );
  } else {
    return (
      <View style={styles.container}>
        <Text style={styles.welcomeText}>For a cute dog press the button</Text>
        <Btn onPress={() => setShowPicture(true)} />
      </View>
    );
  }
};

export default App;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlayText: {
    fontSize: 24,
    color: 'pink',
    padding: 10,
  },
  welcomeText: {
    fontSize: 20,
    marginVertical: 20,
  },
  button: {
    padding: 10,
    backgroundColor: '#2196F3',
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});
