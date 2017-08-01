import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class CardSection extends React.Component {
  render() {
    const { containerStyle } = styles;

    return (
      <View style={containerStyle}>
        {this.props.children}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    justifyContent: 'flex-start',
    flexDirection: 'row',
    position: 'relative'
  }
});