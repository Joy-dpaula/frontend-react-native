import { View, Text, StyleSheet } from 'react-native';

export default function Content() {
    return (
        <View style={styles.content}>
            <Text>Footer</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    content: {
        flex: 8,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'chocolate'
      }
})