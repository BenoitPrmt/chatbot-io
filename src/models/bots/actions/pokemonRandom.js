import axios from 'axios';

const pokemonRandom = {
  name: 'pokemon random',
  words: ['pokeRandom', 'pokemonRandom', 'pokerandom', 'pokemonRandom'],
  args: [],
  action: async () => {
    const headers = {
      Accept: 'application/json'
    };

    const randomNumber = Math.floor(Math.random() * 1000);
    const apiUrlPokemon = `https://tyradex.tech/api/v1/pokemon/${randomNumber}`;

    const options = {
      method: 'GET',
      url: apiUrlPokemon,
      headers
    };

    try {
      const response = await axios.request(options);
      const { status } = response;
      if (status === 404) return { message: 'No pokemon found.' };

      const {
        name: { en, jp },
        sprites: { regular },
        generation,
        types,
        height,
        weight
      } = response.data;

      const pokedexId = response.data.pokedex_id;
      return {
        message: `Infos on ${en} <i>(${jp})</i> | ${types.map((type) => `<img width="35px" height="35px" class="mb-2 rounded-circle" src=${type.image}>`).join(' ')}<br>Pokedex ID: ${pokedexId}<br>Generation: ${generation}<br>Height: ${height}<br>Weight: ${weight}`,
        image: regular
      };
    } catch (error) {
      return error;
    }
  }
};

export default pokemonRandom;
