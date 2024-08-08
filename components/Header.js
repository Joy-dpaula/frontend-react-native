import { View, Text, StyleSheet } from 'react-native';


export default function Header() {
    return (
        <View style={styles.header}>

            <Text>Header</Text>

        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'burlywood'
    }
})