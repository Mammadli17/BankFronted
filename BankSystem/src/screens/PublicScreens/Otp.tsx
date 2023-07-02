import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'

import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/slices/loginSliceC';
import { Alert } from 'react-native';
import Back from '../../assets/Back';

const Otp = ({ route }: any) => {
  const navigation = useNavigation();
  const { email } = route.params;
  const [otp, setOtp] = useState(['', '', '', '']);
  const otpInputs = useRef<any>([]);
  const [countdown, setCountdown] = useState(120); // Initial countdown value in seconds

  useEffect(() => {
    // Start the countdown when the component mounts
    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    // Clear the timer when the component unmounts
    return () => {
      clearInterval(timer);
    };
  }, []);
  let dispatch = useDispatch();
  const onSubmit = (code: any) => {

    axios.post("http://192.168.0.111:8080/api/user/confirm", { email:email, code:numericOtp })
        .then(res => {
            console.log("salam",res.data?.token);
            console.log("salam");
            
            
            AsyncStorage.setItem("token", res.data?.token)
            .then(res => {
                dispatch(login())
            })
        })
        .catch(err => {
            
            if(err.response){
               Alert.alert(err.response.data.message)
            }
            else{
                Alert.alert("Error!")
            }

        })
}

  const handleOtpChange = (index: number, value: string) => {
    if (isNaN(Number(value))) {
      return; // Only allow numerical input
    }

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < otp.length - 1 && otpInputs.current[index + 1]) {
      const nextInput = otpInputs.current[index + 1];
      if (nextInput) {
        nextInput.focus();
      }
    } else if (!value && index > 0 && otpInputs.current[index - 1]) {
      const prevInput = otpInputs.current[index - 1];
      if (prevInput) {
        prevInput.focus();
      }
    }
  };
 

  const goBack = () => {
    navigation.goBack();
  };
  const enteredOtp = otp.join('');
  const numericOtp = Number(enteredOtp);

  // Convert countdown value to mm:ss format
  const minutes = Math.floor(countdown / 60);
  const seconds = countdown % 60;
  const formattedCountdown = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={goBack}>
          <Back/>
        </TouchableOpacity>
        <Text style={styles.title}>Verification</Text>
      </View>
     
      <View style={{ marginTop: 130, left: 20 }}>
        <Text style={{ fontSize: 40, color: 'black', fontWeight: '600' }}>OTP</Text>
        <Text style={{ fontSize: 18, color: 'black' }}>Please type the verification code sent to</Text>
        <Text style={{ fontSize: 18, color: 'black' }}>{email}</Text>
        <View style={styles.otpContainer}>
          {otp.map((value, index) => (
            <TextInput
              key={index}
              style={styles.otpInput}
              value={value}
              onChangeText={(text) => handleOtpChange(index, text)}
              maxLength={1}
              keyboardType="numeric"
              autoFocus={index === 0}
              ref={(ref) => (otpInputs.current[index] = ref)}
            />
          ))}
        </View>
        {/* <Text style={styles.enteredOtp}>{numericOtp}</Text> */}
      </View>
      <Text style={styles.countdown}>{formattedCountdown}</Text>
      <TouchableOpacity
        onPress={onSubmit}
        style={{
          marginHorizontal: 30,
          backgroundColor: 'blue',
          paddingVertical: 15,
          paddingHorizontal: 20,
          borderRadius: 10,
          alignItems: 'center',
          opacity: 0.7,
          marginTop: 250
        }}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Davam et</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
    flexDirection:"row"
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
    left:80
  },
  otpContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginHorizontal: 60
  },
  otpInput: {
    width: 40,
    height: 40,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 4,
    marginHorizontal: 5,
    textAlign: 'center',
    fontSize: 16,
    color: 'black'
  },
  enteredOtp: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  countdown: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
    color:"black"
  },
})

export default Otp;
