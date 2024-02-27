import axios from 'axios';

const LeagueStats = {
  name: 'league',
  words: ['lol', 'LeagueOfLegends'],
  args: ['Game Name', 'Tag Line'],
  action: async (args) => {
    const apiUrl = `https://europe.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${args[0]}/${args[1]}`;

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        'Content-Type': 'application/json'
      }
    };

    try {
      const response = await axios.request(options);
      return {
        message: `${response.data.response}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default LeagueStats;
