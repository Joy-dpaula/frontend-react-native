import { StyleSheet, ScrollView } from 'react-native';
import Footer from '../components/Footer';
import Content from '../components/Content';
import Header from '../components/Header';

export default function Home() {
  return (
    <ScrollView style={styles.container}>


      <Header />

      <Content />

      <Footer />

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})