/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, TextInput, Text } from 'react-native';

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
      <Text>Letter</Text>
      <TextInput
        value="a"
        onChange={() => {
          console.log("Letter: onChange");
        }}
        onChangeText={() => {
          console.log("Letter: onChangeText");
        }}
        onKeyPress={() => {
          console.log("Letter: onKeyPress");
        }}
      />
      <Text>Number</Text>
      <TextInput
        value="1"
        onChange={() => {
          console.log("Number: onChange");
        }}
        onChangeText={() => {
          console.log("Number: onChangeText");
        }}
        onKeyPress={() => {
          console.log("Number: onKeyPress");
        }}
      />
      <Text>Space</Text>
      <TextInput
        value=" "
        onChange={() => {
          console.log("Space: onChange");
        }}
        onChangeText={() => {
          console.log("Space: onChangeText");
        }}
        onKeyPress={() => {
          console.log("Space: onKeyPress");
        }}
      />
      <Text>Symbol</Text>
      <TextInput
        value="!"
        onChange={() => {
          console.log("Symbol: onChange");
        }}
        onChangeText={() => {
          console.log("Symbol: onChangeText");
        }}
        onKeyPress={() => {
          console.log("Symbol: onKeyPress");
        }}
      />
    </View>
  );
}
