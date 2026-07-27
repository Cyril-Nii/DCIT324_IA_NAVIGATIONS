import { View, Text, ScrollView } from 'react-native';

export default function HelpScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Help & Support</Text>
      
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Q: How do I reset my password?</Text>
        <Text>A: Go to settings and click on "Reset Password".</Text>
      </View>
      
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Q: Where can I find my grades?</Text>
        <Text>A: Check the MIS Web platform.</Text>
      </View>
      
      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Q: How do I register for courses?</Text>
        <Text>A: Use the STS portal during the registration period.</Text>
      </View>
    </ScrollView>
  );
}
