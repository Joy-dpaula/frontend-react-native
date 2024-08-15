import { View, Text, StyleSheet } from 'react-native';
import CardAccount from './Card';

export default function Content() {
    return (
        <View style={styles.content}>
            <Text> 
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
                <CardAccount />
            </Text>
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