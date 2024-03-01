import axios from 'axios';

const ExchangeRate = {
  name: 'Exchange Rate',
  words: ['exrate', 'ExRate', 'exRate'],
  args: [],
  action: async () => {
    const apiUrl = 'https://api.freecurrencyapi.com/v1/latest';

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        apiKey: process.env.CURRENCY_KEY
      },
      params: {
        base_currency: 'EUR'
      }
    };

    try {
      const response = await axios.request(options);
      const datas = response.data.data;

      const currencyCodes = Object.keys(datas);
      const currencyRates = Object.values(datas);
      const exchangeRateMessage = currencyCodes.map((code, index) => `${code}: ${currencyRates[index]}`).join('<br/>');

      return {
        message: `Current rates:<br/>${exchangeRateMessage}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default ExchangeRate;
