const weatherAction = {
  name: 'weather',
  words: ['weather', 'meteo'],
  args: ['city'],
  action: async (args) => {
    const headers = {
      Accept: 'application/json'
    };
    try {
      const responseCity = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${args.join('+')}&count=1&language=en&format=json`, {
        method: 'GET',
        headers
      });
      const dataCity = await responseCity.json();
      if (!dataCity.results) return { message: `City ${args.join(' ')} not found` };
      const city = dataCity.results[0];

      const responseWeather = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${city.latitude}&longitude=${city.longitude}&current=temperature_2m,apparent_temperature,is_day,precipitation,wind_speed_10m`, {
        method: 'GET',
        headers
      });
      const dataWeather = await responseWeather.json();
      // const { current_units, current } = dataWeather;
      return {
        message: `🌍 Weather in ${city.name} ${dataWeather.current.is_day ? '🌞' : '🌙'}<br>🌡️ ${dataWeather.current.temperature_2m}${dataWeather.current_units.temperature_2m} (feels like ${dataWeather.current.apparent_temperature}${dataWeather.current_units.apparent_temperature})<br>💧 ${dataWeather.current.precipitation}${dataWeather.current_units.precipitation}<br>💨️ ${dataWeather.current.wind_speed_10m}${dataWeather.current_units.wind_speed_10m}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default weatherAction;
