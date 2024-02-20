const parkingAction = {
  name: 'parking',
  words: ['parking'],
  args: ['parking_name'],
  action: async (args) => {
    console.log(args.join(' '));
    const headers = {
      Accept: 'application/json'
    };
    try {
      const response = await fetch('https://data.orleans-metropole.fr/api/explore/v2.1/catalog/datasets/om-mobilite-parcs-stationnement/records?limit=100', {
        method: 'GET',
        headers
      });
      const dataJson = await response.json();
      const parking = dataJson.results.find(
        (element) => element.nom.toLowerCase() === args.join(' ').toLowerCase()
      );

      if (!parking) return { message: `No parking found with the name ${args[0]}` };

      return {
        message: `🚗 ${parking.nom} has ${parking.nb_places_disponibles}/${parking.nb_places} available places (${parking.taux_disponibilite}%)`
      };
    } catch (error) {
      return error;
    }
  }
};

export default parkingAction;
