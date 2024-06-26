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
  fortniteShopAction,
  fortniteLastAddedAction,
  fortniteMapAction,
  fortniteStatsAction,
  exchangeRateAction,
  valorantAgentsAction,
  movieAction,
  trendingAction,
  mashupAction
} from '../models/bots/actions/index';

import {
  gameMaster,
  cupid,
  C3PO,
  professorOak,
  woody,
  evelyne,
  gameHelper,
  cinemaAvatar
} from '../assets/index';

// TODO: REFACTOR IMPORTS

const entities = [
  {
    name: 'Assistant',
    description: 'I am an assistant to help you !',
    avatar: 'https://source.boringavatars.com/',
    actions: [
      helloAction,
      parkingAction,
      passwordAction,
      exchangeRateAction,
      mashupAction
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
    name: 'Video Game',
    description: 'I can help you in every game',
    avatar: gameHelper,
    actions: [
      helloAction,
      fortniteLastAddedAction,
      fortniteShopAction,
      fortniteMapAction,
      fortniteStatsAction,
      valorantAgentsAction
    ]
  },
  {
    name: 'Cinema',
    description: 'Search movies',
    avatar: cinemaAvatar,
    actions: [
      helloAction,
      movieAction,
      trendingAction
    ]
  }
];

export default entities;
