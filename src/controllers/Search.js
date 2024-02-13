import axios from 'axios';

import viewNav from '../views/nav';
import viewUsers from '../views/users';

const Search = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.data = [];

    this.run();
  }

  onKeyPress() {
    const elInputSearch = document.querySelector('.input-search');

    elInputSearch.addEventListener('keyup', () => {
      const keyWord = elInputSearch.value;
      const data = this.filters(
        'name',
        this.data,
        ({ user }) => `${user.name.first} ${user.name.last}`.includes(keyWord) || `${user.name.last} ${user.name.first}`.includes(keyWord)
      );

      const elUsersList = document.querySelector('.users-list');
      elUsersList.innerHTML = viewUsers(data);
    });
  }

  render() {
    return `
    <div class="container">
        <div class="row">
          <div class="col-12">${viewNav()}</div>
        </div>
        <div class="row users-list">
          ${viewUsers(this.data)}
        </div>
      </div>
    `;
  }

  filters(param, data, filter) {
    let updateData = data;

    if (param) {
      updateData = updateData.filter(filter);
    }
    return updateData;
  }

  run() {
    const { results } = this.params;

    axios
      .get(`https://randomuser.me/api/0.8/?results=${results}`)
      .then((res) => {
        const { data } = res;
        // this.data = data.results;

        const { age } = this.params;
        this.data = this.filters(
          parseInt(age, 10),
          data.results,
          ({ user }) => (
            new Date(
              new Date().getTime() - new Date(user.dob * 1000).getTime()
            ).getFullYear() - 1970 > age
          )
        );

        this.el.innerHTML = this.render();
        this.onKeyPress();
      });
  }
};

export default Search;
