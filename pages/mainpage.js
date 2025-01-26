import { Text, View ,SafeAreaView, Button, ScrollView, InputAccessoryView , StyleSheet, Modal} from 'react-native'
import React, { Component , useState } from 'react'
import {Calendar} from 'react-native-calendars';

export const Mainpage =({navigation})=> {
        const [selected,setSelected]= useState('')
        const [days,setdays] = useState({
            '1':'Jan',
            '2':'Feb',
            '3': 'Mar',
            '4': 'Apr',
            '5': 'May',
            '6': 'Jun',
            '7': 'Jul',
            '8': 'Aug',
            '9': 'Sep',
            '10': 'Oct',
            '11': 'Nov',
            '12': 'Dec'
        })
        const [isDrawerVisible, setIsDrawerVisible] = useState(false);

        const openDrawer = () => {
          setIsDrawerVisible(true);
        };
      
        const closeDrawer = () => {
          setIsDrawerVisible(false);
        };
        
        const handletest =()=>{
            navigation.navigate('taketest')
        }
        const handletest2 = ()=>{
            navigation.navigate('taketest2')
        }
        const writejournal = ()=>{
            navigation.navigate('journal',{ selectedDate: selected.dateString })
        }
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
          <Text style={styles.headerText}>Good day.</Text>
          <Text style={styles.dateText}>{selected ? selected.day + ', ' + days[selected.month] + ' ' + selected.year : ''}</Text>
          <Button title="Select Date" onPress={openDrawer} color="#fb5b5a" />
      </View>
      <Modal animationType="slide" transparent={true} visible={isDrawerVisible} onRequestClose={closeDrawer}>
          <View style={styles.modalView}>
              <View style={styles.modalContent}>
                  <Calendar
                      onDayPress={(day) => {
                          setSelected(day);
                      }}
                      markedDates={{
                          [selected]: {
                              selected: true,
                              disableTouchEvent: true,
                              selectedDotColor: '#fb5b5a',
                          },
                      }}
                  />
                  <Button title="Close Drawer" onPress={closeDrawer} color="#4CAF50" />
              </View>
          </View>
      </Modal>
      <ScrollView>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Assess your anxiety state!</Text>
                        <Button title="Take Test" onPress={handletest} color="#4CAF50" />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Assess your mindful state!</Text>
                        <Button title="Take Test" onPress={handletest2} color="#4CAF50" />
                    </View>
                    <View style={styles.card}>
                        <Text style={styles.cardText}>Journal</Text>
                        <Button title="Write" onPress={writejournal} color="#4CAF50" />
                    </View>
                </View>
            </ScrollView>
  </SafeAreaView>
    );
  
};

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
},
header: {
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'center',
},
headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
},
dateText: {
    fontSize: 16,
    marginBottom: 10,
},
modalView: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
modalContent: {
    backgroundColor: 'white',
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 20,
},
cardContainer: {
    marginBottom: 20,
},
card: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    elevation: 3,
    alignItems: 'center', // Center align text
    width: '90%', // Reduce width of card
    alignSelf: 'center', // Center card horizontally
    shadowColor: '#000',
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
},
cardText: {
    fontSize: 18,
    marginBottom: 10,
},
})