import viewNav from '../views/nav';
import viewHome from '../views/home';
import Chat from './Chat';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.messages = [];

    this.run();
  }

  render() {
    return `
      <div class="row">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="container-fluid pt-4">
          ${viewHome()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();

    new Chat(); // CHANGER
  }
};

export default Home;
