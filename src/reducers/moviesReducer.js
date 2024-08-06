import { createReduser } from "../redux/utils";
import { client } from '../API/tmdb';

const initialState = {
    top: [],
    loading: false
};

 const moviesLoader = (movies) => ({
    type: "movies/loader",
    payload: movies
})
 const moviesLoading = () => ({
    type: "movies/loading",
})

export function fetchMovies() {
    return async (dispatch, getState) => {
        dispatch(moviesLoading());
      const config = await client.getConfigeration();
      const imageUrl = config.images.base_url;
      const response = await client.getNowPlaying();

      response.results.forEach(movie => {
        movie.backdrop_path = `${imageUrl}w500${movie.backdrop_path}`;
      })
      dispatch(moviesLoader(response.results));
    }
}

const moviesReducer = createReduser(initialState, {
    "movies/loader": (state, action) => {
        return {
            ...state,
            top: action.payload,
            loading: false
        }
    },
    "movies/loading":(state, action) => {
        return {
            ...state,
            loading: true
        }
    }
})
export default moviesReducer