import {StyleSheet, View, Image} from 'react-native';

export default function Header () {
    return (
        <View style={styles.container}>
          <View>
            <Image style={styles.image} source={require('../assets/images/logo2.png')} />
          </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F2F5',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
      },
      image: {
        width: 74,
        height: 15.82,
        marginLeft: 30
      }
});