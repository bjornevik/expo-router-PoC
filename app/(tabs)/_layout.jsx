import { Tabs } from 'expo-router'

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{
        title: 'Hjem'
      }} />
      <Tabs.Screen name="account" options={{
        title: 'Konto'
      }} />
    </Tabs>
  )
}
