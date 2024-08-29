
import { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CardAccount from './Card2';

export default function Content() {

    const [accounts, setAccounts] = useState([])

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


            { accounts.length === 0 && <Text>Loading...</Text>}

            {
                accounts.map((account) => 

                    <CardAccount key={account.id}
                    service={account.service}imgUrl={account.logo_image} userName={account.username}/>
                )
            }

        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        padding: 15
        // justifyContent: 'center',
        // alignItems: 'center',
      }
})