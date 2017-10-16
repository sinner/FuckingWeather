import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from "./services/weatherApi";
import styles from './styles/App';


export default class App extends Component<{}> {

  componentWillMount() {
    this.state = {
      temp: 0,
      weather: 'Clear',
    };
  }

  componentDidMount() {
    this.geoLocation();
    fetchWeather(-21, 28).then((data) => console.log(data));
  }

  geoLocation() {
    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        fetchWeather(positionData.coords.latitude, positionData.coords.longitude)
          .then((data) => {
            this.setState({
              temp: data.temp,
              weather: data.weather,
            })
          });
      },
      (error) => {
        console.log(error);
      },
      {timeout: 10000, enableHighAccuracy: true}
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={'ios-sunny'} size={100} color={'white'}></Icon>
          <Text style={styles.weatherTemp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Text style={styles.appTitle}>Build a
            <Text style={styles.textRed}> Fucking </Text> Weather App</Text>
          <Text style={styles.appSubTitle}>Let's make it Rain</Text>
        </View>
      </View>
    );
  }
}

