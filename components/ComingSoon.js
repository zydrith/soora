import { View, Image, Text, StyleSheet } from 'react-native';

export default function ComingSoon () {
    return (
            <View style={styles.comingSoonBody}>
            <View style={styles.lineContainer}>
                <Image style={styles.line} source={require('../assets/images/line.png')} />
                <Text style={styles.comingSoonText}>Coming Soon</Text>
            </View>
                <View style={styles.bodyContainer}>
                    <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>Bringing</Text>
                    <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>Muslims Together</Text>
                </View>
                <View style={styles.storeContainer}>
                    <Image style={styles.googlePlay} source={require('../assets/images/google-play.png')} />
                    <Image style={styles.appleStore} source={require('../assets/images/apple-store.png')} />
                </View>
                    <View>
                        <Image style={styles.landingImage2} source={require('../assets/images/landing-image-2.png')} />
                    </View>
            </View>
    )
}

const styles = StyleSheet.create({
    comingSoonText: {
        textAlignVertical: 'center',
        fontStyle: 'Inter-Medium',
        fontSize: 12,
        fontWeight: '500',
        lineHeight: 15,
      },
      comingSoonBody: {
        backgroundColor: '#F6F2F5',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 70,
      },
      lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
      },
      line: {
        width: 17.7,
        height: 3,
        marginRight: 8
      },
      bodyText: {
        alignItems: 'flex-end',
        textAlign: 'center',
        fontStyle: 'Inter-ExtraBold',
        fontSize: 36,
        fontWeight: '800',
        lineHeight: 44,
        marginTop: 10,
      },
      bodyContainer: {
        width: 327,
        textAlignVertical: 'center',
      },
      storeContainer: {
        flexDirection: 'row',
        flex: 1,
        top: 24,
      },
      googlePlay: {
        width: 134.19,
        height: 38.8,
        right: 5
      },
      appleStore: {
        width: 118.83,
        height: 38.8,
        left: 10,
      },
      landingImage2: {
        width: 350,
        height: 395.89,
        alignItems: 'center',
        top: 30.2
      }
})