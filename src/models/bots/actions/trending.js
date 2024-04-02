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
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyODUxNjc4N2YxMTA1ZTNjYTkxNzgyMjAxMTRiNDk1NSIsInN1YiI6IjY1OTU1NGRmZWEzN2UwMDc1MzRiZGFiNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.18bKE4Yp97kqGIn89nULsGehBtVZlbyRFmD_SNhyA3I'
      }
    };

    return axios
      .request(options)
      .then((response) => {
        const result = response.data.results.slice(10);
        console.log(result);

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
