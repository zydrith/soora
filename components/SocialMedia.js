import {View, StyleSheet, Image} from 'react-native';

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
});

const SocialIcon = ({ logo, logoStyle, containerStyle }) => {
return (
  <View style={containerStyle}>
    <Image style={logoStyle} source={logo} />
  </View>
);
}

const socialMediaIcons = [
{
  name: 'Facebook',
  logo: require('../assets/images/facebook.png'),
  logoStyle: styles.fbLogo
},
{
  name: 'Twitter',
  logo: require('../assets/images/twitter.png'),
  logoStyle: styles.twLogo
},
{
  name: 'Instagram',
  logo: require('../assets/images/instagram.png'),
  logoStyle: styles.igLogo
},
{
  name: 'TikTok',
  logo: require('../assets/images/tiktok.png'),
  logoStyle: styles.ttLogo
},
{
  name: 'Youtube',
  logo: require('../assets/images/youtube.png'),
  logoStyle: styles.ytLogo
},
];

const SocialMedia = () => {
return (
  <View style={styles.socialContainer}>
    {socialMediaIcons.map(icon => (
      <SocialIcon
        key={icon.name}
        logo={icon.logo}
        logoStyle={icon.logoStyle}
        containerStyle={styles.logoContainer}
      />
    ))}
  </View>
);
}

export default SocialMedia;
