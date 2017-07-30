import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import ComicList from './src/components/ComicList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Marvel'} />
        <Text>Comics</Text>
        <ComicList />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
