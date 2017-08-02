import React from 'react';
import { StyleSheet, FlatList } from 'react-native';
import EventElement from './EventElement';
import CacheRequest from '../../util/CacheRequest';

export default class EventList extends React.Component {
  state = { events: [] };

  componentWillMount() {
    CacheRequest.get('comics', 'https://gateway.marvel.com:443/v1/public/events')
      .then(result => {
        this.setState({ events: result })
      })
      .catch(error => {
        console.error('Error on comics request ', error)
      });
  }

  renderEvents() {
    return this.state.events.map(event => <EventElement key={event.id} event={event}></EventElement>);
    //<EventElement key={item.id} event={item} />
  }

  render () {
    const { containerStyle } = styles;
    return (
      <FlatList data={this.state.events} renderItem={({ item }) => (
        <EventElement key={item.id} event={item}></EventElement>
      )} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                style={containerStyle}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});