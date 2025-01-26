import React, { useState } from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet , ScrollView } from 'react-native';

const GAD7Questions = [
  'Feeling nervous, anxious, or on edge?',
  'Not being able to stop or control worrying?',
  'Worrying too much about different things?',
  'Trouble relaxing?',
  'Being so restless that it is hard to sit still?',
  'Becoming easily annoyed or irritable?',
  'Feeling afraid as if something awful might happen?',
];

const AnswerOptions = ['Not at all', 'Several days', 'More than half the days', 'Nearly every day'];

const Taketest2 = ({ navigation }) => {
  const [answers, setAnswers] = useState(Array(GAD7Questions.length).fill(''));



  const  calculategad7Score = (responses) =>{
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



  const handleAnswer = (index, option) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = option;
    setAnswers(updatedAnswers);
  };

  const handleSubmit = () => {
    console.log('Submitted answers:', answers);



    const {totalScore } = calculategad7Score(answers)
    
    /** here we send the data to bakend via api call */
    fetch('http://192.168.1.6:5000/getgad', {         // Here put ur system ip
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
              navigation.navigate('ResultPage', { totalScore });
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
      <Text style={styles.title}>GAD-7 Questions</Text>
      <ScrollView>
      {GAD7Questions.map((question, index) => (
        <View key={index} style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
          <View style={styles.optionsContainer}>
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

export default Taketest2;
