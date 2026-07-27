import { View, Text, ScrollView } from 'react-native';

export default function TimetableScreen() {
  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Class Timetable</Text>
      
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Monday</Text>
        <Text>07:30 AM - DCIT301 - NBB1</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Tuesday</Text>
        <Text>09:30 AM - DCIT303 - NBB2</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Wednesday</Text>
        <Text>11:30 AM - DCIT305 - JQB1</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Thursday</Text>
        <Text>01:30 PM - MATH323 - JQB2</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Friday</Text>
        <Text>03:30 PM - DCIT324 - NNN1</Text>
      </View>
    </ScrollView>
  );
}
