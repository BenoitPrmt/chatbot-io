import Router from './Router';
import Search from './controllers/Search';
import Home from './controllers/Home';
import Bots from './controllers/Bots';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/search',
    controller: Search
  },
  {
    url: '/bots',
    controller: Bots
  }
];

new Router(routes);
