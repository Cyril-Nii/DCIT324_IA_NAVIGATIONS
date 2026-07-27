import { View, Text, Button, TextInput } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { useState } from 'react';

export default function EditProfileScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();
  
  const [name, setName] = useState(params.name?.toString() || '');
  const [bio, setBio] = useState(params.bio?.toString() || '');
  const [programme, setProgramme] = useState(params.programme?.toString() || '');

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Edit Profile</Text>
      
      <Text>Name:</Text>
      <TextInput value={name} onChangeText={setName} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      
      <Text>Bio:</Text>
      <TextInput value={bio} onChangeText={setBio} style={{ borderWidth: 1, marginBottom: 10, padding: 8 }} />
      
      <Text>Programme:</Text>
      <TextInput value={programme} onChangeText={setProgramme} style={{ borderWidth: 1, marginBottom: 20, padding: 8 }} />
      
      <Button title="Save" onPress={() => {
        router.back();
      }} />
    </View>
  );
}
