import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';

export default function CardAccount() {
    return (
        <View style={styles.card}>

            <Image style={styles.logo} source="https://img.freepik.com/vetores-premium/novo-logotipo-do-twitter-novos-icones-do-twitter-novo-logotipo-do-twitter-x-2023_929078-218.jpg" />

            <View style={styles.content}>
                <Text style={styles.service}>X</Text>
                <Text style={styles.username}>joycedpaula136@gmail.com</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        borderStyle: 'solid',
        borderColor: '#EEEEEE',
        borderWidth: 1,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center'
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