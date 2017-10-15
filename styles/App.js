import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F3F3',
  },
  higher: {
    flex: 2,
    flexDirection: 'row'
  },
  higherLeft: {
    flex: 1,
    flexDirection: 'column',
    borderColor: '#222222'
  },
  higherLeftFirst:{
    backgroundColor: '#F3F3F3',
    flex: 4,
    borderColor: '#222222',
    borderWidth: 2
  },
  higherLeftSecond:{
    backgroundColor: '#F3F3F3',
    flex: 2,
    borderColor: '#222222',
    borderWidth: 2
  },
  higherLeftThird:{
    backgroundColor: '#99BB44',
    flex: 1,
    borderColor: '#222222',
    borderWidth: 2
  },
  higherLeftFourth:{
    backgroundColor: '#F3F3F3',
    flex: 5,
    borderColor: '#222222',
    borderWidth: 2
  },
  higherRight: {
    flex: 2,
    backgroundColor: '#AA3333',
    borderColor: '#222222',
    borderWidth: 2
  },
  lower: {
    flex: 1,
    flexDirection: 'row'
  },
  lowerLeft: {
    backgroundColor: '#5599FF',
    flex: 1,
    borderColor: '#222222',
    borderWidth: 2
  },
  lowerCenter: {
    backgroundColor: '#F3F3F3',
    flex: 1,
    borderColor: '#222222',
    borderWidth: 2
  },
  lowerRight: {
    flex: 1
  },
  lowerRightFirst: {
    flex: 1,
    borderColor: '#222222',
    borderWidth: 2
  },
  lowerRightSecond: {
    flex: 1,
    backgroundColor: '#EE8800',
    borderColor: '#222222',
    borderWidth: 2
  }
});
