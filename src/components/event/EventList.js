import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import EventElement from './EventElement';
import CacheRequest from '../../util/CacheRequest';

export default class EventList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, comics: [], offset: 0, limit: 10 };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = (discardCache = false) => {
    let url = `https://gateway.marvel.com:443/v1/public/events?offset=${this.state.offset}&limit=${this.state.limit}`;

    // CacheRequest.get('events', url, this.state.offset, discardCache)
    //   .then(result => {
    //     this.setState({ events: result })
    //   })
    //   .catch(error => {
    //     console.error('Error on events request ', error)
    //   });
  }

  handleLoadMore = () => {
    this.setState({
        offset: this.state.offset + 20
      },
      () => {
        this.makeRemoteRequest();
      });
  }

  render() {
    const { containerStyle } = styles;
    return (
      <FlatList data={this.state.events} renderItem={({ item }) => (
        <EventElement key={item.id} event={item}></EventElement>
      )} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                style={containerStyle} onEndReached={this.handleLoadMore} onEndThreshold={50} keyExtractor={(item, index) => item.id}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});