import { robotIcon } from '../assets/index';

export default () => (`
<nav class="navbar navbar-expand-lg py-2">
  <div class="container-fluid d-flex ps-5">
    <div class="d-flex gap-3">
    <a href='/'><img src="${robotIcon}" alt="Robot Icon"></a>
    <a class="nav-link" href="/">Chatbot IO</a>
    <a class="nav-link" href="/bots">Commands</a>
    </div>
  </div>
</nav>
`);
