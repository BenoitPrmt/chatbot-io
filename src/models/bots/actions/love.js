import axios from 'axios';

const loveAction = {
  name: 'love',
  words: ['love'],
  args: ['sname', 'fname'],
  action: async (args) => {
    const options = {
      method: 'GET',
      url: 'https://love-calculator.p.rapidapi.com/getPercentage',
      params: {
        sname: args[0],
        fname: args[1]
      },
      headers: {
        'X-RapidAPI-Key': '660df63948msh12586b2b545dd54p17b98cjsnb8f468e7e779',
        'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
      }
    }; try {
      const response = await axios.request(options);
      return { message: `${response.data.sname} | ${response.data.fname}<br>💕 You got <b>${response.data.percentage}%</b> ! 💕<br> ${response.data.result}` };
    } catch (error) {
      return error;
    }
  }
};
export default loveAction;
