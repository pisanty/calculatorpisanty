import React from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function Calculator({ navigation }) {
  const [result, setResult] = React.useState(0);
  const [num1, setNum1] = React.useState('');
  const [num2, setNum2] = React.useState('');
  const [history, setHistory] = React.useState([]);

  const calcSum = () => {
    const sum = parseFloat(num1) + parseFloat(num2);
    setResult(sum);
    setHistory([...history, {key: `${num1} + ${num2} = ${sum}`}]);
    setNum1('');
    setNum2('');
  }

  const calcSub = () => {
    const sub = parseFloat(num1) - parseFloat(num2);
    setResult(sub);
    setHistory([...history, {key: `${num1} - ${num2} = ${sub}`}]);
    setNum1('');
    setNum2('');
  }

  //const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style= {{fontSize: 22}}>Result: {result.toFixed(2)}</Text>
        <TextInput
          keyboardType = 'numeric'
          style = {{fontSize: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {num1 => setNum1(num1)}
          value = {String(num1)}
        />
        <TextInput
          keyboardType = 'numeric'
          style = {{fontSize: 20, width: 200, borderColor: 'gray', borderWidth: 1}}
          onChangeText = {num2 => setNum2(num2)}
          value = {String(num2)}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title = " + "  onPress={calcSum} />
        <Button title = " - "  onPress={calcSub} />
        <Button
          title="History"
          onPress={() => navigation.navigate('History', {history: history,})}
        />
      </View>
      </View>
  )
}



     

const styles = StyleSheet.create({
  container: {
    flex: 2,
    marginTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  buttonContainer: {
    flex: 2,
    width: 150,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    padding: 20,
  },
  listcontainer: {
    flex: 4,
    width: 150,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 30,
  },
});
  