import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';

const PHQ9Questions = [
  'Little interest or pleasure in doing things?',
  'Feeling down, depressed, or hopeless?',
  'Trouble falling or staying asleep, or sleeping too much?',
  'Feeling tired or having little energy?',
  'Poor appetite or overeating?',
  'Feeling bad about yourself—or that you are a failure or have let yourself or your family down?',
  'Trouble concentrating on things, such as reading the newspaper or watching television?',
  'Moving or speaking so slowly that other people could have noticed? Or, the opposite—being so fidgety or restless that you have been moving around a lot more than usual?',
  'Thoughts that you would be better off dead or of hurting yourself in some way?',
];

const AnswerOptions = ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'];

const TakeTest = ({ navigation }) => {
  const [answers, setAnswers] = useState(Array(PHQ9Questions.length).fill(''));

  const handleAnswer = (index, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = option;
    setAnswers(updatedAnswers);
  };

  const  calculatePHQ9Score = (responses) =>{
    const scores = {
        "Not at all": 0,
        "Several days": 1,
        "More than half the days": 2,
        "Nearly every day": 3
    };

    let totalScore = 0;
    const questionsCount = 9; 

    // Calculate score for each response
    for (let i = 0; i < responses.length; i++) {
        if (responses[i] != null) {
            totalScore += scores[responses[i]];
        }
    }

    return { totalScore };
}

  const handleSubmit = () => {
    console.log('Submitted answers:', answers);

    const {totalScore } = calculatePHQ9Score(answers)
    
    /** here we send ans data to backend for processing  */

    fetch('http://192.168.1.6:5000/getphq', {           // Here put ur system ip
            method: 'POST', 
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              value: totalScore
            }),
            }).then(response => response.json())
            .then(data => {
              console.log('Success:', data);
            })
            .catch((error) => {
               console.error('Error:', error);
            });

    navigation.navigate('mainpage')
  };

  // Function to check if all answers are filled
  const allAnswersFilled = () => {
    return answers.every(answer => answer !== '');
  };

  console.log('Current answers:', answers);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PHQ-9 Questions</Text>
      <ScrollView>
      {PHQ9Questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
          {AnswerOptions.map((option, optionIndex) => (
            <TouchableOpacity
              key={optionIndex}
              style={[styles.option, answers[index] === option && styles.selectedOption]}
              onPress={() => handleAnswer(index, option)}
            >
              <Text style={styles.optionText}>{option}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
      <Button title="Submit" onPress={handleSubmit} disabled={!allAnswersFilled()} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  questionContainer: {
    marginBottom: 20,
  },
  question: {
    fontSize: 18,
    marginBottom: 10,
  },
  option: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 5,
    backgroundColor: '#f0f0f0',
  },
  optionText: {
    fontSize: 16,
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: 'lightblue',
  },
});

export default TakeTest;
