import { View, Text, StyleSheet, Pressable } from 'react-native';
import { Image } from 'expo-image';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CardAccount({ id, service, userName, imgUrl, accounts, setAccounts }) {

    const handleDelete = async () => {
        const response = await fetch(`http://localhost:3000/account/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            const newAccounts = accounts.filter((item) => item.id !== id)
            setAccounts(newAccounts)
            return
        }
        console.log('Erro ao carregar accounts')
        return
    }

    return (
        <View style={styles.card}>

            <Image style={styles.logo} source={imgUrl} />

            <View style={styles.content}>

                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>

            </View>

            <Pressable onPress={handleDelete} style={styles.icon}>
                <Ionicons name="trash-bin-sharp" size={24} color="black" />
            </Pressable>

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
        alignItems: 'center',
        justifyContent: 'space-between',
        width: "100%"
    },
    logo: {
        width: 60,
        height: 60
    },
    content: {
        flex: 1,  // Ocupa o espaço disponível
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