import { View, Text, StyleSheet } from 'react-native';

export default function Copyright () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Copyright © 2022 Soora. All rights reserved</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      fontStyle: 'Inter-Regular',
      fontSize: 12,
      fontWeight: '400',
      lineHeight: 15,
      alignItems: 'center',
      top: 18,
      paddingBottom: 17

    }
});