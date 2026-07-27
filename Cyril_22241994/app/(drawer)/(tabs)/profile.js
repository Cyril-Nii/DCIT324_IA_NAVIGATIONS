import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const router = useRouter();
  
  // Dummy data, this would normally come from state/context
  const profile = {
    name: "Cyril",
    index: "22241994",
    programme: "Computer Science",
    level: "300"
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Profile</Text>
      
      <Text style={{ marginBottom: 10, fontSize: 16 }}>Name: {profile.name}</Text>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>Index Number: {profile.index}</Text>
      <Text style={{ marginBottom: 10, fontSize: 16 }}>Programme: {profile.programme}</Text>
      <Text style={{ marginBottom: 20, fontSize: 16 }}>Level: {profile.level}</Text>
      
      <Button 
        title="Edit Profile" 
        onPress={() => router.push({
          pathname: '/edit-profile',
          params: { name: profile.name, bio: 'Student at UG', programme: profile.programme }
        })} 
      />
    </View>
  );
}
