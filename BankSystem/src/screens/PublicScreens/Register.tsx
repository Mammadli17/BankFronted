import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { TextInput } from 'react-native-paper';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { AppDispatch } from '../../redux';
import { postData } from '../../redux/slices/LoginSlice';
import Back from '../../assets/Back';

const Register = ( { navigation } : any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [finCode, setFinCode] = useState('');
  const [seria, setSeria] = useState('');
  const dispatch = useDispatch<AppDispatch>();
 

  const handleLogin = () => {
    // Email format validation using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    if (email && password && finCode && seria) {
      if (!emailRegex.test(email)) {
        // Email format is invalid, display alert
        Alert.alert('Please enter a valid email address');
        return;
      }
  
      dispatch(postData({ email, password, finCode, seria }))
        .then(res => {
          navigation.navigate('Otp', { email });
        })
        .catch(error => {
          Alert.alert('Please enter everythink');
        });
    } else {
      Alert.alert('Please enter everythink');
    
    }
  };
  
  return (
    <View>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>Kreditlər</Text>
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Qeydiyyat</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          mode="outlined"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="FIN Code"
          style={styles.input}
          value={finCode}
          onChangeText={setFinCode}
          mode="outlined"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Seriya nömrəsi"
          style={styles.input}
          value={seria}
          onChangeText={setSeria}
          mode="outlined"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
         secureTextEntry={true}
          label="Parol"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          mode="outlined"
        />
      </View>
      <View style={{ marginTop: 270 }}>
        <TouchableOpacity
          onPress={handleLogin}
          style={{
            marginHorizontal: 30,
            backgroundColor: 'blue',
            paddingVertical: 15,
            paddingHorizontal: 20,
            borderRadius: 10,
            alignItems: 'center',
            opacity: 0.7,
          }}
        >
          <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>Davam et</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
  titleContainer: {
    marginTop: 50,
    marginLeft: 20,
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
    marginLeft: 20,
  },
  inputWrapper: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginTop: 10,
  },
  inputLabel: {
    position: 'absolute',
    left: 10,
    fontSize: 14,
    color: 'black',
    paddingHorizontal: 5,
  },
  input: {
    height: 40,
    color: 'black',
  },
});

export default Register;
