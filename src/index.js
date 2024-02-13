import Router from './Router';
import Home from './controllers/Home';
import Bots from './controllers/Bots';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/bots',
    controller: Bots
  }
];

new Router(routes);
