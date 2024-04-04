import axios from 'axios';
import viewNav from '../views/nav';
import viewBots from '../views/bots';
import Bot from '../models/bots';

const Bots = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.startChat();
  }

  async startChat() {
    this.bots = await this.getBotsEntitiesInDatabase('1');

    this.run();
  }

  async getBotsEntitiesInDatabase() {
    const apiUrlPhpBots = 'http://localhost:8080/bots';

    const options = {
      method: 'GET',
      url: apiUrlPhpBots
    };
    const response = await axios.request(options);
    try {
      this.bots = response.data.map((entity) => new Bot(entity));
    } catch (error) {
      return error;
    }
    return response.data;
  }

  render() {
    return `
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
    <div class="container pt-4">
        ${viewBots(this.bots)}
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Bots;
