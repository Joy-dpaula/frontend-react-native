
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable} from 'react-native';
import CardAccount from './Card';
// import Button from './Button';
import { Link, useNavigation } from 'expo-router';

export default function Content() {

    const [accounts, setAccounts] = useState([])
    const navigation = useNavigation()

    navigation.navigate('signup')
   
     useEffect(() => {
          const getAccounts = async () => {
              const response = await fetch('http://localhost:3000/account/list')
              if(response.ok){
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
  
          
          { accounts.length === 0 && <Text>Loading...</Text>}

          <Link href="/signup">+ Novo Serviço</Link>
  
          {
            accounts.map( (account) => 
              <CardAccount
                key={account.id} id={account.id}
                service={account.service}
                imgUrl={account.logo_image}
                userName={account.username}
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