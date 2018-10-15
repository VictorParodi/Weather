import React from 'react';
import { StyleSheet, Text, Platform, KeyboardAvoidingView } from 'react-native';

import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <Text style={[styles.largeText, styles.textStyle]}>San Francisco</Text>
        <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
        <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

        <SearchInput placeholder="Type a city" />
      </KeyboardAvoidingView>
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
  },
});
