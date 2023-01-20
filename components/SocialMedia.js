import {View, StyleSheet, Image} from 'react-native';

export default function SocialMedia () {
    return (
        <View style={styles.socialContainer}>
              <View style={styles.logoContainer}>
                <Image style={styles.fbLogo} source={require('../assets/images/facebook.png')} />
              </View>
              <View style={styles.logoContainer}>
                <Image style={styles.twLogo} source={require('../assets/images/twitter.png')} />
              </View>
              <View style={styles.logoContainer}>
                <Image style={styles.igLogo} source={require('../assets/images/instagram.png')} />
              </View>
              <View style={styles.logoContainer}>
                <Image style={styles.ttLogo} source={require('../assets/images/tiktok.png')} />
              </View>
              <View style={styles.logoContainer}>
                <Image style={styles.ytLogo} source={require('../assets/images/youtube.png')} resizeMode="contain" />
              </View>
            </View>
    )
}

const styles = StyleSheet.create({
    socialContainer: {
        flexDirection: 'row',
        width: '80%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        alignSelf: 'center',
        
      },
      logoContainer : {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 100,
        padding: 8
      },
      fbLogo: {
        width: 24,
        height: 24,
      },
      twLogo: {
        width: 24,
        height: 24
      },
      igLogo: {
        width: 24,
        height: 24
      },
      ttLogo: {
        width: 24,
        height: 24
      },
      ytLogo: {
        width: 24,
        height: 24
      },
})