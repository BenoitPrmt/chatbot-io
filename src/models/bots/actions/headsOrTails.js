const headsOrTailsAction = {
  name: 'headsortails',
  words: ['headsortails', 'pileouface', 'pof', 'hot'],
  args: [],
  action: () => {
    const result = Math.random() < 0.5 ? 'heads' : 'tails';
    return { message: `🪙 You got <b>${result}</b> !` };
  }
};

export default headsOrTailsAction;
