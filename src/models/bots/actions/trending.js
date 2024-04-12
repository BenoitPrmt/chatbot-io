import axios from 'axios';

const trendingAction = {
  name: 'trending',
  words: ['trending', 'tendance'],
  args: [],
  action: async () => {
    const options = {
      method: 'GET',
      url: 'https://api.themoviedb.org/3/trending/movie/week',
      params: { language: 'fr-FR' },
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.CINEMA_KEY}`
      }
    };

    return axios
      .request(options)
      .then((response) => {
        const result = response.data.results.slice(10);

        let messageContent = '🍿 <b>Films tendances de la semaine</b>';
        result.forEach((movie, index) => {
          messageContent += `<br>#${index + 1} - ${movie.original_title} | ⭐️ <b>${movie.vote_average}/10</b> <i>(${movie.vote_count} votes)</i>`;
        });

        return {
          message: messageContent
        };
      })
      .catch(() => ({ message: 'Erreur' }));
  }
};

export default trendingAction;
