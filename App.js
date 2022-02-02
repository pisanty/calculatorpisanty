import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [result, setResult] = React.useState(0);

  const [num1, setNum1] = React.useState(0);

  const [num2, setNum2] = React.useState(0);


  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style= {{fontSize: 18}}>Result = {result}</Text>
        <TextInput
          style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
          value = {num1}
          onChangeText = {text => setNum1(text)}
          keyboardType = 'numeric'
        />
        <TextInput
          style = {{width: 200, borderColor: 'gray', borderWidth: 1}}
          value = {num2}
          onChangeText = {text => setNum2(text)}
          keyboardType = 'numeric'
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title = " + "  onPress={() => setResult(parseFloat(num1)  + parseFloat(num2))} />
        <Button title = " - "  onPress={() => setResult(parseFloat(num1)  - parseFloat(num2))}/>
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 5,
    width: 80,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
  },
});
