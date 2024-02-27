import axios from 'axios';

const FortniteLastAdded = {
  name: 'fortnite Last Added',
  words: ['ftnlast', 'fortniteLast', 'FortniteLast'],
  args: [],
  action: async () => {
    const apiUrl = 'https://fortnite-api.com/v2/cosmetics/br/new';

    const options = {
      method: 'GET',
      url: apiUrl
    };

    try {
      const response = await axios.request(options);
      const datas = response.data.data;
      return {
        message: ` The last addition to the game was ${datas.lastAddition}.<br/>
        There is : <br/><br/>${datas.items.map((item) => `<img src="${item.images.smallIcon}" width="40" height="40" style="background-color: #000"/> ${item.name} | ${item.description}`).join('<br /><br/>')}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default FortniteLastAdded;
