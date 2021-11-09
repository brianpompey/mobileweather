import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const img = require("./assets/weather-background.jpg")
export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imgBackground}>
        <DateTime />
        <WeatherScroll />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imgBackground: {
    flex: 1, 
    resizeMode: "cover", 
    justifyContent: "center",
  }
});
