const helloAction = {
  name: 'hello',
  words: ['hello', 'hi', 'bonjour', 'coucou', 'wesh'],
  args: [],
  action: () => `Hello ${localStorage.getItem('username').replace(/"/g, '')} !`
};

export default helloAction;
