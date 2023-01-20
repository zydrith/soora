import ContactUs from './components/ContactUs';
import { StyleSheet, View, SafeAreaView, ScrollView, } from 'react-native';
import HorizontalLine from './constants/HorizontalLine';
import Copyright from './components/Copyright';
import Header from './components/Header';
import ComingSoon from './components/ComingSoon';
import ComingSoon2 from './components/ComingSoon2';
import Notified from './components/Notified';
import SocialMedia from './components/SocialMedia';

export default function App() {
  return (
    <SafeAreaView style={styles.safeAreaView}>
    <ScrollView style={styles.scrollview}>
      <View style={styles.container}>
        <View>
          <Header />
        </View>
        <View>
          <ContactUs />
        </View>
      </View>
      <View>
        <ComingSoon />
      </View>
      <View>
        <ComingSoon2 />
      </View>
        <Notified />
        <SocialMedia />
      <View>
        <HorizontalLine />
      </View>
      <View>
        <Copyright />
      </View>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#F6F2F5',
  },
  container: {
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
});


 



