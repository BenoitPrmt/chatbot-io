import Router from './Router';
import Search from './controllers/Search';
import './index.scss';

const routes = [
  {
    url: '/search',
    controller: Search
  }
];

new Router(routes);
