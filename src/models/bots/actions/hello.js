const helloAction = {
  name: 'hello',
  words: ['hello', 'bonjour'],
  action: (data) => `Bonjour ${data.username} !`
};

export default helloAction;
