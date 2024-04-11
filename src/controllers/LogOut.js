const LogOut = class {
  constructor(params) {
    this.params = params;

    this.run();
  }

  run() {
    localStorage.removeItem('username');
    window.location.href = '/';
  }
};

export default LogOut;
