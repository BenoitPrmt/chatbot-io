import axios from 'axios';

const footballAction = {
  name: 'football',
  words: ['foot', 'football'],
  args: [],
  action: async () => {
    const options = {
      method: 'GET',
      url: 'https://api-football-beta.p.rapidapi.com/timezone',
      headers: {
        'X-RapidAPI-Key': '660df63948msh12586b2b545dd54p17b98cjsnb8f468e7e779',
        'X-RapidAPI-Host': 'api-football-beta.p.rapidapi.com'
      }
    };

    try {
      const response = await (axios.request(options));
      return {
        message: `${response.data.response}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default footballAction;
