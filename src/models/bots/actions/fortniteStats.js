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
      const datas = response.data.data;
      return {
        message: `
        Account name : ${datas.account.name}<br />
        BattlePass level : ${datas.battlePass.level}<br />
        BattlePass progress : ${datas.battlePass.progress}<br />
        You have : <br/>
        - ${datas.stats.all.overall.wins} wins<br/>
        - ${datas.stats.all.overall.kills} kills <br/>
        - ${datas.stats.all.overall.deaths} deaths<br/>
        - ${datas.stats.all.overall.kd} K/D ratio<br/>
        - ${datas.stats.all.overall.matches} matches played<br/>
        - ${datas.stats.all.overall.winRate} win rate<br/>
        `
      };
    } catch (error) {
      return error;
    }
  }
};

export default FortniteStats;
