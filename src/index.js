import Router from './Router';
import Search from './controllers/Search';
import Home from './controllers/Home';
import './index.scss';

const routes = [
  {
    url: '/',
    controller: Home
  },
  {
    url: '/search',
    controller: Search
  }
];

new Router(routes);
