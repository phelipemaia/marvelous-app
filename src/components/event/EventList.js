import React from 'react';
import { ScrollView, StyleSheet  } from 'react-native';
import axios from 'axios';
import EventElement from './EventElement';

export default class EventList extends React.Component {
  state = { events: [] };

  componentWillMount() {
    axios.get('https://gateway.marvel.com:443/v1/public/events?apikey=18da4bb4057a8538e0cddd39633af3b7&hash=0ba2b6141949d9277554422a698c4549&ts=1501259144084')
      .then(response => this.setState({ events: response.data.data.results }));
  }

  renderEvents() {
    return this.state.events.map(event => <EventElement key={event.id} event={event}></EventElement>);
  }

  render () {
    const { containerStyle } = styles;
    console.log(this.state)
    return (
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
            style={containerStyle}>
        {this.renderEvents()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});