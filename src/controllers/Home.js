import viewNav from '../views/nav';

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
        <h1>Bonjour</h1>
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
