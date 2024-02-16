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
      const { name: { en }, sprites: { regular } } = await response.json();
      return `Infos on ${en} (<img width="35px" height="35px" class="mb-2" src=${regular}>)`;
    } catch (error) {
      return error;
    }
  }
};

export default pokemonAction;
