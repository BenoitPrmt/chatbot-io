import helloAction from '../models/bots/actions/hello';
import jediAction from '../models/bots/actions/jedi';
import pokemonAction from '../models/bots/actions/pokemon';

const entities = [
  {
    name: 'Bob',
    description: 'Je suis bob',
    avatar: 'https://source.boringavatars.com/',
    actions: [
      helloAction
    ]
  },
  {
    name: 'Yoda',
    description: 'Yoda, je suis',
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
    name: 'Professeur Chen',
    description: 'Attrappez les tous',
    avatar: 'https://cdn.discordapp.com/attachments/810585716580810752/1207976431242584074/1000.png?ex=65e19ab8&is=65cf25b8&hm=c063310283d53809a027f937edb0898e8a21156deae35f4fcc34c72eb8e755c5&',
    actions: [
      helloAction,
      pokemonAction
    ]
  }
];

export default entities;
