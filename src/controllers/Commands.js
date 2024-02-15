import botsData from '../data/botsData.json';
import commandsData from '../data/commandsData.json';

const Commands = class {
  constructor(chatClass, message) {
    this.chatClass = chatClass;

    this.bots = botsData;
    this.commands = commandsData;

    this.checkIfCommand(message);
  }

  checkIfCommand(message) {
    const command = this.commands.find((cmd) => cmd.command === message.content);
    if (command) {
      if (command.bots === 'all') {
        this.bots.forEach((bot) => {
          this.chatClass.sendMessage({
            sender: bot.name,
            receiver: 'User',
            date: new Date(),
            content: command.response.replace('{{user}}', 'Bob'),
            avatar: bot.avatar
          });
        });
      } else {
        const bot = this.bots.find((b) => b.id === command.bots);
        this.chatClass.sendMessage({
          sender: bot.name,
          receiver: 'User',
          date: new Date(),
          content: command.response.replace('{{user}}', 'Bob'),
          avatar: bot.avatar
        });
      }
    }
  }
};

export default Commands;
