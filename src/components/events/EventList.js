import React from 'react';
import { View, StyleSheet  } from 'react-native';
import axios from 'axios';
import EventElement from './EventElement';

export default class EventList extends React.Component {
  state = { comics: [] };

  componentWillMount() {
    axios.get('https://gateway.marvel.com:443/v1/public/events?apikey=18da4bb4057a8538e0cddd39633af3b7&hash=0ba2b6141949d9277554422a698c4549&ts=1501259144084')
      .then(response => this.setState({ events: response.data.data.results }));
  }

  renderEvents() {
    return this.state.event.map(event => <EventElement key={event.id} event={event}></EventElement>);
  }

  render () {
    const { containerStyle } = styles;
    console.log(this.state)
    return (
      <View style={containerStyle}>
        {this.renderEvents()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});