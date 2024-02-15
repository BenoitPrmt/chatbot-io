import viewNav from '../views/nav';
import viewHome from '../views/home';
import viewMessage from '../views/message';
import botsData from '../data/botsData.json';
import commandsData from '../data/commandsData.json';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;
    this.messages = [];

    this.bots = botsData;
    this.commands = commandsData;

    this.run();
  }

  checkIfCommand(message) {
    const command = this.commands.find((cmd) => cmd.command === message.content);
    if (command) {
      if (command.bots === 'all') {
        this.bots.forEach((bot) => {
          this.sendMessage({
            sender: bot.name,
            receiver: 'User',
            date: new Date(),
            content: command.response.replace('{{user}}', 'Bob'),
            avatar: 'https://source.boringavatars.com/'
          });
        });
      }
    }
  }

  userSendMessage() {
    const elInputMessageContent = document.querySelector('.input-message-content');

    if (elInputMessageContent.value.length === 0) return;

    this.sendMessage({
      sender: 'User',
      receiver: 'Bot',
      date: new Date(),
      content: elInputMessageContent.value,
      avatar: 'https://source.boringavatars.com/'
    });
    elInputMessageContent.value = '';
  }

  sendMessage(messageData) {
    const elMessagesSection = document.querySelector('.messages-section');

    const {
      sender, receiver, date, content, avatar
    } = messageData;

    const messageToSend = {
      sender,
      receiver,
      date,
      content,
      avatar
    };

    this.messages.push(messageToSend);
    this.updateLocalStorage(messageToSend);

    elMessagesSection.innerHTML += viewMessage(messageToSend);
    this.checkIfCommand(messageToSend);

    this.scrollToBottom();
  }

  updateLocalStorage(newData) {
    let data = localStorage.getItem('messages') || '[]';
    data = JSON.parse(data);

    if (!data.includes(newData)) {
      data.push(newData);
    }

    localStorage.setItem('messages', JSON.stringify(data));
  }

  showOldMessages() {
    let data = localStorage.getItem('messages') || '[]';
    data = JSON.parse(data);

    data.forEach((message) => {
      this.sendMessage(message);
    });
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

    this.scrollToBottom();

    const elSendButton = document.querySelector('.send-message');
    elSendButton.addEventListener('click', () => {
      this.userSendMessage();
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        this.userSendMessage();
        // this.sendMessage({
        //   sender: 'Bot',
        //   receiver: 'User',
        //   date: new Date(),
        //   content: 'Bonjour User ! Bienvenue dans le chat !',
        //   avatar: 'https://source.boringavatars.com/'
        // });
      }
    });
  }
};

export default Home;
