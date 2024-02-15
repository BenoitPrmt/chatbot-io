import viewNav from '../views/nav';
import viewBots from '../views/bots';
import botsData from '../data/botsData.json';

const Bots = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.bots = botsData;

    this.run();
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
