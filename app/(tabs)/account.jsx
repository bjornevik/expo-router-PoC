import React from 'react';
import { View, Text } from 'react-native';
import Button from '../../components/button';
import { Link } from 'expo-router';

export default Perks = () => {
  return (
    <View style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
      <Text>Konto</Text>
      <Link href="accountinfo" asChild>
        <Button buttonText="accountinfo" />
      </Link>
    </View>
  );
}
