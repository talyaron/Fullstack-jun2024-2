import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity  } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function App() {
  const [secondsLeft, setSecondsLeft] = useState(1 * 10); // 5 דקות
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timeUp, setTimeUp] = useState(true);
  const answers = ['Sea', 'Wings', 'Jump', 'Hat'];
  // console.log(("sasd"))
  // console.log(selectedAnswer)

  const checkAnswer = () => {
    console.log(selectedAnswer)
  }

  const nextClicked = () => {
    if (selectedAnswer== 'Wings')
      alert("✔ Correct answer ✔");
    else 
      alert("X Wrong answer X");  
  }

  const timeFineshed = () => {
    alert(" هههههههههههه خسرتي اعتماد - تزعليش :)");
    setTimeUp(false);
  }

  useEffect(() => {
    console.log(secondsLeft)
    if (secondsLeft <= 0) {
      timeFineshed();
      return;
    }
    const interval = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval); // ניקוי בעת סיום
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;


  return (
    <View style={timeUp ? styles.container : styles.gameOver}>
      <Text style={styles.time}>Time left:<Text style={styles.secondes}>{formattedTime}</Text></Text>
      <Text style={styles.chose}>Choose the correct answer</Text>
      <Image
        source={require('./pics/bee.png')}
        style={{ width: 400, height: 300 }} // הגדלתי כדי שתראה את התמונה
      />

      <Text style={styles.qustion}>What does a bee use to fly?</Text>
      <Text>بحبك اعتماد {selectedAnswer}</Text>
      <View style={styles.answersContiner}>
        {answers.map((answer) => (
          <TouchableOpacity
            key={answer}
            onPress={() => {setSelectedAnswer(answer); checkAnswer();}}
            style={selectedAnswer === answer ? styles.correctAnswer : styles.answerBox}
          >
            <Text style={styles.answerText}>{answer}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={styles.nextBox}
        onPress={nextClicked}
        ><Text style={styles.next}>Next</Text></TouchableOpacity>  
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
  time:{
    backgroundColor: 'gray',
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10, // מרווח בין התמונה לשם
  },
  secondes:{
    display: 'none',
    backgroundColor: 'gray',
    fontSize: 15,
    color: 'white',
    fontWeight: 'bold',
    marginLeft: 10, // מרווח בין התמונה לשם
  },
  chose:{
    padding : 20,
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10, // מרווח בין התמונה לשם
  },
  qustion:{
    fontSize: 20,
    color: 'black',
    marginLeft: 10, // מרווח בין התמונה לשם
  },
  answerBox: {
    height: 50,
    width: 80,
    justifyContent: 'center',   // מרכז אנכית
    alignItems: 'center',       // מרכז אופקית
    borderRadius: 25,
    borderWidth: 2,
    marginLeft: 10,
    backgroundColor: '#f0f0f0',
  },
  answerText: {
    fontSize: 15,
    color: 'black',
    textAlign: 'center',
  },
  correctAnswer: {
    backgroundColor: 'orange',
    height: 50,
    width: 80,
    justifyContent: 'center',   // מרכז אנכית
    alignItems: 'center',       // מרכז אופקית
    borderRadius: 25,
    borderWidth: 2,
    marginLeft: 10,
  },
  next:{
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
  },
  answersContiner: {
    flex: 0,
    flexDirection: 'row',
    marginBottom: 10,
    justifyContent: 'space-between',
    padding: 20,

  },
  nextBox: {
    backgroundColor: 'black',
    height: 50,
    width: 350,
    justifyContent: 'center',   // מרכז אנכית
    alignItems: 'center',       // מרכז אופקית
    borderRadius: 25,
    borderWidth: 2,
    marginLeft: 10,
  },
  gameOver: {
    display: 'none',
  },
  
});
