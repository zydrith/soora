import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import * as Font from 'expo-font';

let font = ({
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-SemiBold': require('../assets/fonts/Inter-SemiBold.ttf'),
});

const loadFonts = async () => {
    await Font.loadAsync(font);
};

loadFonts();

export default function ContactUs() {
    return (
        <TouchableOpacity>
            <View style={styles.button}>
                <Text style={styles.text}>Contact Us</Text>
                <Image style={styles.image} source={require('../assets/images/contact-icon.png')} />
            </View>
        </TouchableOpacity>
    )
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
    
})

