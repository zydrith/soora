import ContactUs from './components/button';
import { StyleSheet, Text, View, Image, SafeAreaView, Button } from 'react-native';


export default function Header() {
  return (
      <View style={styles.container}>
        <View>
          <Image style={styles.image} source={require('./assets/images/logo2.png')} />
        </View>
        <View>
          <ContactUs />
        </View>
      </View>
      
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#FDFDFD',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  imageContainer: {
    position: 'absolute',
    left: "0%",
    right: "0%",
    top: "0%",
    bottom: "0%",
  },

  image: {
    width: 74,
    height: 15.82,
    marginLeft: 20
  }

})
