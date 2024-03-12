import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/button';
import { Link } from 'expo-router';

export default Home = () => {
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Hjem</Text>
      <Link href="smartcharging" asChild>
        <Button buttonText="smartcharging" />
      </Link>
      <Link href="accountinfo" asChild>
        <Button buttonText="accountinfo" />
      </Link>
    </View>
  );
}
