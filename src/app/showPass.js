import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import Button from '../components/Button';
import { useLocalSearchParams, useRouter } from 'expo-router'
import { useAccountStore } from '../stores/useAccountStore';
import Ionicons from '@expo/vector-icons/Ionicons'
import AntDesign from '@expo/vector-icons/AntDesign';;
import { Image } from 'expo-image';

export default function ShowPass() {

    const { id } = useLocalSearchParams()
    const { accounts, deleteAccount } = useAccountStore()
    const router = useRouter()

    const account = accounts.find((item) => item.id === +id)

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
            deleteAccount(+id)
            router.back()
            return
        }
        console.log('Erro ao carregar accounts')
        return
    }


    return (
        <View style={{ padding: 20 }}>
            <View style={styles.card}>
                <Image
                    style={styles.logo}
                    source={account?.logo_image}
                />
                <View style={styles.content}>
                    <Text style={styles.service}>{account?.service}</Text>
                    <Text style={styles.username}>{account?.username}</Text>
                </View>
            </View>

            <Button>Copiar Senha</Button>

            <View style={styles.view}>  <Pressable onPress={handleDelete} style={styles.icon}>
                <Ionicons name="trash-bin-sharp" size={24} color="black" />
            </Pressable>

                <Pressable style={styles.update} onPress={() => router.push({ pathname: 'update', params: { id } })}>
                    <AntDesign name="edit" size={24} color="black" />
                </Pressable></View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        flexDirection: 'row',
        gap: 15,
        borderRadius: 10,
        alignItems: 'center'
    }, 
    view: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 30,
      padding: 10

    },
    update: {
        flexDirection: 'row',
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
        color: '#777777'
    },
    input: {
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: '#444444',
        paddingHorizontal: 10,
        paddingVertical: 6,
        marginVertical: 5,
        borderRadius: 5
    }
})