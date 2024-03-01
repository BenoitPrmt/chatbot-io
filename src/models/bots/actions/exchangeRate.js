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
        base: 'EUR'
      }
    };

    try {
      const response = await axios.request(options);
      const datas = response.data.data;
      return {
        message: `Current rate: ${datas.map(
          (data) => `${data.name}: ${data.rate}`
        ).join('<br/>')}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default ExchangeRate;
