import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';
import Slider from '@react-native-community/slider';
import { TextInput } from 'react-native-paper';
const BuyCredit = () => {
  const [amount, setAmount] = useState(0);
  const [amountM, setAmountM] = useState(6);
  const [selectedLanguage, setSelectedLanguage] = useState(null);

  const handleAmountChange = (value:any) => {
    setAmount(value);
  };

  const handleAmountChangeM = (value:any) => {
    setAmountM(value);
  };

  return (
    <ScrollView style={{ backgroundColor: 'white' }}>
      <View style={styles.buttonContainer}>
        <Text style={styles.title}>İpoteka Krediti</Text>
      </View>
      <View style={{ marginTop: 60 }}>
        <Text style={{ fontSize: 35, color: 'black', fontWeight: '600', left: 20 }}>
          Müraciət
        </Text>
        
      </View>
      <View>
        <Text style={{ color: 'black', left: 20, fontSize: 20, marginTop: 30 }}>Məbləğ</Text>
        <Slider
          style={{ width: 360, height: 40, marginLeft: 20, marginRight: 20 }}
          minimumValue={0}
          maximumValue={2000}
          minimumTrackTintColor="blue"
          maximumTrackTintColor="#000000"
          step={500}
          value={amount}
          onValueChange={handleAmountChange}
        />
        <View style={styles.sliderLabels}>
          <Text style={styles.label}>0</Text>
          <Text style={styles.label}>1000</Text>
          <Text style={styles.label}>2000</Text>
        </View>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Məbləğ"
          style={styles.input}
          value={amount.toString()}
          mode="outlined"
        />
      </View>
      <Text style={{ color: 'black', left: 20, fontSize: 20, marginTop: 30 }}>Muddet</Text>
      <Slider
        style={{ width: 350, height: 40, marginLeft: 20, marginRight: 20 }}
        minimumValue={6}
        maximumValue={36}
        minimumTrackTintColor="blue"
        maximumTrackTintColor="#000000"
        step={6}
        value={amountM}
        onValueChange={handleAmountChangeM}
      />
      <View style={styles.sliderLabelsM}>
        <Text style={styles.label}>6</Text>
        <Text style={styles.label}>12</Text>
        <Text style={styles.label}>18</Text>
        <Text style={styles.label}>24</Text>
        <Text style={styles.label}>30</Text>
        <Text style={styles.label}>36</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          label="Muddet"
          style={styles.input}
          value={amountM.toString()}
          mode="outlined"
        />
      </View>
    </ScrollView>
  );
};

export default BuyCredit;

const styles = StyleSheet.create({
  picker: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderWidth: 2,
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  inputContainer: {
    position: 'relative',
    marginTop: 20,
    marginHorizontal: 20,
  },
  buttonContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 25,
    fontWeight: '600',
  },
  sliderLabels: {
    left: 20,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  sliderLabelsM: {
    left: 8,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 15,
    color: 'black',
  },
  input: {
    height: 40,
    color: 'black',
  },
});
