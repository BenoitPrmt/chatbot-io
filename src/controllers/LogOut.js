const LogOut = class {
  constructor() {
    this.run();
  }

  run() {
    localStorage.removeItem('username');
    window.location.href = '/';
  }
};

export default LogOut;
