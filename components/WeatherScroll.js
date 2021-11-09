import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

const WeatherScroll = () => {
    return(
        <ScrollView>
            <CurrentTemp />

        </ScrollView>
    )
}

const CurrentTemp = () => {

    const img = {uri: 'http://openweathermap.org/img/wn/10d@2x.png'}
    return(
        <View>
            <Image source={img} style={styles.img}/>
            <View>
                <Text>Sunday</Text>
                <Text>Night - 28</Text>
                <Text>Day - 35</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 150,
        height: 150
    }
})

export default WeatherScroll;