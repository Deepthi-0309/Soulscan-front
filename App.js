import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Mainpage } from './pages/mainpage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Login } from './pages/login';
import Taketest from './pages/Taketest';
import Taketest2 from './pages/Taketest2';
import Journal from './pages/journal';
import Resultpage from './pages/Resultpage';

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        name='login'
        component={Login} />
        
        <Stack.Screen
          name="mainpage"
          component={Mainpage} />
        <Stack.Screen
          name='taketest'
          component={Taketest}/>
        <Stack.Screen
          name='taketest2'
          component={Taketest2}/>
        <Stack.Screen 
        name='journal'
        component={Journal}/>
        <Stack.Screen 
        name='resultpage'
        component={Resultpage}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    color:'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt:{
    color:'white'
  }
});
