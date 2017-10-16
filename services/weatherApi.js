const rootUrl = 'http://samples.openweathermap.org/data/2.5/weather?appid=7dc1e075766d5e9b76d337c31493f2f9';

export const fetchWeather = (lat, lon) => {
  const url = rootUrl+'&lat='+lat+'&lon='+lon;
  return fetch(url)
    .then((response)=>response.json())
    .then((json) => ({
      temp: json.main.temp,
      weather: json.weather[0].main
    }));
};
