import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

//import database from "./src/config/firebaseconfig"; apenas retirar do comentário para usar a importação

export default function App() {
  return (
    <View style={styles.container}>
      <Text>My app Success!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
