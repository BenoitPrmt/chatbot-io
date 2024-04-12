/* eslint-disable no-console */
const weatherClothesAction = {
  name: 'weather',
  words: ['weatherClothes', 'meteoClothes'],
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
      // 👇 BENOIT : Check if the algorithm is correct and clean
      const {
        current: {
          temperature_2m: temperature, precipitation
        },
        current_units: {
          temperature_2m: temperatureUnit, precipitation: precipitationUnit
        }
      } = dataWeather;

      if (temperature <= 0) {
        return {
          message: `🤒 It's a hell of a bad weather 🤒 : ${temperature}${temperatureUnit}<br/>
            🧥 I think you should wear a warm winter coat. 🧥
            ${precipitation > 0 ? `☔️ It's rainy, you should take an umbrella : ${precipitation}${precipitationUnit} ☔️` : ''}
            `
        };
      } if (temperature > 0 && temperature < 10) {
        return {
          message: `🥶 It's a bit cold out here : 🥶 ${temperature}${temperatureUnit}<br/>
            🧥 I think you should wear a little coat. 🧥
            ${precipitation > 0 ? `☔️ It's rainy, you should take an umbrella : ${precipitation}${precipitationUnit} ☔️` : ''}
            `
        };
      } if (temperature >= 10 && temperature < 20) {
        return {
          message: `☀️ It's pretty warm today ☀️ : ${temperature}${temperatureUnit}<br/>
              🙅‍♀️ No need to wear a coat! 🙅‍♂️
            ${precipitation > 0 ? `☔️ It's rainy, you should take an umbrella : ${precipitation}${precipitationUnit} ☔️` : ''}
              `
        };
      } if (temperature >= 20 && temperature < 30) {
        return {
          message: `It's warm<br/>
            🙅‍♀️ No need to wear a coat! 🙅‍♂️ : ${temperature}${temperatureUnit}
            🚰 Water is needed instead. 🚰
            ${precipitation > 0 ? `☔️ It's rainy, you should take an umbrella : ${precipitation}${precipitationUnit} ☔️` : ''}
            `
        };
      }
      return {
        message: `It's warm<br/>
          🙅‍♀️ No need to wear a coat! 🙅‍♂️ : ${temperature}${temperatureUnit}
          🚰 Water is needed instead. 🚰
          ${precipitation > 0 ? `☔️ It's rainy, you should take an umbrella : ${precipitation}${precipitationUnit} ☔️` : ''}
          `
      };
    } catch (error) {
      return error;
    }
  }
};

export default weatherClothesAction;
