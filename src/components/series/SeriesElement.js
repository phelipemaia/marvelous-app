import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Card from '../common/Card'
import CardSection from "../common/CardSection";

export default class SeriesElement extends React.Component {
  render () {
    const { headerContentStyle, thumbnailStyle, titleText, titleContainer } = styles;

    return (
      <Card>
        <CardSection>
          <View>
            <Image style={thumbnailStyle}
                   source={{uri: this.props.serie.thumbnail.path + "." + this.props.serie.thumbnail.extension}}>
              <View style={headerContentStyle}>
                <View style={titleContainer}>
                  <Text style={titleText}>{this.props.serie.title}</Text>
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
    alignItems: 'flex-start',
    marginTop: window.height/30
  },
  titleText: {
    fontSize: 10,
    color: '#fff',
    margin: 5
  }
});