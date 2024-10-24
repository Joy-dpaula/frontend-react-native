import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Header from '../components/Header';
import Button from '../components/Button';
import { useRouter } from 'expo-router';

export default function Login() {

    const router = useRouter()

    return (
        <ScrollView style={styles.container}>

            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Text style={{
                    fontSize: 25,
                    padding: 20
                }}>Login</Text>

                <Button onPress={() => router.push('/signup')}>Criar conta</Button>
                <Footer />
            </View>

        </ScrollView>
    );
}

const styles = StyleSheet.create({
    // container: {

    // }
})