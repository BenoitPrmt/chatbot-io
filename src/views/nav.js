import { robotIcon } from '../assets/index';

export default () => {
  const currentPath = window.location.pathname;

  const isActive = (path) => (currentPath === path ? 'active' : '');

  return `
    <nav class="navbar navbar-expand-lg py-2">
      <div class="container-fluid d-flex ps-5">
        <div class="d-flex gap-3">
          <a href='/' style="text-decoration: none;"><img src="${robotIcon}" alt="Robot Icon"></a>
          <a class="nav-link ${isActive('/')}" href="/">Chatbot IO</a>
          <a class="nav-link ${isActive('/bots')}" href="/bots">Commands</a>
        </div>
      </div>
    </nav>
  `;
};
