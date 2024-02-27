import axios from 'axios';

const FortniteShop = {
  name: 'fortnite shop',
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
      const datas = response.data.data.featured;
      return {
        message: `
        The item shop is ${datas.entries.length} items long.<br/>
        There is : <br/>${datas.entries.map((entry) => `
        ${entry.bundle?.name ? `Bundle : ${entry.bundle.name}<br/>` : ''}
        Regular Price : ${entry.regularPrice}<br/>
        Final Price : ${entry.finalPrice}<br/>
        ${entry.items.map((item) => `
            <img src='${item.images.icon}' width="40" height="40" class="bg-dark rounded p-1"/> ${item.name} | ${item.description}`).join('<br /><br/>')}
            `).join('<br /><br/>')}`
      };
    } catch (error) {
      return error;
    }
  }
};

export default FortniteShop;
