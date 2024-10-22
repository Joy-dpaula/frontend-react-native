import { View, Text, StyleSheet } from 'react-native';

export default function Footer() {
    return (
        <View style={styles.footer}>
            <Text>Copyright©</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: {
        padding: 15,
        justifyContent: 'center',
        alignItems: 'center'
    }
})