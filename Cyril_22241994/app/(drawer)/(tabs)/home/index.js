import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function FeedScreen() {
  const router = useRouter();
  
  const events = [
    { id: '1', title: 'Tech Fair 2026', date: 'Nov 5, 2026', description: 'Join us for the annual tech fair showcasing student projects.' },
    { id: '2', title: 'Career Fair', date: 'Nov 12, 2026', description: 'Meet with top employers in the industry.' },
    { id: '3', title: 'Hackathon', date: 'Nov 20, 2026', description: '24-hour coding challenge. Prizes to be won!' },
    { id: '4', title: 'Alumni Mixer', date: 'Dec 1, 2026', description: 'Network with graduates from the computer science department.' },
    { id: '5', title: 'End of Semester Party', date: 'Dec 15, 2026', description: 'Celebrate the end of the semester with music and food.' },
  ];

  return (
    <ScrollView style={{ flex: 1, padding: 20 }}>
      {events.map((event) => (
        <TouchableOpacity 
          key={event.id}
          style={{ marginBottom: 15, padding: 15, borderWidth: 1, borderRadius: 8 }}
          onPress={() => router.push({
            pathname: '/(drawer)/(tabs)/home/[id]',
            params: { id: event.id, title: event.title, date: event.date, description: event.description }
          })}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{event.title}</Text>
          <Text style={{ color: 'gray' }}>{event.date}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
