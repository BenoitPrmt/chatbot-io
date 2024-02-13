import viewNav from '../views/nav';

const PageNotFound = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return `
        <div class="container">
          <div class="row">
            <div class="col-12">${viewNav()}</div>
          </div>
          <div>
              <h1>404</h1>
              <h2>Page not found</h2>
          </div>
        </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default PageNotFound;
