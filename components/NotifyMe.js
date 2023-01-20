import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Font from 'expo-font';

const font = {
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
    'Inter-ExtraBold': require('../assets/fonts/Inter-ExtraBold.ttf'),
};

export default class NotifyMe extends React.Component {
  state = {
    fontLoaded: false,
  };

  async componentDidMount() {
    await Font.loadAsync(font);
    this.setState({ fontLoaded: true });
  }

  render() {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                { this.state.fontLoaded ? <Text style={styles.text}>Notify Me</Text> : null }
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 100,
        backgroundColor: "#0B0B0B",
        width: 100,
        height: 36,
        position: 'absolute',
        right: 3.55,
        top: 4.25,

    },
    text: {
        color: 'white',
        fontStyle: 'Inter-SemiBold',
        fontWeight: '600',
        fontSize: 12,
        lineHeight: 15,
        top: 10.5,
        bottom: 10.5,
        left: 21.5,
        right: 21.5
    }
});