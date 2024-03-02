import axios from 'axios';

const ExchangeRate = {
  name: 'Exchange Rate',
  words: ['exchange', 'ExRate', 'exRate'],
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

      // 👇 What's done here? (For Benoît)
      // I collect the currency codes and the exchange rate from the API.
      const currencyCodes = Object.keys(datas);
      const currencyRates = Object.values(datas);

      // Then I get the index of the currency code that is corresponding to the same exchange rate.
      const notDesiredRate = currencyRates.indexOf(1);

      // Finally I remove the currency code from the values array.
      if (notDesiredRate !== -1) {
        currencyCodes.splice(notDesiredRate, 1);
        currencyRates.splice(notDesiredRate, 1);
      }

      const exchangeRateMessage = currencyCodes.map((code, index) => `${code}: ${currencyRates[index]}`).join('<br/>');

      return {
        message: ` 💵 Current rates 💶<br/>From EUR Exchange Rate<br/><br/>${exchangeRateMessage}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default ExchangeRate;
