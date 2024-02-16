const Bot = class {
  constructor(entity) {
    this.entity = entity;
    this.command_data = {
      username: 'Bob'
    };
  }

  async runAction(word, args = []) {
    for (let i = 0; i < this.entity.actions.length; i += 1) {
      const action = this.entity.actions[i];
      if (action.words.includes(word)) {
        if (action.args.length !== args.length) return `Cette commande prend des arguments : ${action.args.join(', ')}`;
        return action.action(action.args.length > 0 ? args : this.command_data);
      }
    }
    return null;
  }
};

export default Bot;
