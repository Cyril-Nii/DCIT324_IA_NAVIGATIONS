import { View, Text } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>Campus Connect</Text>
      <Text style={{ marginBottom: 20 }}>A simple UG-style student app for the navigation lab.</Text>
      <Text style={{ fontSize: 18 }}>Cyril - 22241994</Text>
    </View>
  );
}
