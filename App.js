import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {fetchWeather, phrases, iconNames} from "./services/weatherApi";
import styles from './styles/App';
import Highlighter from 'react-native-highlight-words';

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
    this.getInitialLocation();
    this.geoLocation();
  }

  watchPositionHandler = (positionData) => {
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
  };

  getInitialLocation() {
    console.log("Initial Location");
    navigator.geolocation.getCurrentPosition(
      this.watchPositionHandler,
      (error) => {
        console.log('Error while it is capturing the current position', error);
      },
      {timeout: 1000, maximumAge: 0, enableHighAccuracy: true}
    );
  }

  geoLocation() {
    console.log("Watch Location");
    navigator.geolocation.watchPosition(
      this.watchPositionHandler,
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

  getWeatherIcon() {
    if(this.state.weather && phrases.hasOwnProperty(this.state.weather)){
      return phrases[this.state.weather].icon;
    }
    return null;
  }

  getWeatherBackgroundColor() {
    if(this.state.weather && phrases.hasOwnProperty(this.state.weather)){
      return phrases[this.state.weather].background;
    }
    return '';
  }

  getHighlightColor() {
    if(this.state.weather && phrases.hasOwnProperty(this.state.weather)){
      return phrases[this.state.weather].color;
    }
    return '';
  }

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.getWeatherBackgroundColor()}]}>
        <View style={styles.header}>
          <Icon name={this.getWeatherIcon() || 'weather-cloudy'} size={100} color={'white'}></Icon>
          <Text style={styles.weatherTemp}>{this.state.temp}°</Text>
        </View>
        <View style={styles.body}>
          <Highlighter
            style={styles.appTitle}
            highlightStyle={{color: this.getHighlightColor()}}
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

