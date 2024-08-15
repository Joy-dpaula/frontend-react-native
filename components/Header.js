import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import { IoMenu } from "react-icons/io5";

export default function Header() {
    return (
        <View style={styles.header}>

            <View style={styles.user}><Image style={styles.avatar} source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvHy3DzxnhKL938aXhJCY57YqLEPB28gcSQcI0tE37cHFgVVCCXF8SfduMB8AfVOwOVo&usqp=CAU" />
                <Text style={styles.name}>Joce de Paula</Text>
            </View>

            <IoMenu style={styles.menu}/>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'burlywood',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    user: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    }, 
    name: {
      fontWeight: '600',
      fontSize: 18
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    menu: {
        width: 25,
        height: 25,
        padding: 10,
    }
})

