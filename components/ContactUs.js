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

export default class ContactUs extends React.Component {
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
                { this.state.fontLoaded ? <Text style={styles.text}>Contact Us</Text> : null }
                <Image style={styles.image} source={require('../assets/images/contact-icon.png')} />
            </View>
        </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
    button: {
        borderRadius: 4,
        backgroundColor: "#0B0B0B",
        paddingTop: 10,
        paddingBottom: 10,
        paddingRight: 14,
        paddingLeft: 14,
        marginRight: 24,
        flexDirection: 'row',
        marginTop: 20
        
    },
    text: {
        color: 'white',
        fontFamily: 'Inter-Regular',
        fontSize: 10,
        lineHeight: 12,
        display: 'flex',
        alignItems: 'flex-end',
    },
    image: {
        width: 10,
        height: 10,
        marginLeft: 6
    }
});


