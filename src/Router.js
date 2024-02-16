import PageNotFound from './controllers/404';
// 👇 uncomment to import
/* import Welcome from './controllers/Welcome'; */
const Router = class {
  constructor(routes = []) {
    this.path = window.location.pathname;
    this.params = !window.location.search ? {} : Object.fromEntries(
      window.location.search
        .split('?')[1]
        .split('&')
        .map((param) => param.split('='))
    );
    this.routes = routes;

    this.run();
  }

  verifLogged() {
    if (localStorage.getItem('username')) {
      return true;
    }
    return false;
  }

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      // 👇 uncomment to check if the user is already logged in

      /* if (!this.verifLogged()) {
        route.url = '/welcome';
        route.controller = Welcome;
        const Controller = route.controller;
        new Controller(this.params);
        ifExist = true;
        break;
      } */

      if (route.url === this.path) {
        const Controller = route.controller;
        new Controller(this.params);
        ifExist = true;
        break;
      }
    }

    if (!ifExist) {
      new PageNotFound();
    }
  }

  run() {
    this.startController();
  }
};

export default Router;
