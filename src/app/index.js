import { StyleSheet, ScrollView, View, Text, ActivityIndicator } from 'react-native';
import { useEffect } from 'react';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Header from '../components/Header';
import { useRouter } from 'expo-router';
import { getObjectData } from '../utils/asyncStorage';
import { useLoginStore } from '../stores/useLoginStore';

export default function Init() {

  const router = useRouter()
  const { login } = useLoginStore()

  useEffect(() => {
    const checkUserLogged = async () => {
      await getObjectData('userLogged')
      if(userLogged){
        login(userLogged)
        router.replace('/home')
      } else {
        router.replace('/login')
      }
    }

    checkUserLogged()
    setTimeout(() => router.replace('/login'), 2000)
  }, [])

  return (
    <ScrollView style={styles.container}>

      <View style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }}>
        <Text style={{ fontsize: 30 }}>Inito</Text>
        <Text style={{ fontsize: 16, marginVertical:10 }}>Orgamize suas contas e senhas com o mypass</Text>

        <ActivityIndicator style={{marginVertical: 30}} />

        <Footer />
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  // container: {

  // }
})