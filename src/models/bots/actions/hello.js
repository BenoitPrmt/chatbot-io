const helloAction = {
  name: 'hello',
  words: ['hello', 'bonjour'],
  args: [],
  action: (data) => `Bonjour ${data.username} !`
};

export default helloAction;
