const helloAction = {
  name: 'hello',
  words: ['hello', 'hi', 'bonjour', 'coucou'],
  args: [],
  action: () => ({ message: `Hello ${localStorage.getItem('username').replace(/"/g, '')} !` })
};

export default helloAction;
