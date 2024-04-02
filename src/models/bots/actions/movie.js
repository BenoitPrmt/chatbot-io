import axios from 'axios';

const movieAction = {
  name: 'movie',
  words: ['movie', 'film'],
  args: ['title'],
  action: async (args) => {
    const search = args.join('%20');

    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/search/movie',
      params: {
        query: search, include_adult: 'false', language: 'fr-FR', page: '1'
      },
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer '
      }
    };

    return axios
      .request(options)
      .then((response) => {
        const result = response.data.results[0];

        return {
          message: `🍿 <b>${result.original_title}</b><br>${result.overview}<br>⭐️ <b>${result.vote_average}/10</b> <i>(${result.vote_count} votes)</i>`,
          image: `https://image.tmdb.org/t/p/w342/${result.poster_path}`
        };
      })
      .catch(() => ({ message: 'Erreur' }));
  }
};

export default movieAction;
