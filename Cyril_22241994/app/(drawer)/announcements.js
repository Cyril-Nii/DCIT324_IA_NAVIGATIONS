import { View, Text } from 'react-native';

export default function AnnouncementsScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Announcements</Text>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Registration Deadline</Text>
        <Text style={{ color: 'gray' }}>Oct 1, 2026</Text>
        <Text>Please complete your course registration.</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Midterm Exams</Text>
        <Text style={{ color: 'gray' }}>Oct 15, 2026</Text>
        <Text>Midterm schedule has been posted.</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Campus Event</Text>
        <Text style={{ color: 'gray' }}>Nov 5, 2026</Text>
        <Text>Join us for the annual tech fair.</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Library Hours</Text>
        <Text style={{ color: 'gray' }}>Nov 10, 2026</Text>
        <Text>Library is now open 24/7.</Text>
      </View>
      <View style={{ marginBottom: 15 }}>
        <Text style={{ fontWeight: 'bold' }}>Holiday Notice</Text>
        <Text style={{ color: 'gray' }}>Dec 1, 2026</Text>
        <Text>Campus will be closed for the holiday.</Text>
      </View>
    </View>
  );
}
