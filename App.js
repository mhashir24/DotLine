import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  View,
  Image,
  Text,
  FlatList
} from 'react-native';

import LogIn from './screens/LogIn';
import SignUp from './screens/SignUp';
import SelectLevel from './screens/SelectLevel';
import HomeScreen from './screens/HomeScreen';
import SplashScreen from './screens/SplashScreen';
import Courses from './screens/Courses';


const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SelectLevel" screenOptions={{headerShown:false}}>
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />        
        <Stack.Screen name="SelectLevel" component={SelectLevel} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="Courses" component={Courses} />



      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App
