import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/common/Header';
import ComicList from './src/components/comic/ComicList';
import SeriesList from './src/components/series/SeriesList';
import EventList from './src/components/event/EventList';

export default class App extends React.Component {

  render() {
    const { container, text } = styles;

    return (
      <View style={container}>
        <Header headerText={'Marvel'} />
        <View>
          <Text style={text}>Comics</Text>
          <ComicList />
          <Text style={text}>Events</Text>
          <EventList />
          <Text style={text}>Series</Text>
          <SeriesList />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#201d1d'
  },
  text: {
    color: '#fff',
    marginTop: 10,
    marginLeft: 10,
    fontFamily: 'AmericanCaptain'
  }
});
