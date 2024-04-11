import Router from './Router';
import Chat from './controllers/Chat';
import Bots from './controllers/Bots';
import Welcome from './controllers/Welcome';
import LogOut from './controllers/LogOut';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Chat,
    private: true
  },
  {
    url: '/bots',
    controller: Bots,
    private: true
  },
  {
    url: '/welcome',
    controller: Welcome
  },
  {
    url: '/logout',
    controller: LogOut
  }
];
new Router(routes);
