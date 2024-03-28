export default () => {
  const submitWelcome = (username) => {
    if (username) {
      localStorage.setItem('username', JSON.stringify(username));
      // 👇 Uncomment this to add to localStorage a token

      /* localStorage.setItem('authToken', JSON.stringify(
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      )); */

      window.location.href = '/';
    }
  };

  const handleWelcome = () => {
    const username = document.getElementById('username').value;
    submitWelcome(username);
  };

  document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('submitBtn').addEventListener('click', handleWelcome);
    document.addEventListener('keydown', (e) => {
      if (e.code === 'Enter') {
        handleWelcome();
      }
    });
  });
  return `<h1 class="text-light">Welcome here !</h1>
  <div class="d-flex flex-column align-items-center gap-4 pt-5">
  <img class="login-avatar rounded-circle" src="https://source.boringavatars.com/" alt="">
  <div class="d-flex flex-column w-100 pt-5 align-items-center">
  <label class="text-light">Username :</label>
  <div class="input-group mt-1">
  <input type="text" class="form-control message-input" id="username" placeholder="Enter your username..." aria-label="Enter your username..."
  aria-describedby="button-addon2">
  </div>
  <button class="btn btn-primary mt-2 w-100" type="button" id="submitBtn">Chat with the bots</button>
  </div>
  </div>`;
};
