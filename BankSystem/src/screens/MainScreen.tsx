import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Register from './PublicScreens/Register';
import Otp from './PublicScreens/Otp';
const Stack = createStackNavigator();
const MainScreen = () => {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Register" component={Register}  options={{headerShown:false}}/>
      <Stack.Screen name="Otp" component={Otp}  options={{headerShown:false}}/>

    </Stack.Navigator>
  
  )
}

export default MainScreen