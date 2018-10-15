import React, { Component } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

class SearchInput extends Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    autoCorrect={false}
                    placeholder={this.props.placeholder}
                    placeholderTextColor="white"
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    clearButtonMode="always"
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#666',
        height: 40,
        marginTop: 20,
        marginHorizontal: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },

    textInput: {
        flex: 1,
        color: 'white',
        width: 300
    }
});

export default SearchInput;