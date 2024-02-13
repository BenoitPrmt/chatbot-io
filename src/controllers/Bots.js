import viewNav from '../views/nav';
import viewBots from '../views/bots';

const Bots = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.data = [
      {
        name: 'Dark Vador',
        id: 1
      },
      {
        name: 'Dark Sidious',
        id: 2
      }
    ];

    this.run();
  }

  render() {
    return `
    <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        ${viewBots(this.data)}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Bots;
