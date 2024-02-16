const pokemonAction = {
  name: 'pokemon',
  words: ['pokemon', 'poke'],
  action: async (args) => {
    const headers = {
      Accept: 'application/json'
    };
    try {
      const response = await fetch(`https://tyradex.tech/api/v1/pokemon/${args[0]}`, {
        method: 'GET',
        headers
      });
      const { name: { fr }, sprites: { regular } } = await response.json();
      return `Informations sur ${fr} / ${regular}`;
    } catch (error) {
      return error;
    }
  }
};

export default pokemonAction;
