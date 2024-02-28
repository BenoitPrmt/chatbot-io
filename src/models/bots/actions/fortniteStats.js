import axios from 'axios';

const FortniteStats = {
  name: 'fortnite account stats',
  words: ['ftnstats', 'fortniteStats', 'FortniteStats'],
  args: ['accountId'],
  action: async (accountId) => {
    const apiUrl = `https://fortnite-api.com/v2/stats/br/v2/${accountId}`;

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        Authorization: process.env.FORTNITE_KEY
      }
    };

    try {
      const response = await axios.request(options);
      const datas = response.data.data.featured;
      return {
        message: `
        ${datas}
        `
      };
    } catch (error) {
      return error;
    }
  }
};

export default FortniteStats;
