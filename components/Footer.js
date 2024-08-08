import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'coral'
    }
})