import axios from 'axios';
import viewNav from '../views/nav';
import viewWelcome from '../views/welcome';

const Welcome = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  submitWelcome = (username) => {
    const userId = 1;
    if (username) {
      localStorage.setItem('username', JSON.stringify(username));

      axios.put(`http://localhost:8080/user/${userId}`, {
        id: userId,
        name: username,
        avatar: 'https://source.boringavatars.com/beam'
      });
    }
    window.location.href = '/';
  };

  handleWelcome = () => {
    const username = document.getElementById('username').value;
    this.submitWelcome(username);
  };

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

    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('submitBtn').addEventListener('click', this.handleWelcome);
      document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter') {
          this.handleWelcome();
        }
      });
    });
  }
};

export default Welcome;
