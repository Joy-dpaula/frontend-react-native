import { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Button from '../components/Button';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useAccountStore } from '../stores/useAccountStore';

export default function Update() {

  const { updateAccount, accounts } = useAccountStore()
  const router = useRouter()
  const { id } = useLocalSearchParams()

  const account = accounts.find((item) => item.id === +id)

  const [txtServico, setTxtServico] = useState(account?.service || '')
  const [txtUsername, setTxtUsername] = useState(account?.username || '')
  const [txtPass, setTxtPass] = useState(account?.pass || '')
  const [txtImgUrl, setTxtImgUrl] = useState(account?.logo_image || '')

  const handleUpdateAccount = async () => {
    const account = {
      service: txtServico,
      username: txtUsername,
      logo_image: txtImgUrl,
      pass: txtPass,
      user_id: 1
    }

    const response = await fetch(`http://localhost:3000/account/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(account)
    })
    if (response.ok) {
      const data = await response.json()
      updateAccount(data.account)
      router.back()
      return
    }
    console.log('Erro ao carregar accounts')
    return
  }


  return (
    <View style={styles.container}>
      <Text>Serviço:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtServico}
        value={txtServico}
        placeholder='Digite o nome do serviço...'
        placeholderTextColor='#DDDDDD'
      />
      <Text>Username:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtUsername}
        value={txtUsername}
      />
      <Text>Password:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtPass}
        value={txtPass}
      />
      <Text>Logo URL:</Text>
      <TextInput
        style={styles.input}
        onChangeText={setTxtImgUrl}
        value={txtImgUrl}
        keyboardType='url'
      />
      <Button onPress={handleUpdateAccount}></Button>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    padding: 20
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