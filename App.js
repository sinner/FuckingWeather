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
  Mist: 'md-cloudy',
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
  Mist: {
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
      zoneName: 'There',
    };
  }

  componentWillMount() {

  }

  componentDidMount() {
    this.geoLocation();
  }

  geoLocation() {
    navigator.geolocation.watchPosition(
      (positionData) => {
        fetchWeather(positionData.coords.latitude, positionData.coords.longitude)
          .then((data) => {
            this.setState({
              temp: data.temp,
              weather: data.weather,
              zoneName: data.zoneName,
            });
          }, (error) => {
            console.log('Error while it is fetching the weather', error);
          });
      },
      (error) => {
        console.log('Error while it is capturing the current position', error);
      },
      {timeout: 1000, maximumAge: 0, enableHighAccuracy: true}
    );
  }

  getAWeatherPhrase(type) {
    if(type==='title' && this.state.weather && phrases.hasOwnProperty(this.state.weather)){
      return phrases[this.state.weather].title;
    }
    if(type==='subtitle' && this.state.weather && phrases.hasOwnProperty(this.state.weather)){
      return phrases[this.state.weather].subtitle;
    }
    return null;
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Icon name={iconNames[this.state.weather] || 'md-cloudy'} size={100} color={'white'}></Icon>
          <Text style={styles.weatherTemp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Highlighter
            style={styles.appTitle}
            highlightStyle={{color: '#FF0000'}}
            searchWords={['Rock', 'Cloud', 'go', 'stay', 'devices', 'Fucking']}
            textToHighlight={this.getAWeatherPhrase('title') || 'Build a Fucking Weather App'}
          />
          <Text style={styles.appSubTitle}>
            {this.getAWeatherPhrase('subtitle') || "Let's make it Rain"}
            -
            {this.state.zoneName}
          </Text>
        </View>
      </View>
    );
  }
}

