import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux';
import { tokenCheck } from './src/util/authHelper';
import { login, signout } from './src/redux/slices/loginSliceC';
import MainScreen from './src/screens/MainScreen';
import BuyCredit from './src/screens/privateScreens/BuyCredit';


const Main = () => {

  const isLoggedIn = useSelector((state: any) => state.login);


  

  let dispatch = useDispatch();
  const [loading, setloading] = useState(true);

  //eğer token VARSA ve expire olmamışsa dashboard, expire olmuşsa login page

  useEffect(() => {
      console.log("salam");
      
    tokenCheck()
      .then(res => {
        
        if (res == true) {
          setloading(false);

          
          dispatch(login())
        }
        else {
          setloading(false);
          dispatch(signout())
        }
      })

  }, [])
  const openScreen = () => {

    if (!loading) {
      if (isLoggedIn.value) {
        return <BuyCredit/>
      }
      else {
        return <MainScreen/>
      }
    }
    else {
      return <Text>loading...</Text>
    }

  }

  return (<>
      {
        openScreen()
      }
  </>
  )
}

export default Main