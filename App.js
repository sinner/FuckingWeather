import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {fetchWeather} from "./services/weatherApi";
import styles from './styles/App';
import Highlighter from 'react-native-highlight-words';

const iconNames = {
  Clear: 'md-sunny',
  Rain: 'md-rainy',
  Thunderstorm: 'md-thunderstorm',
  Clouds: 'md-cloudy',
  Snow: 'md-snow',
  Drizzle: 'md-umbrella',
};

const phrases = {
  Clear: {
    title: "It's Fucking Amaze Balls",
    subtitle: 'Rock that shit!',
  },
  Rain: {
    title: 'Rain rain go away',
    subtitle: 'Stay inside and code all day',
  },
  Thunderstorm: {
    title: 'Fucking Thunderstrike',
    subtitle: 'Unplug those devices',
  },
  Clouds: {
    title: 'Cloud storage limit reached',
    subtitle: 'Error: 5000 - cirrocumulus',
  },
  Snow: {
    title: 'Brain Fucking Freeze',
    subtitle: "You're not supposed to eat it",
  },
  Drizzle: {
    title: "Meh... don't even ask",
    subtitle: 'What did  I just say?',
  },
};

export default class App extends Component<{}> {

  constructor(props) {
    super(props);
    this.state = {
      temp: 0,
      weather: 'Clear',
    };
  }

  componentWillMount() {

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
            });
            console.log(this.state.temp);
          }, (error) => {
            console.log(error);
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
          <Icon name={iconNames[this.state.weather]} size={100} color={'white'}></Icon>
          <Text style={styles.weatherTemp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Highlighter
            style={styles.appTitle}
            highlightStyle={{color: '#FF0000'}}
            searchWords={['Rock', 'stay', 'devices', 'Fucking']}
            textToHighlight={phrases[this.state.weather].title || 'Build a Fucking Weather App'}
          />
          <Text style={styles.appSubTitle}>{phrases[this.state.weather].subtitle || "Let's make it Rain"}</Text>
        </View>
      </View>
    );
  }
}

