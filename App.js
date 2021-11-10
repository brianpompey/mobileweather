import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import * as Location from 'expo-location';
import config from './config';

import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll';

const img = require("./assets/weather-background.jpg")
export default function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        fetchDataFromApi("40.7128", "-74.0060")
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      fetchDataFromApi(location.coords.latitude, location.coords.longitude);
    })();
  }, [])

  const fetchDataFromApi = (latitude, longitude) => {
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=imperial&appid=${config.WEATHER_API}`).then(res => res.json()).then(data => {

      // console.log(data)
      setData(data)
      })
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.imgBackground}>
        <DateTime current={data.current} timezone={data.timezone} lat={data.lat} lon={data.lon}/>
        <WeatherScroll weatherData={data.daily}/>
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
