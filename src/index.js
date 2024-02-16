import Router from './Router';
import Home from './controllers/Home';
import Bots from './controllers/Bots';
import Welcome from './controllers/Welcome';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home,
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
  }
];

new Router(routes);
