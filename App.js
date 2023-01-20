import ContactUs from './components/button';
import { StyleSheet, Text, View, Image, SafeAreaView, Button, ScrollView, TextInput } from 'react-native';
import Fonts from './constants/Fonts';
import NotifyMe from './components/NotifyMe';



export default function Header() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require('./assets/images/logo2.png')} />
        </View>
        <View>
          <ContactUs />
        </View>
      </View>
        <View style={styles.comingSoonBody}>
          <View style={styles.lineContainer}>
            <Image style={styles.line} source={require('./assets/images/line.png')} />
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>Bringing</Text>
              <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>Muslims Together</Text>
            </View>
              <View style={styles.storeContainer}>
                <Image style={styles.googlePlay} source={require('./assets/images/google-play.png')} />
                <Image style={styles.appleStore} source={require('./assets/images/apple-store.png')} />
              </View>
                <View>
                  <Image style={styles.landingImage2} source={require('./assets/images/landing-image-2.png')} />
                </View>
                <View style={styles.comingSoonBody}>
          <View style={styles.lineContainer}>
            <Image style={styles.line} source={require('./assets/images/line.png')} />
            <Text style={styles.comingSoonText}>Coming Soon</Text>
          </View>
            <View style={styles.bodyContainer}>
              <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>Get Notified</Text>
              <Text style={styles.bodyText}  adjustsFontSizeToFit={true}>When we Launch</Text>
            </View>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput style={styles.textInput}/>
            <NotifyMe />
          </View>
          <View style={styles.TextContainer}>
            <Text style={styles.spam}>Don't worry, we won't spam you :)</Text>
          </View>
            <View style={styles.landingImage1Container}>
              <Image style={styles.landingImage1} source={require('./assets/images/landing-image-1.png')} />
            </View>
            <View style={styles.socialContainer}>
                <Image style={styles.fbLogo} source={require('./assets/images/facebook.png')} />
                <Image style={styles.twLogo} source={require('./assets/images/twitter.png')} />
                <Image style={styles.igLogo} source={require('./assets/images/instagram.png')} />
                <Image style={styles.ttLogo} source={require('./assets/images/tiktok.png')} />
                <Image style={styles.ytLogo} source={require('./assets/images/youtube.png')} resizeMode="contain" />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
  },
  container: {
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  image: {
    width: 74,
    height: 15.82,
    marginLeft: 30
  },
  scrollview: {
    flex: 1
  },
  comingSoonBody: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 70,
  },
  comingSoonText: {
    textAlignVertical: 'center',
    fontStyle: 'Inter-Medium',
    fontSize: 12,
    fontWeight: '500',
    lineHeight: 15,
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
  },
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
  landingImage1Container: {
    paddingBottom: 140,
  },
  landingImage1: {
    width: 350,
    height: 395.89,
    alignItems: 'center',
    top: 36
  },
  socialContainer: {
    flexDirection: 'row',
    width: '60%',
    justifyContent: 'space-evenly',
    
  },
  fbLogo: {
    width: 24,
    height: 24,
    boxSize: 'border-box',
    borderWidth: 1,
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
});


 



