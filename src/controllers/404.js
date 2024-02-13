const PageNotFound = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return '<div><h1>404 Not found</h1></div>';
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default PageNotFound;
