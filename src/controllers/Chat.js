import axios from 'axios';
import { Howl } from 'howler';
import Bot from '../models/bots/index';
import viewMessage from '../views/message';
import viewNav from '../views/nav';
import viewHome from '../views/home';
import { pop } from '../assets';

// TODO(Benoit) : Refactor le fichier pour optimiser le codew
const Chat = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.startChat();
  }

  async startChat() {
    this.user = await this.getUserInDatabase('1');

    await this.getEntities()
      .then(() => {
        this.botsCommands = this.bots.map(
          (bot) => bot.entity.actions.map((action) => action.words)
        )
          .flat();
      });

    this.run();

    document.addEventListener('click', async (event) => {
      if (event.target.matches('#loadMoreButton')) {
        const loadMoreButton = this.elMessage.firstElementChild;
        this.elMessage.removeChild(loadMoreButton);

        let messagesToShow = this.allMessages.slice(-20);
        messagesToShow = await messagesToShow.sort((a, b) => b.id - a.id);

        const firstMessageId = this.elMessage.firstElementChild.getAttribute('id');

        // eslint-disable-next-line no-restricted-syntax
        for (const message of messagesToShow.sort((a, b) => b.id - a.id)) {
          // eslint-disable-next-line no-await-in-loop
          await this.sendMessage(message, true, true);
        }

        window.location.href = `#${firstMessageId}`;
        this.allMessages = this.allMessages.slice(0, -20);
      }
    });

    this.elMessage = document.querySelector('.messages-section');

    this.username = this.user.name;

    this.showOldMessages();
    this.addListeners();
    this.enableCommandHistory();
    this.soundPlayed = false;
  }

  async getUserInDatabase(userId) {
    const apiUrlPhp = `http://localhost:8080/user/${userId}`;

    const options = {
      method: 'GET',
      url: apiUrlPhp
    };

    const response = await axios.request(options);
    try {
      return response.data;
    } catch (error) {
      return error;
    }
  }

  async getEntities() {
    const apiUrlPhp = 'http://localhost:8080/bots';

    const options = {
      method: 'GET',
      url: apiUrlPhp
    };

    const response = await axios.request(options);
    try {
      this.bots = response.data.map((entity) => new Bot(entity));
      // this.bots.map((bot) => console.log(bot));
    } catch (error) {
      return error;
    }
    return response.data;
  }

  addListeners() {
    const elSendButton = document.querySelector('.send-message');
    elSendButton.addEventListener('click', () => {
      const elInputField = document.querySelector('.message-input');
      if (!this.soundPlayed && elInputField.value !== '') {
        const sound = new Howl({
          src: pop,
          autoplay: false,
          loop: false,
          volume: 0.2,
          onend: () => {
            this.soundPlayed = false;
          }
        });
        sound.play();
        this.soundPlayed = true;
      }
      this.userSendMessage();
    });

    const elMessageInput = document.querySelector('.message-input');
    elMessageInput.addEventListener('keyup', (e) => {
      const messageWords = elMessageInput.value.split(' ');
      const prefix = messageWords[0];

      const commands = [...new Set(this.botsCommands.filter(
        (command) => command.includes(prefix) || command.some((word) => word.startsWith(prefix))
      ))];

      if (commands.length > 0 && prefix.length > 0) {
        const elCommands = document.querySelector('.autocomplete-items');
        elCommands.innerHTML = commands.map((command) => `<li onclick="document.querySelector('.message-input').value = '${command[0]}'">${command[0]}</li>`)
          .join('');
      } else if (prefix.length === 0) {
        const elCommands = document.querySelector('.autocomplete-items');
        elCommands.innerHTML = '';
      }

      if (e.code === 'Enter') {
        const elInputField = document.querySelector('.message-input');
        if (!this.soundPlayed && elInputField.value !== '') {
          const sound = new Howl({
            src: pop,
            autoplay: false,
            loop: false,
            volume: 0.2,
            onend: () => {
              this.soundPlayed = false;
            }
          });
          sound.play();
          this.soundPlayed = true;
        }
        this.userSendMessage();
      }
    });
  }

  enableCommandHistory() {
    const elInputField = document.querySelector('.message-input');
    elInputField.addEventListener('keydown', async (e) => {
      if (elInputField.value.length === 0) {
        if (e.key === 'ArrowUp') {
          const apiUrlAuthor = 'http://localhost:8080/message/-1';

          const options = {
            method: 'GET',
            url: apiUrlAuthor
          };

          const response = await axios.request(options);

          try {
            if (Object.keys(response.data).length === 0) return null;

            elInputField.value = response.data.message;
            return response.data;
          } catch (error) {
            return error;
          }
        }
      } else if (e.key === 'ArrowDown') {
        elInputField.value = '';
      }
      return null;
    });
  }

  async getAuthorMessage(id, type) {
    const apiUrlAuthor = `http://localhost:8080/${type}/${id}`;

    const options = {
      method: 'GET',
      url: apiUrlAuthor
    };

    const response = await axios.request(options);
    try {
      return response.data;
    } catch (error) {
      return error;
    }
  }

  checkIfMessageIsCommand(message) {
    const messageWords = message.message.split(' ');
    const prefix = messageWords[0];
    const args = messageWords.slice(1) || [];

    this.bots.forEach((bot) => {
      bot.runAction(prefix, args)
        .then((botResponse) => {
          if (botResponse) {
            this.sendMessage(
              {
                name: bot.entity.name,
                avatar: bot.entity.avatar,
                message: botResponse.message,
                image: botResponse.image || null,
                date: new Date() / 1000,
                botId: bot.entity.id,
                userId: null
              }
            );
          }
        });
    });
  }

  userSendMessage() {
    const elInputMessageContent = document.querySelector('.message-input');

    if (elInputMessageContent.value.length === 0) return;

    this.sendMessage({
      id: null,
      name: this.user.name,
      avatar: this.user.avatar,
      userId: 1,
      message: elInputMessageContent.value,
      botId: null,
      image: null,
      date: new Date() / 1000
    });
    elInputMessageContent.value = '';
    const elCommands = document.querySelector('.autocomplete-items');
    elCommands.innerHTML = '';
  }

  async sendMessage(messageData, archiveMessage = false, atTop = false) {
    const {
      id,
      name,
      userId,
      botId,
      avatar,
      message,
      image,
      date
    } = messageData;

    const messageToSend = {
      id,
      name,
      userId,
      botId,
      avatar,
      message,
      image,
      date
    };

    const authorId = messageToSend.userId || messageToSend.botId;
    const authorMessage = await this.getAuthorMessage(authorId, messageToSend.userId ? 'user' : 'bot');

    const messageAndAuthorToSend = {
      ...messageToSend,
      ...authorMessage
    };

    if (!archiveMessage) {
      this.updateDataBaseMessages(messageToSend);
      if (!messageToSend.botId) {
        this.checkIfMessageIsCommand(messageAndAuthorToSend);
      }
    }

    if (atTop) {
      this.elMessage.innerHTML = viewMessage(messageToSend) + this.elMessage.innerHTML;
    } else {
      this.elMessage.innerHTML += viewMessage(messageToSend);
      this.scrollToBottom();
    }
    return messageToSend;
  }

  updateDataBaseMessages(newData) {
    axios.post('http://localhost:8080/message', {
      bot_id: newData.botId,
      user_id: newData.userId,
      image: newData.image,
      message: newData.message
    });
  }

  async messageFetch() {
    const apiUrlPhp = 'http://localhost:8080/messages';

    const options = {
      method: 'GET',
      url: apiUrlPhp
    };

    const response = await axios.request(options);
    try {
      this.allMessages = response.data.slice(0, -20)
        .map((message) => ({
          id: message.id,
          name: message.name,
          avatar: message.avatar,
          userId: message.user_id,
          botId: message.bot_id,
          message: message.message,
          image: message.image,
          date: message.date
        }));

      // eslint-disable-next-line no-restricted-syntax
      for (const ele of response.data.slice(-20)) {
        const data = ele;
        data.botId = ele.bot_id;
        data.userId = ele.user_id;
        // eslint-disable-next-line no-await-in-loop
        await this.sendMessage(data, true);
      }
    } catch (error) {
      return error;
    }
    return response.data;
  }

  async showOldMessages() {
    await this.messageFetch();
  }

  scrollToBottom() {
    const elRightSide = document.querySelector('.messages-section');
    elRightSide.scrollTo(0, elRightSide.scrollHeight);
  }

  render() {
    return `
      <div class="row">
        <div class="col-12">${viewNav()}</div>
      </div>
      <div class="container-fluid pt-4">
          ${viewHome(this.bots)}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chat;
