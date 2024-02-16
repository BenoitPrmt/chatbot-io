import viewNav from '../views/nav';
import viewWelcome from '../views/welcome';

const Welcome = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  submitWelcome(data) {
    if (data) {
      localStorage.setItem('username', JSON.stringify(data));
      localStorage.setItem('authToken', JSON.stringify(data));
      window.location.href = '/';
    } else {
      window.location.href = '/welcome';
    }
  }

  render() {
    return `
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
    <div class="container pt-4 d-flex flex-column align-items-center justify-content-center">
        ${viewWelcome()}
    </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Welcome;
