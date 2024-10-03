
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable } from 'react-native';
import CardAccount from './Card';
import { useLocalSearchParams } from 'expo-router';

export default function Content() {

  const [accounts, setAccounts] = useState([])
  const params = useLocalSearchParams()
  const newAccount = params?.newAccount

  // console.log(newAccount)
  // console.log(accounts)
  // if (newAccount && accounts.find(item => item?.id === newAccount?.id) > 0) {
  //   setAccounts([newAccount, ...accounts]);
  // }

  // newAccount && setAccounts([newAccount, ...accounts])

  // navigation.navigate('signup')

  useEffect(() => {
    const getAccounts = async () => {
      const response = await fetch('http://localhost:3000/account/list')
      if (response.ok) {
        const data = await response.json()
        console.log(data)
        setAccounts(data.accounts)
        return
      }
      console.log('Erro ao carregar accounts')
      return
    }

    getAccounts()
  }, [])


  return (
    <View style={styles.content}>

      {/* <Calc /> */}

      {accounts.length === 0 && <Text>Loading...</Text>}

      {
        accounts.map((account) =>
          <CardAccount
            key={account.id} id={account.id}
            service={account.service}
            imgUrl={account.logo_image}
            userName={account.username}
            pass={account}
            accounts={accounts}
            setAccounts={setAccounts}
          />
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  content: {
    gap: 10,
    //backgroundColor: "#545656",
    padding: 15
    //justifyContent: 'center',
    //alignItems: 'center'
  }
})