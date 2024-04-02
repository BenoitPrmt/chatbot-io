import * as allActions from './actions/index';

const Bot = class {
  constructor(entity) {
    this.entity = entity;
    console.log(this.entity);
    this.entity.actions = this.entity.actions.split(',').map((action) => allActions[action]);
  }

  async runAction(word, args = []) {
    for (let i = 0; i < this.entity.actions.length; i += 1) {
      const action = this.entity.actions[i]; // TODO
      if (action.words.includes(word)) {
        if (action.args.length > 0 && args.length === 0) return { message: `This command takes args : ${action.args.join(', ')}` };
        return action.action(args.length > 0 ? args : null);
      }
    }
    return '';
  }
};

export default Bot;
