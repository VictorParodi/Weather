import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24º</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  textStyle: {
    textAlign: 'center',
    // conditional based on OS
    // fontFamily: Platform.OS === 'ios' ? 'AvenirNext-Regular' : 'Roboto'
    fontFamily: 'Roboto',
    ...Platform.select({
      ios: {
        fontFamily: 'AvenirNext-Regular'  
      }
    })
  },

  largeText: {
    fontSize: 44
  },

  smallText: {
    fontSize: 18
  }
});
