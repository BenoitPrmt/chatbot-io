import axios from 'axios';

const ValorantAgents = {
  name: 'statistiques du compte Fortnite',
  words: ['valoagents', 'valoAgents', 'ValoAgents'],
  args: [],
  action: async () => {
    const apiUrl = 'https://valorant-api.com/v1/agents';

    const options = {
      method: 'GET',
      url: apiUrl,
      params: {
        isPlayableCharacter: true
      }
    };

    try {
      const response = await axios.request(options);
      const datas = response.data.data;
      return {
        message: `
        Here are the agents present in Valorant :<br/>
        ${datas.map((data) => `
          <img src="${data.displayIcon}" width="40" height="40" class="bg-dark rounded p-1"/> ${data.displayName} : ${data.abilities.map((ability) => {
          if (ability.displayIcon) {
            return `<img src="${ability.displayIcon}" width="20" height="20" class="bg-dark rounded p-1"/> ${ability.displayName}`;
          }
          return `| ${ability.displayName}`;
        }).join(' ')}
        `).join('<br/>')}
        `
      };
    } catch (error) {
      return error;
    }
  }
};

export default ValorantAgents;
