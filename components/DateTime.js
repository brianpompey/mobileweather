import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const WeatherItem = ({title, value, unit}) => {
    return(
        <View>
            <Text>{title}</Text>
            <Text>{value}{unit}</Text>
        </View>
    )
}

const DateTime = () => {
    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.heading}>12:30am</Text>
                </View>
                <View>
                    <Text style={styles.subheading}>Tuesday, November 9</Text>
                </View>
                <View>
                    <WeatherItem title="Humidity" value="79" unit="%"/>
                    <WeatherItem title="Pressure" value="1000" unit="hPA"/>
                    <WeatherItem title="Sunrise" value="06:00" unit="am"/>
                    <WeatherItem title="Sunset" value="06:30" unit="pm"/>

                </View>
            </View>
            <View style={styles.rightAlign}>
                <Text style={styles.location}>New York, NY</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1.5,
        flexDirection: "row",
        justifyContent: "space-between",
        
    },
    heading: {
        fontSize: 45,
        color: 'white',
        fontWeight: '100',
        marginTop: 80
    },
    subheading: {
        fontSize: 25,
        color: '#eee',
        fontWeight: '300'
    },
    rightAlign: {
        textAlign:'right',
        marginTop: 100
    },
    location: {
        fontSize:16,
        color: 'white',
    }
})

export default DateTime;