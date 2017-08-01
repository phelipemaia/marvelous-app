import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {
  render() {
    const { textStyle, viewStyle } = styles;

    return (
      <View style={viewStyle}>
        <Text style={textStyle}>{this.props.headerText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    backgroundColor: '#E23636',
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    paddingTop: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  },
  textStyle: {
    fontSize: 26,
    fontFamily: 'AmericanCaptain'
  }
});