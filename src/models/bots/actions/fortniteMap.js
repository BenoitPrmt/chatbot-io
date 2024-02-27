import axios from 'axios';

const FortniteMap = {
  name: 'fortnite',
  words: ['ftnmap', 'fortniteMap', 'FortniteMap'],
  args: [],
  action: async () => {
    const apiUrl = 'https://fortnite-api.com/v1/map';

    const options = {
      method: 'GET',
      url: apiUrl
    };

    try {
      const response = await axios.request(options);
      return {
        message: `
        The actual fortnite map : <br/><br/>
       <img src="${response.data.data.images.pois}" width="100%" height="100%"/>`
      };
    } catch (error) {
      return error;
    }
  }
};

export default FortniteMap;
