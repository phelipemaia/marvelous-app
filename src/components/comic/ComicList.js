import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import ComicElement from './ComicElement';
import CacheRequest from '../../util/CacheRequest';

export default class ComicList extends React.Component {
  state = { comics: [] };

  componentWillMount() {
    CacheRequest.get('comics', 'https://gateway.marvel.com:443/v1/public/comics')
      .then(result => {
        this.setState({ comics: result })
      })
      .catch(error => {
        console.error('Error on comics request ', error)
      });
  }

  renderComics() {
    return this.state.comics.map(comic => <ComicElement key={comic.id} comic={comic}></ComicElement>);
  }

  render () {
    const { containerStyle } = styles;
    console.log(this.state)
    return (
      <FlatList data={this.state.comics} renderItem={({ item }) => (
        <ComicElement key={item.id} comic={item}></ComicElement>
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