import viewNav from '../views/nav';
import viewHome from '../views/home';

const Home = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.messages = [];

    this.run();
  }

  sendMessage() {
    const elInputMessageContent = document.querySelector('.input-message-content');
    const elMessagesSection = document.querySelector('.messages-section');

    if (elInputMessageContent.value.length === 0) return;

    const messageToSend = {
      sender: 'User',
      senderType: 'user',
      receiver: 'Bot 1',
      date: new Date(),
      content: elInputMessageContent.value
    };

    elMessagesSection.innerHTML += this.addMessageToSection(messageToSend);
    this.scrollToBottom();

    this.messages.push(messageToSend);
    elInputMessageContent.value = '';
  }

  addMessageToSection(message) {
    const { sender, senderType, content } = message;
    return `
    <div class="d-flex ${senderType === 'user' ? 'justify-content-end' : 'justify-content-start'}">
      <div class="card">
        <div class="card-header ${senderType === 'user' ? 'justify-content-end' : 'justify-content-start'}">
          <h5>${sender}</h5>
          <img class="avatar rounded-circle"
                       src="https://www.science-et-vie.com/wp-content/uploads/scienceetvie/2022/12/tortue-marine-scaled.jpg"
                       alt="">
        </div>
        <div class="card-body">
            <p class="card-text">${content}</p>
        </div>
      </div>
    </div>
    `;
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
      this.sendMessage();
    });

    document.addEventListener('keyup', (e) => {
      if (e.code === 'Enter') {
        this.sendMessage();
      }
    });
  }
};

export default Home;
