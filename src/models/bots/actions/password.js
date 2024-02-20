const passwordAction = {
  name: 'password',
  words: ['password', 'psw'],
  args: [],
  action: () => {
    const char = 'abcdefghijknopqrstuvwxyzACDEFGHJKLMNPQRSTUVWXYZ12345679*!?%$&@';
    const password = [];

    for (let i = 0; i < 20; i += 1) {
      const pass = Math.floor(Math.random() * char.length);
      const mdp = char.substring(pass, pass + 1);
      password.push(mdp);
    }

    return { message: `🔐 Mot de passe généré :<br> <span class="allowTextCopy">${password.join(' ')}</span>` };
  }
};

export default passwordAction;
