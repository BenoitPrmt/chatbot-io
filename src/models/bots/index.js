const Bot = class {
  constructor(entity) {
    this.entity = entity;
    this.command_data = {
      username: 'Bob'
    };
  }

  runAction(word) {
    let returnData;
    this.entity.actions.forEach((action) => {
      if (action.words.includes(word)) {
        returnData = action.action(this.command_data);
      }
    });
    return returnData;
  }
};

export default Bot;
