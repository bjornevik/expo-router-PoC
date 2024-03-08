import { Text } from 'react-native'

export default function Page() {
  return (
    <View>
      <Link href="/" asChild>
        <Pressable style={{ marginTop: 16, backgroundColor: 'red' }}>
          <Text style={{ color: 'white' }}>INDEX</Text>
        </Pressable>
      </Link>
      <Text>INDEX</Text>
    </View>);
}
