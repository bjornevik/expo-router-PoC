import { Tabs } from 'expo-router'
// import Home from './home'
// import Insights from './insights'
// import Invoice from './invoice'
// import Perks from './perks'
// import Account from './account'

export default () => {
  return (
    <Tabs>
      <Tabs.Screen name="home" options={{
        title: 'Hjem'
      }} />
      <Tabs.Screen name="insights" options={{
        title: 'Innsikt'
      }} />
      <Tabs.Screen name="invoice" options={{
        title: 'Faktura'
      }} />
      <Tabs.Screen name="perks" options={{
        title: 'Fordeler'
      }} />
      <Tabs.Screen name="account" options={{
        title: 'Konto'
      }} />
    </Tabs>
  )
}
