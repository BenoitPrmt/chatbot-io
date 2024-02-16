export default () => {
  const submitWelcome = (username) => {
    if (username) {
      localStorage.setItem('username', JSON.stringify(username));
      localStorage.setItem('authToken', JSON.stringify(
        Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
      ));
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
  return `<h1 class="text-light">Bienvenue ici !</h1>
  <div class="d-flex flex-column align-items-center gap-4 pt-5">
  <img class="login-avatar rounded-circle" src="https://source.boringavatars.com/" alt="">
  <div class="d-flex flex-column w-100 pt-5 align-items-center">
  <label class="text-light">Nom d'utilisateur :</label>
  <div class="input-group mt-1">
  <input type="text" class="form-control input-message-content" id="username" placeholder="Entrez votre nom d'utilisateur..." aria-label="Entrez votre nom d'utilisateur..."
  aria-describedby="button-addon2">
  </div>
  <button class="btn btn-primary mt-2" type="button" id="submitBtn">Discuter avec les robots</button>
  </div>
  </div>`;
};
