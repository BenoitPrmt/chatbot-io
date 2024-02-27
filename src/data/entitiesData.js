import {
  helloAction,
  pokemonAction,
  serpentAction,
  parkingAction,
  swAction,
  headsOrTailsAction,
  shifumiAction,
  passwordAction,
  weatherAction,
  loveAction,
  fortniteShop,
  fortniteLastAdded
} from '../models/bots/actions/index';

import gameMaster from '../assets/bots/gamemaster.jpeg';
import cupid from '../assets/bots/cupid.jpg';
import C3PO from '../assets/bots/c-3po.jpeg';
import professorOak from '../assets/bots/professoroak.png';
import woody from '../assets/bots/woody.jpeg';
import evelyne from '../assets/bots/evelyne.jpeg';
import gameHelper from '../assets/bots/game-helper.webp';

// TODO: REFACTOR IMPORTS

const entities = [
  {
    name: 'Assistant',
    description: 'I am an assistant to help you !',
    avatar: 'https://source.boringavatars.com/',
    actions: [
      helloAction,
      parkingAction,
      passwordAction
    ]
  },
  {
    name: 'Evelyne Dehliat',
    description: 'Miss météo',
    avatar: evelyne,
    actions: [
      helloAction,
      weatherAction
    ]
  },
  {
    name: 'Professor Oak',
    description: 'Catch them all',
    avatar: professorOak,
    actions: [
      helloAction,
      pokemonAction
    ]
  },
  {
    name: 'Game Master',
    description: 'I am the game master',
    avatar: gameMaster,
    actions: [
      helloAction,
      headsOrTailsAction,
      shifumiAction
    ]
  },
  {
    name: 'C-3PO',
    description: 'A pleasure to meet you. I am C-3PO, Human-Cyborg Relations.',
    avatar: C3PO,
    actions: [
      helloAction,
      swAction
    ]
  },
  {
    name: 'Woody',
    description: 'There\'s a snake in his boot',
    avatar: woody,
    actions: [
      helloAction,
      serpentAction
    ]
  },
  {
    name: 'Cupid',
    description: 'I calculate your love percentage',
    avatar: cupid,
    actions: [
      helloAction,
      loveAction
    ]
  },
  {
    name: 'Video Game Helper',
    description: 'I can help you in every game',
    avatar: gameHelper,
    actions: [
      helloAction,
      fortniteLastAdded,
      fortniteShop
    ]
  }
];

export default entities;
