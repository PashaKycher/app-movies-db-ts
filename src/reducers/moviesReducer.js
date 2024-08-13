import { createReduser } from "../redux/utils";
import { client } from '../API/tmdb';
import { genres } from "../features/Movies/genres";


const initialState = {
  loading: false,
  top: [],
  page: 0,
  hasMorePages: true,
  genres
};

const loading = () => ({
    type: "movies/loading",
})
const loaded = (movies, page, hasMorePages) =>({
    type: "movies/loaded",
    payload: { movies, page, hasMorePages },
})
export const resetMovies = () => ({
    type: "movies/reset",
})

export function fetchNextPage(filters = {}) {
  return async (dispatch, getState) => {
    const state = getState();
    const nextPage = state.movies.page + 1;
    dispatch(fetchPage(nextPage, filters));
  }
}

export function fetchPage(page, filters) {
  return async (dispatch) => {
    dispatch(loading());

    const configuration = await client.getConfiguration();
    const moviesResponse = await client.getMovies(page, filters);
    const imageSize = "w500";
    const movies = moviesResponse.results.map((movie) => ({
      id: movie.id,
      title: movie.title,
      overview: movie.overview,
      popularity: movie.popularity,
      image: `${configuration.images.base_url}${imageSize}${movie.backdrop_path}`,
      year: movie.release_date
    }));
    const hasMorepages = moviesResponse.page < moviesResponse.totalPages;

    dispatch(loaded(movies, page, hasMorepages));
  }
}

const moviesReducer = createReduser(initialState, {
  "movies/loading": (state) => {
    return {
      ...state,
      loading: true
    }
  },

  "movies/loaded": (state, action) => {
    return {
      ...state,
      top: [...state.top, ...action.payload.movies],
      page: action.payload.page,
      hasMorepages: action.payload.hasMorepages,
      loading: false
    }
  },

  "movies/reset": (state) => {
    return { ...initialState };
  },
})
export default moviesReducer





