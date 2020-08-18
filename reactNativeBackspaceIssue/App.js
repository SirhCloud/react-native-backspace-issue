/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TextInput
        placeholder="INSERT HERE!"
        onChange={() => {
          console.log("1: onChange");
        }}
        onChangeText={() => {
          console.log("2: onChangeText");
        }}
        onKeyPress={() => {
          console.log("3: onKeyPress");
        }}
      />
    </View>
  );
}
