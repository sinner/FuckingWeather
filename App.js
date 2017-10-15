import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';
import styles from './styles/App';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.higher}>
          <View style={styles.higherLeft}>
            <View style={styles.higherLeftFirst}></View>
            <View style={styles.higherLeftSecond}></View>
            <View style={styles.higherLeftThird}></View>
            <View style={styles.higherLeftFourth}></View>
          </View>
          <View style={styles.higherRight}></View>
        </View>
        <View style={styles.lower}>
          <View style={styles.lowerLeft}></View>
          <View style={styles.lowerCenter}></View>
          <View style={styles.lowerRight}>
            <View style={styles.lowerRightFirst}></View>
            <View style={styles.lowerRightSecond}></View>
          </View>
        </View>
      </View>
    );
  }
}

