import { StyleSheet, Text, View } from 'react-native';
import Footer from './components/Footer';
import Content from './components/Content';
import Header from './components/Header';

export default function App() {
  return (
    // <>
    <View style={styles.container}>

      <Header />

      <Content />

      <Footer />

    </View>
    // </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})