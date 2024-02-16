const Bot = class {
  constructor(entity) {
    this.entity = entity;
  }

  async runAction(word, args = []) {
    for (let i = 0; i < this.entity.actions.length; i += 1) {
      const action = this.entity.actions[i];
      if (action.words.includes(word)) {
        if (action.args.length !== args.length) return `This command takes args : ${action.args.join(', ')}`;
        return action.action(action.args.length > 0 ? args : null);
      }
    }
    return null;
  }
};

export default Bot;
