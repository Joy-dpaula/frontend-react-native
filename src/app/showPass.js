import { useState } from 'react'
import { View, Text, StyleSheet, TextInput} from 'react-native';
import Button from '../components/Button';
import { useNavigation } from 'expo-router';

export default function ShowPass() {

    return (
        <View style={styles.card}>

            <Image style={styles.logo} source={imgUrl} />

            <View style={styles.content}>

                <Text style={styles.service}>{service}</Text>
                <Text style={styles.username}>{userName}</Text>

            </View>

            <TextInput style={styles.input} value={teste} />

            <Button>Copiar Senha</Button>

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
