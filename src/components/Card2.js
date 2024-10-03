import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import AntDesign from '@expo/vector-icons/AntDesign';

export default function CardAccount({ service, userName, imgUrl}){

    return (
        <View style={styles.card}>

            <Image style={styles.logo} source={imgUrl} />

            <View style={styles.content}>
                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>
            </View>

            <AntDesign style={styles.logo} name="pluscircleo" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginTop: 10,
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center',
        width: "100%",
        shadowRadius: 6
    },
    logo: {
       width: 60,
       height: 60
    }, 
    content: {
        gap: 6
    },
    service: {
       fontSize: 17
    },
    username: {
        color: 'black'
    }
})