import botsData from '../data/botsData.json';
import commandsData from '../data/commandsData.json';

const Commands = class {
  constructor(chatClass, message) {
    this.chatClass = chatClass;

    this.bots = botsData;
    this.commands = commandsData;

    this.checkIfCommand(message);
  }

  launchCommand() { // command
    return 'Launching command';
  }

  async fetchDataFromAPI(args) {
    const headers = {
      Accept: 'application/json'
    };
    try {
      const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${args[0]}`, {
        method: 'GET',
        headers
      });
      return await response.json();
    } catch (error) {
      return error;
    }
  }

  getResponseData(data, command) {
    switch (command) {
      case 'pokemon':
        return [data.name.fr, data.sprites.regular];

      case 'hello':
        return ['Bob'];

      default:
        return [];
    }
  }

  async checkIfCommand(message) {
    const messageWords = message.content.split(' ');
    const prefix = messageWords[0];
    const args = messageWords.slice(1);
    const command = this.commands.find((cmd) => cmd.command === prefix);
    if (command) {
      this.launchCommand(command);

      const apiData = await this.fetchDataFromAPI(args);
      const dataResponse = this.getResponseData(apiData, command.command);

      let responseData = command.response;
      for (let i = 0; i < command.returnArgs; i += 1) {
        responseData = responseData.replace(`{{data-${i}}}`, dataResponse[i]);
      }

      command.image = dataResponse[parseInt(command.image.slice(7, -2), 10)] || null;

      if (command.bots === 'all') {
        this.bots.forEach((bot) => {
          this.sendCommandResponse({
            sender: bot.name,
            receiver: 'User',
            content: responseData,
            image: null,
            avatar: bot.avatar
          });
        });
      } else {
        const bot = this.bots.find((b) => b.id === command.bots);
        this.sendCommandResponse({
          sender: bot.name,
          receiver: 'User',
          content: responseData,
          image: command.image,
          avatar: bot.avatar
        });
      }
    }
  }

  sendCommandResponse(messageData) {
    const {
      sender, receiver, content, image, avatar
    } = messageData;

    this.chatClass.sendMessage({
      sender,
      receiver,
      date: new Date(),
      content,
      image,
      avatar
    });
  }
};

export default Commands;
