import viewNav from '../views/nav';
import viewHome from '../views/home';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
    <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        ${viewHome()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
