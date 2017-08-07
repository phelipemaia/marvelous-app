import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import ComicElement from './ComicElement';
import CacheRequest from '../../util/RequestCache';

export default class ComicList extends React.Component {
  constructor(props) {
    super(props);

    this.state = { loading: true, comics: [], offset: 0, limit: 10 };
  }

  componentWillMount() {
    this.makeRemoteRequest();
  }

  makeRemoteRequest = (discardCache = false) => {
    let url = `https://gateway.marvel.com:443/v1/public/comics?offset=${this.state.offset}&limit=${this.state.limit}`;

    CacheRequest.get('comics', url, this.state.offset, discardCache)
      .then(result => {
        let offset = result.offset;
        if (offset) {
          this.setState({comics: this.state.offset === 0 ? result : [...this.state.comics, ...result], offset: offset})
        } else {
          this.setState({comics: this.state.offset === 0 ? result : [...this.state.comics, ...result]})
        }
      })
      .catch(error => {
        console.error('Error on comics request ', error)
      });
  }

  handleLoadMore = (info) => {
    if (info.distanceFromEnd > 0) {
      this.setState({
          offset: this.state.offset + 10
        },
        () => {
          this.makeRemoteRequest();
        });
    }
  }

  render() {
    const { containerStyle } = styles;
    return (
      <FlatList data={this.state.comics} renderItem={({ item }) => (
        <ComicElement key={item.id} comic={item}></ComicElement>
      )} horizontal={true} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}
                style={containerStyle} onEndReached={this.handleLoadMore} onEndReachedThreshold={0.5}>
      </FlatList>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flexDirection: 'row'
  }
});