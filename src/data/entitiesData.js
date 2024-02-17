import helloAction from '../models/bots/actions/hello';
import jediAction from '../models/bots/actions/jedi';
import pokemonAction from '../models/bots/actions/pokemon';
import serpentAction from '../models/bots/actions/botte';

const entities = [
  {
    name: 'Assistant',
    description: 'I am an assistant to help you !',
    avatar: 'https://source.boringavatars.com/',
    actions: [
      helloAction
    ]
  },
  {
    name: 'Yoda',
    description: 'Yoda, I am',
    avatar: 'https://fr.web.img4.acsta.net/r_1280_720/newsv7/21/06/23/11/44/3625774.jpg',
    actions: [
      helloAction,
      jediAction
    ]
  },
  {
    name: 'Evelyne Dehliat',
    description: 'Miss météo',
    avatar: 'https://www.gala.fr/imgre/fit/~1~gal~2023~10~02~c259200d-c07b-45a2-94bc-b2b9c289807b.jpeg/2671x1914/quality/80/evelyne-dheliat.jpeg',
    actions: [
      helloAction
    ]
  },
  {
    name: 'Professor Oak',
    description: 'Catch them all',
    avatar: 'https://cdn.discordapp.com/attachments/810585716580810752/1207976431242584074/1000.png?ex=65e19ab8&is=65cf25b8&hm=c063310283d53809a027f937edb0898e8a21156deae35f4fcc34c72eb8e755c5&',
    actions: [
      helloAction,
      pokemonAction
    ]
  },
  {
    name: 'Woody',
    description: 'There\'s a snake in his boot',
    avatar: 'https://static.voices.com/wp-content/uploads/2022/10/open-uri20150422-20810-10n7ovy_9b42e613-e1668010464234.jpeg',
    actions: [
      helloAction,
      serpentAction
    ]
  }
];

export default entities;
