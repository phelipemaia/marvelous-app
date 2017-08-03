import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from '../common/Card'
import CardSection from "../common/CardSection";

export default class ComicElement extends React.Component {
  render () {
    const { headerContentStyle, thumbnailStyle, titleText, titleContainer, priceContainer, priceText } = styles;

    return (
      <Card>
        <CardSection>
          <View>
            <Image style={thumbnailStyle}
                   source={{uri: this.props.comic.thumbnail.path.replace('http', 'https') + "." + this.props.comic.thumbnail.extension, cache: 'only-if-cached'}}>
              <View style={headerContentStyle}>
                <View style={titleContainer}>
                  <Text style={titleText}>{this.props.comic.title}</Text>
                </View>
                <View style={priceContainer}>
                  <Text style={priceText}>{'$' + this.props.comic.prices[0].price}</Text>
                </View>
              </View>
            </Image>
          </View>
        </CardSection>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  headerContentStyle: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,.6)'
  },
  thumbnailStyle: {
    height: 100,
    width: 100
  },
  titleContainer: {
    flex: 3,
    alignItems: 'center',
    marginTop: window.height/30
  },
  titleText: {
    fontSize: 10,
    color: '#fff',
    alignSelf: 'center',
    margin: 5
  },
  priceContainer: {
    flex: 3,
    alignItems: 'flex-end',
    justifyContent: 'flex-end'
  },
  priceText: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold'
  }
});