import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';


import { Provider } from 'react-redux'
import { store } from './src/redux';
import Appp from './Appp';
const App = () => {
  return (
    <NavigationContainer>
     
      <Provider store={store}>
         <Appp/>
       </Provider>
    </NavigationContainer>
  );
};

export default App;
