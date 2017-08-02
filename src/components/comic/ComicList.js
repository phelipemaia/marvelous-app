import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import ComicElement from './ComicElement';
import CacheRequest from '../../util/CacheRequest';

export default class ComicList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, comics: [], offset: 0, limit: 20 };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = (discardCache = false) => {
    let url = `https://gateway.marvel.com:443/v1/public/comics?offset=${this.state.offset}&limit=${this.state.limit}`;

    CacheRequest.get('comics', url, discardCache)
      .then(result => {
        this.setState({ comics: result })
      })
      .catch(error => {
        console.error('Error on comics request ', error)
      });
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
      <FlatList data={this.state.comics} renderItem={({ item }) => (
        <ComicElement key={item.id} comic={item}></ComicElement>
      )} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                style={containerStyle} onEndReached={this.handleLoadMore} onEndThreshold={50}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});