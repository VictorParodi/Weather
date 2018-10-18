import React from 'react';
import {
  StyleSheet,
  Text,
  Platform,
  KeyboardAvoidingView,
  ImageBackground,
  View
} from 'react-native';

import getImageForWeather from './utils/getImageForWeather';
import SearchInput from './components/SearchInput';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: 'San Franco'
    }
  }


  handleUpdateLocation = (city) => {
    this.setState({ location: city });
  }

  render() {
    const { location } = this.state;

    return (
      <KeyboardAvoidingView style={styles.container} behavior="padding">
        <ImageBackground
          source={getImageForWeather('Clear')}
          style={styles.imageContainer}
          imageStyle={styles.image}
        >
          <View style={styles.detailsContainer}>
            <Text style={[styles.largeText, styles.textStyle]}>{location}</Text>
            <Text style={[styles.smallText, styles.textStyle]}>Light Cloud</Text>
            <Text style={[styles.largeText, styles.textStyle]}>24º</Text>

            <SearchInput
              placeholder="Type a city"
              onSubmit={this.handleUpdateLocation}
            />
          </View>
        </ImageBackground>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34495E',
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
    }),
    color: 'white'
  },

  largeText: {
    fontSize: 44
  },

  smallText: {
    fontSize: 18
  },

  imageContainer: {
    flex: 1
  },

  image: {
    flex: 1,
    height: null,
    width: null,
    resizeMode: 'cover'
  },

  detailsContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingHorizontal: 20
  }
});
