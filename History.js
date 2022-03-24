import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function History({ route }) {
  const navigationOptions = {
    title: 'History',
  };

  const { history } = route.params;

  return (
    <View style={styles.listcontainer}>
            <Text style= {{fontSize: 25}}>History</Text>
            <FlatList
                data={history}
                renderItem={({item}) => <Text style= {{fontSize: 20}}>{item.key}</Text>}
            />
    </View>
    );
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
      flex: 1,
      width: 150,
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'space-around',
      padding: 10,
    },
    listcontainer: {
      flex: 4,
      // width: 150,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      paddingBottom: 30,
    },
  });