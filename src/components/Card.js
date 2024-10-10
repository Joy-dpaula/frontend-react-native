import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import { useRouter } from 'expo-router';

export default function CardAccount({ id, service, userName, imgUrl, pass, accounts, setAccounts }) {

    const router = useRouter()


    return (

        <Pressable onPress={() => router.push({ pathname: '/showPass', params: { id } })}>
            <View style={styles.card}>

                <View style={styles.content}>

                    <Text style={styles.service}>{service}</Text>
                    <Text style={styles.username}>{userName}</Text>

                </View>

            </View>

            <Image style={styles.logo} source={imgUrl} /></Pressable>
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
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    logo: {
        width: 60,
        height: 60
    },
    content: {
        flex: 1,  // Ocupa o espaço disponívelsssssfefe
        gap: 6
    },
    service: {
        fontSize: 17
    },
    username: {
        color: 'black'
    },
    icon: {
        padding: 10,
    }

})
