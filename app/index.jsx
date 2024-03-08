import { Link } from 'expo-router'
import { View, Text, Pressable } from 'react-native'


export default function Page() {
  return (
    <View>
      <Link href="/home" asChild>
        <Pressable style={{ marginTop: 16, backgroundColor: 'red' }}>
          <Text style={{ color: 'white' }}>Home</Text>
        </Pressable>
      </Link>
      <Text>INDEX</Text>
    </View>);
}
