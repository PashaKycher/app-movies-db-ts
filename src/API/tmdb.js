
async function get(URL) {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization:
                'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRjZGIwNTIwZmQyNDFkODE0OTk2ODUyNDhmNGFjYSIsIm5iZiI6MTcyMjg4NTgzMS43MDIwOTMsInN1YiI6IjY2YjEyM2Y1NGU2ZDJiZmM2NGViNzhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuRXRhLOTXrJWP56y2CctvQK-psSWGyZtK2R3cSKYN4'
        },
    };

    const response = await fetch(`https://api.themoviedb.org/3${URL}`, options)
    const json = response.json();
    return json
}


export const client = {
    getConfiguration: async () => {
      const response = await get("/configuration");
      return response;
    },
    getNowPlaying: async (page = 1) => {
      const response = await get(`/movie/now_playing?page=${page}`);
      return {
        results: response.results,
        totalPages: response.total_pages,
        page: response.page,
      };
    },
    getKeywords: async (query) => {
      const response = await get(`/search/keyword?query=${query}`);
  
      return response.results;
    },
    getMovies: async (page, filters) => {
      const params = new URLSearchParams({
        page: page.toString(),
      });
  
      if (filters.keywords?.length) {
        params.append("with_keywords", filters.keywords?.join("|"));
      }
  
      if (filters.genres?.length) {
        params.append("with_genres", filters.genres?.join(","));
      }
  
      const query = params.toString();
      const response = await get(`/discover/movie?${query}`);
      return {
        results: response.results,
        totalPages: response.total_pages,
        page: response.page,
      };
    },
  };



