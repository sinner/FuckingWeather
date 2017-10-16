import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFD017'
  },
  header: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  weatherIcon: {
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 45,
  },
  weatherTemp: {
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 45,
  },
  body: {
    flex: 5,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
    margin: 10,
  },
  appTitle: {
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 78,
    marginBottom: 5,
  },
  textRed: {
    color: '#FF0000',
  },
  appSubTitle: {
    color: '#FFFFFF',
    fontFamily: 'HelveticaNeue-Bold',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
