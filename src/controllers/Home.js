import viewNav from '../views/nav';
import viewHome from '../views/home';
import viewMessage from '../views/message';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.messages = [];

    this.run();
  }

  userSendMessage() {
    const elInputMessageContent = document.querySelector('.input-message-content');

    if (elInputMessageContent.value.length === 0) return;

    this.sendMessage({
      sender: 'User',
      receiver: 'Bot',
      content: elInputMessageContent.value
    });
    elInputMessageContent.value = '';
  }

  sendMessage(messageData) {
    const elMessagesSection = document.querySelector('.messages-section');

    const { sender, receiver, content } = messageData;

    const messageToSend = {
      sender,
      receiver,
      date: new Date(),
      content
    };

    this.messages.push(messageToSend);

    elMessagesSection.innerHTML += viewMessage(messageToSend);
    this.scrollToBottom();
  }

  scrollToBottom() {
    const elRightSide = document.querySelector('.right-side');
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
        this.sendMessage({
          sender: 'Bot',
          receiver: 'User',
          content: 'Bonjour User ! Bienvenue dans le chat !'
        });
      }
    });
  }
};

export default Home;
