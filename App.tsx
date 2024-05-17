import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    Danfo: require('./assets/Danfo-Regular.ttf'),
  });

  console.log({ fontError })

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text>{JSON.stringify({ fontsLoaded, fontError }, null, 2)}</Text>
        <Text style={{ fontFamily: "Danfo" }}>Danfo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
