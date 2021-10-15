import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text>About Screen</Text>
      <Text>The App is my first built app from Scratch. It's way simple but made me a great satisfaction! 
        With the acquired knowledge I would continue creating more apps with advanced and dynamic functionalities.  </Text>
    </View>
  );
}