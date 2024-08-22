import { View, Text, StyleSheet } from 'react-native';
import CardAccount from './Card';

export default function Content() {

    const accounts = [
        {
            id: 1,
            service: "Gmail",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/281/281769.png",
            userName: "joycedpaula136@gmail.com"
        },
        {
            id: 1,
            service: "Github",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
            userName: "Joy-dpaula"
        },
        {
            id: 1,
            service: "Instagram",
            imgUrl: "https://cdn-icons-png.flaticon.com/512/2111/2111463.png",
            userName: "Joy_dpaula"
        },
        {
            id: 1,
            service: "X",
            imgUrl: "https://cdn-icons-png.flaticon.com/256/5968/5968830.png",
            userName: "jujujoba"
        },
        
    ]

    return (
        <View style={styles.content}>

            {
                accounts.map((account) => 

                    <CardAccount key={account.id}
                    service={account.service}imgUrl={account.imgUrl} userName={account.userName}/>
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