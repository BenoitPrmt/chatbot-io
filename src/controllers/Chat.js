import axios from 'axios';

import Bot from '../models/bots/index';
import entities from '../data/entitiesData';

import viewMessage from '../views/message';
import viewNav from '../views/nav';
import viewHome from '../views/home';

// TODO(Benoit) : Refactor le fichier pour optimiser le code
const Chat = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();

    this.elMessage = document.querySelector('.messages-section');

    this.bots = entities.map((entity) => new Bot(entity));
    this.botsCommands = this.bots.map(
      (bot) => bot.entity.actions.map((action) => action.words)
    )
      .flat();
    this.username = localStorage.getItem('username')
      .replace(/"/g, '');

    this.showOldMessages();
    this.scrollToBottom();
    this.addListeners();
    this.enableCommandHistory();
  }

  addListeners() {
    const elSendButton = document.querySelector('.send-message');
    elSendButton.addEventListener('click', () => {
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
        elCommands.innerHTML = commands.map((command) => `<li>${command.join(' | ')}</li>`)
          .join('');
      } else if (prefix.length === 0) {
        const elCommands = document.querySelector('.autocomplete-items');
        elCommands.innerHTML = '';
      }

      if (e.code === 'Enter') {
        this.userSendMessage();
      }
    });
  }

  enableCommandHistory() {
    const elInputField = document.querySelector('.message-input');
    elInputField.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowUp') {
        let data = JSON.parse(localStorage.getItem('messages') || '[]');
        data = data.filter((message) => message.sender === this.username);
        const lastMessage = data[data.length - 1];
        elInputField.value = lastMessage.content;
      }
    });
  }

  checkIfMessageIsCommand(message) {
    const messageWords = message.content.split(' ');
    const prefix = messageWords[0];
    const args = messageWords.slice(1) || [];

    this.bots.forEach((bot) => {
      bot.runAction(prefix, args)
        .then((botResponse) => {
          if (botResponse) {
            this.sendMessage(
              {
                sender: bot.entity.name,
                receiver: this.username,
                date: new Date(),
                content: botResponse.message,
                image: botResponse.image || null,
                avatar: bot.entity.avatar
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
      sender: this.username,
      receiver: 'Bot',
      date: new Date(),
      content: elInputMessageContent.value,
      image: null,
      avatar: 'https://source.boringavatars.com/'
    });
    elInputMessageContent.value = '';
    const elCommands = document.querySelector('.autocomplete-items');
    elCommands.innerHTML = '';
  }

  sendMessage(messageData, archiveMessage = false) {
    const {
      sender,
      receiver,
      date,
      content,
      image,
      avatar
    } = messageData;

    const messageToSend = {
      id: `id${Math.random()
        .toString(16)
        .slice(2)}`,
      sender,
      receiver,
      date,
      content,
      image,
      avatar
    };

    if (!archiveMessage) {
      this.updateLocalStorage(messageToSend);

      if (messageToSend.sender === this.username) {
        this.checkIfMessageIsCommand(messageToSend);
      }
    }

    // this.run(messageToSend);

    this.elMessage.innerHTML += viewMessage(messageToSend);
    this.scrollToBottom();
  }

  updateLocalStorage(newData) {
    const data = JSON.parse(localStorage.getItem('messages') || '[]');
    if (data.length > 50) data.shift();

    if (!data.includes(newData)) {
      data.push(newData);
    }

    localStorage.setItem('messages', JSON.stringify(data));
  }

  async messageFetch() {
    const apiUrlPhp = 'http://localhost:8080/messages';

    const options = {
      method: 'GET',
      url: apiUrlPhp
    };

    const response = await axios.request(options);
    response.data.forEach((ele) => {
      console.log(ele);
      this.sendMessage(ele, true);
    });
  }

  async showOldMessages() {
    let data = localStorage.getItem('messages') || '[]';
    data = JSON.parse(data);

    data.forEach((message) => {
      this.sendMessage(
        message,
        true
      );
    });
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
          ${viewHome()}
      </div>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Chat;
