import { View, Text, ScrollView } from 'react-native';

export default function CoursesScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Enrolled Courses</Text>
      
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>DCIT324</Text>
        <Text>Mobile Application Development (3 credits)</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>DCIT301</Text>
        <Text>Operating Systems (3 credits)</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>DCIT303</Text>
        <Text>Computer Networks (3 credits)</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>DCIT305</Text>
        <Text>Database Fundamentals (3 credits)</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>MATH323</Text>
        <Text>Complex Analysis (3 credits)</Text>
      </View>
    </ScrollView>
  );
}
