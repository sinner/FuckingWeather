const rootUrl = 'http://api.openweathermap.org/data/2.5/weather?appid=7dc1e075766d5e9b76d337c31493f2f9&units=metric';

export const fetchWeather = (lat, lon) => {
  const url = rootUrl+'&lat='+lat+'&lon='+lon;
  return fetch(url)
    .then((response)=>response.json())
    .then((json) => ({
      temp: json.main.temp,
      weather: json.weather[0].main,
      zoneName: json.name,
    }));
};

export const iconNames = {
  Clear: 'weather-sunny',
  Rain: 'weather-rainy',
  Thunderstorm: 'weather-lightning',
  Clouds: 'weather-cloudy',
  Snow: 'weather-snowy',
  Drizzle: 'weather-pouring',
  Mist: 'weather-fog',
};

export const phrases = {
  Clear: {
    icon: 'weather-sunny',
    title: "It's Fucking Amaze Balls",
    subtitle: 'Rock that shit!',
    highlight: 'Fucking',
    color: '#E32500',
    background: '#FFD017',
  },
  Rain: {
    icon: 'weather-rainy',
    title: 'Rain rain go away',
    subtitle: 'Stay inside and code all day',
    highlight: 'away',
    color: '#004A96',
    background: '#2F343A',
  },
  Thunderstorm: {
    icon: 'weather-lightning',
    title: 'Fucking Thunderstrike',
    subtitle: 'Unplug those devices',
    highlight: 'Thunderstrike',
    color: '#FBFF46',
    background: '#020202',
  },
  Clouds: {
    icon: 'weather-cloudy',
    title: 'Cloud storage limit reached',
    subtitle: 'Error: 5000 - cirrocumulus',
    highlight: 'limit',
    color: '#0044FF',
    background: '#333333',
  },
  Snow: {
    icon: 'weather-snowy',
    title: 'Brain Fucking Freeze',
    subtitle: "You're not supposed to eat it",
    highlight: '',
    color: '',
    background: '',
  },
  Drizzle: {
    icon: 'weather-pouring',
    title: "Meh... don't even ask",
    subtitle: 'What did I just say?',
    highlight: 'don\'t',
    color: '#B3F6E4',
    background: '#1FBB68',
  },
  Mist: {
    icon: 'weather-fog',
    title: "Meh... don't even ask",
    subtitle: 'What did I just say?',
    highlight: 'don\'t',
    color: '#B3F6E4',
    background: '#1FBB68',
  },
};