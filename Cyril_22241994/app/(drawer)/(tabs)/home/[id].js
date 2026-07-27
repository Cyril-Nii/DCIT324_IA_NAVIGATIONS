import { View, Text, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function EventDetailsScreen() {
  const params = useLocalSearchParams();
  const router = useRouter();

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{params.title}</Text>
      <Text style={{ color: 'gray', marginBottom: 20 }}>{params.date}</Text>
      
      <Text style={{ fontSize: 16, marginBottom: 30 }}>{params.description}</Text>
      
      <Button title="Go Back" onPress={() => router.back()} />
    </View>
  );
}
