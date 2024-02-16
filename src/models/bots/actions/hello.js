const helloAction = {
  name: 'hello',
  words: ['hello', 'bonjour'],
  args: [],
  action: () => `Bonjour ${localStorage.getItem('username').replace(/"/g, '')} !`
};

export default helloAction;
