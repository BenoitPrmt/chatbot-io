import PageNotFound from './controllers/404';

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

  startController() {
    let ifExist = false;

    for (let i = 0; i < this.routes.length; i += 1) {
      const route = this.routes[i];

      if (route.url === this.path) {
        // 👇 Comment to avoid redirection when not logged
        // if (route.private) {
        //   const token = localStorage.getItem('authToken');
        //
        //   if (!token) {
        //     window.location.href = '/welcome';
        //
        //     break;
        //   }
        // }

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
