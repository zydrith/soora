import {View, Image, Text, StyleSheet, TextInput} from 'react-native';
import NotifyMe from './NotifyMe';

export default function Notified () {
    return (
        <View>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}/>
                <NotifyMe />
            </View>
            <View style={styles.TextContainer}>
                <Text style={styles.spam}>Don't worry, we won't spam you :)</Text>
            </View>
                <View style={styles.landingImage1Container}>
                <Image style={styles.landingImage1} source={require('../assets/images/landing-image-1.png')} />
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    textInputContainer: {
        top: 16.75,
        flexDirection: 'row',
      },
      textInput: {
        boxSize: 'border-box',
        width: 350,
        height: 45,
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 100,
        left: 20,
        right: 20,
        padding: 20,
        flex: 1,
        marginRight: 20,
        marginLeft: 20
        
        
      },
      TextContainer: {
        top: 24,
       
      },
      spam: {
        fontStyle: 'Inter-Regular',
        fontWeight: '400',
        fontSize: 12,
        lineHeight: 15,
        textAlign: 'center',
        marginTop: 4,
      },
      landingImage1: {
        width: 350,
        height: 395.89,
        alignItems: 'center',
        top: 36,
        alignSelf: 'center',
      },
      landingImage1Container: {
        paddingBottom: 140,
      },
})