const starWarsAction = {
  name: 'StarWars',
  words: ['sw', 'star-wars', 'Star-Wars', 'starWars'],
  args: ['character_name'],
  action: async (args) => {
    const headers = {
      Accept: 'application/json'
    };

    async function fetchData(url) {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers
        });
        const dataJson = await response.json();

        const { status } = dataJson;
        if (status === 404) return { message: `No character with the name ${args.join(' ')}` };

        const matchingCharacter = dataJson.results.find((data) => data.name.toLowerCase() === args.join(' ').toLowerCase());

        if (matchingCharacter) {
          return {
            message: `Name: ${matchingCharacter.name}<br>
            Birth Year: ${matchingCharacter.birth_year}<br>
            Gender: ${matchingCharacter.gender}<br>
            Height: ${matchingCharacter.height}cm<br>
            Mass: ${matchingCharacter.mass}kg<br>
            Hair color: ${matchingCharacter.hair_color}<br>
            Skin color: ${matchingCharacter.skin_color}<br>
            Eye color: ${matchingCharacter.eye_color}<br>
            `
          };
        }

        if (dataJson.next) {
          return await fetchData(dataJson.next);
        }
        return { message: 'No result found' };
      } catch (error) {
        return error;
      }
    }

    // Call fetchData and return the result wrapped in a promise
    return new Promise((resolve, reject) => {
      fetchData('https://swapi.dev/api/people?page=1')
        .then(resolve)
        .catch(reject);
    });
  }
};

export default starWarsAction;
