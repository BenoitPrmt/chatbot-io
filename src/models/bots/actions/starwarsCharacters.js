import axios from 'axios';

// eslint-disable-next-line arrow-body-style
const formatAttribute = (attributeName, attributeValue) => {
  return attributeValue && attributeValue !== 'NA' ? `${attributeName}: ${attributeValue}<br/>` : '';
};

const swCharactersAction = {
  name: 'Star Wars Characters',
  words: ['swCharacters', 'star-wars-characters', 'starwarsCharacters', 'Star-Wars-Characters', 'starWarsCharacters'],
  args: [],
  action: async () => {
    const apiUrl = 'https://star-wars-characters.p.rapidapi.com/46DYBV/star_wars_characters';

    const options = {
      method: 'GET',
      url: apiUrl,
      headers: {
        'X-RapidAPI-Key': process.env.STARWARS_API_KEY,
        'X-RapidAPI-Host': 'star-wars-characters.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
      const characters = response.data;

      const formattedCharacters = characters.map((character) => {
        const {
          // eslint-disable-next-line @typescript-eslint/naming-convention
          birth_year,
          gender,
          height,
          homeworld,
          mass,
          name,
          species
        } = character;

        const formattedName = formatAttribute('Name', name);
        const formattedBirthYear = formatAttribute('Birth Year', birth_year);
        const formattedGender = formatAttribute('Gender', gender);
        const formattedHeight = formatAttribute('Height', height);
        const formattedHomeworld = formatAttribute('Homeworld', homeworld);
        const formattedMass = formatAttribute('Mass', mass);
        const formattedSpecies = formatAttribute('Species', species);

        return character && `
  ${formattedName}
  ${formattedBirthYear}
  ${formattedGender}
  ${formattedHeight}
  ${formattedHomeworld}
  ${formattedMass}
  ${formattedSpecies}<br/>`;
      });

      return {
        message: formattedCharacters.join('')
      };
    } catch (error) {
      return error;
    }
  }
};

export default swCharactersAction;
