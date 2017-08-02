import React from 'react';
import { FlatList, StyleSheet  } from 'react-native';
import axios from 'axios';
import SeriesElement from './SeriesElement';

export default class StoriesList extends React.Component {
  state = { series: [] };

  componentWillMount() {
    axios.get('https://gateway.marvel.com:443/v1/public/series?apikey=18da4bb4057a8538e0cddd39633af3b7&hash=0ba2b6141949d9277554422a698c4549&ts=1501259144084')
      .then(response => this.setState({ series: response.data.data.results }));
  }

  renderSeries() {
    return this.state.series.map(serie => <SeriesElement key={serie.id} serie={serie}></SeriesElement>);
  }

  render () {
    const { containerStyle } = styles;
    return (
      <FlatList data={this.state.series} renderItem={({ item }) => (
        <SeriesElement key={item.id} serie={item}></SeriesElement>
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