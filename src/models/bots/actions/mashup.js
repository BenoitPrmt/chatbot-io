const mashupAction = {
  name: 'mashup',
  words: ['mashup', 'emoji-mashup'],
  args: ['emoji1', 'emoji2'],
  action: async (args) => {
    const emojiRegex = /\p{Emoji}/u;
    if (!emojiRegex.test(args[0]) || !emojiRegex.test(args[1])) {
      return { message: 'Please provide valid emojis' };
    }

    return { message: `${args[0]} + ${args[1]} = <img width="35px" height="35px" class="mb-2 rounded-circle" src=${`https://emojik.vercel.app/s/${args[0]}_${args[1]}?size=128`} alt="mashup">` };
  }
};
export default mashupAction;
