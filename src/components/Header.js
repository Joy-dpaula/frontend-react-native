import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'expo-image';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function Header() {
    return (
        <View style={styles.header}>

            <View style={styles.user}>

                <Image style={styles.avatar} source="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGvHy3DzxnhKL938aXhJCY57YqLEPB28gcSQcI0tE37cHFgVVCCXF8SfduMB8AfVOwOVo&usqp=CAU" />

                {/* <Image style={styles.avatar} source={require('../assets/125')} /> */}

                <Text style={styles.name}>Joyce de Paula</Text>
            </View>

            <MaterialCommunityIcons style={styles.menu} name="menu" size={24} color="black" />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: 'burlywood',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
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
        // width: 25,
        // height: 25,
    }
})

