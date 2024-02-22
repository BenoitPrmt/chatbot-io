import helloAction from '../models/bots/actions/hello';
import jediAction from '../models/bots/actions/jedi';
import pokemonAction from '../models/bots/actions/pokemon';
import serpentAction from '../models/bots/actions/botte';
import parkingAction from '../models/bots/actions/parking';
import swAction from '../models/bots/actions/starwars';
import headsOrTailsAction from '../models/bots/actions/headsOrTails';
import shifumiAction from '../models/bots/actions/shifumi';
import passwordAction from '../models/bots/actions/password';
import weatherAction from '../models/bots/actions/weather';
import loveAction from '../models/bots/actions/love';
import gameMaster from '../assets/bots/gamemaster.jpeg';
import yoda from '../assets/bots/yoda.webp';
import cupid from '../assets/bots/cupid.jpg';
import C3PO from '../assets/bots/c-3po.jpeg';
import professorOak from '../assets/bots/professoroak.png';
import woody from '../assets/bots/woody.jpeg';
import evelyne from '../assets/bots/evelyne.jpeg';

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
    name: 'Yoda',
    description: 'Yoda, I am',
    avatar: yoda,
    actions: [
      helloAction,
      jediAction
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
  }
];

export default entities;
