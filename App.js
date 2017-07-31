import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import ComicList from './src/components/comic/ComicList';
import StoriesList from './src/components/stories/SeriesList';
import EventList from './src/components/event/EventList';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Header headerText={'Marvel'} />
        <Text>Comics</Text>
        <ComicList />
        <Text>Events</Text>
        <EventList />
        <Text>Stories</Text>
        <StoriesList />
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
