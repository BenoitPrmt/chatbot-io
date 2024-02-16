import viewMessage from '../views/message';

import Bot from '../models/bots/index';
import entities from '../data/entitiesData';

const Chat = class {
  constructor() {
    this.el = document.querySelector('.messages-section');
    this.bots = entities.map((entity) => new Bot(entity));
    this.username = localStorage.getItem('username')
      .replace(/"/g, '');

    this.showOldMessages();

    this.scrollToBottom();

    const elSendButton = document.querySelector('.send-message');
    elSendButton.addEventListener('click', () => {
      this.userSendMessage();
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        this.userSendMessage();
      }
    });
  }

  checkIfCommand(message) {
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
    const elInputMessageContent = document.querySelector('.input-message-content');

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
        this.checkIfCommand(messageToSend);
      }
    }

    this.run(messageToSend);
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

  showOldMessages() {
    let data = localStorage.getItem('messages') || '[]';
    data = JSON.parse(data);

    data.forEach((message) => {
      this.sendMessage(message, true);
    });
  }

  scrollToBottom() {
    const elRightSide = document.querySelector('.messages-section');
    elRightSide.scrollTo(0, elRightSide.scrollHeight);
  }

  render(messageData) {
    return viewMessage(messageData);
  }

  run(messageData) {
    this.el.innerHTML += this.render(messageData);
  }
};

export default Chat;
