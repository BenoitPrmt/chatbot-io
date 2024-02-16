const pokemonAction = {
  name: 'pokemon',
  words: ['pokemon', 'poke'],
  args: ['pokemon_name'],
  action: async (args) => {
    const headers = {
      Accept: 'application/json'
    };
    try {
      const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${args[0]}`, {
        method: 'GET',
        headers
      });
      const { status } = await response.json();
      if (status === 404) return { message: `No pokemon found with the name ${args[0]}` };

      const {
        name: { en },
        sprites: { regular },
        pokedexId,
        generation,
        types
      } = await response.json();

      return {
        message: `Infos on ${en} | ${types.map((type) => `<img width="35px" height="35px" class="mb-2 rounded-circle" src=${type.image}>`).join(' ')}<br>Pokedex ID: ${pokedexId}<br>Generation: ${generation}`,
        image: regular
      };
    } catch (error) {
      return error;
    }
  }
};

export default pokemonAction;
