import React from 'react';
import { Image,  StyleSheet, Text, View } from 'react-native';
import logo from '/Users/moataz.eldebsy/react-native-example/assets/logo.png'; 

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} /> 

      <Text style={{color: '#0DD3C5', fontSize: 20,fontWeight:'bold'}}> 
        Hello Bitrisers!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#683D87',
    alignItems: 'center',
    justifyContent: 'center',
  },
});