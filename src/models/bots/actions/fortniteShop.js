import axios from 'axios';

const LeagueStats = {
  name: 'fortnite',
  words: ['ftnshop', 'fortniteShop', 'FortniteShop'],
  args: [],
  action: async () => {
    const apiUrl = 'https://fortnite-api.com/v2/shop/br';

    const options = {
      method: 'GET',
      url: apiUrl
    };

    try {
      const response = await axios.request(options);
      const datas = response.data;
      return {
        message: `
        The item shop is ${datas.items.length} items long.<br/>
        There is : <br/><br/>${datas.items.map((item) => `<img src="${item.images.largeIcon}" width="40" height="40" style="background-color: #000"/> ${item.name} | ${item.description}`).join('<br /><br/>')}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default LeagueStats;
