import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const tmdbApi = createApi({
  reducerPath: "tmdbApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.themoviedb.org/3`,
    prepareHeaders(headers) {
      headers.set("Accept", "application/json");
      headers.set("Authorization", 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NDRjZGIwNTIwZmQyNDFkODE0OTk2ODUyNDhmNGFjYSIsIm5iZiI6MTcyMjg4NTgzMS43MDIwOTMsInN1YiI6IjY2YjEyM2Y1NGU2ZDJiZmM2NGViNzhjNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.YuRXRhLOTXrJWP56y2CctvQK-psSWGyZtK2R3cSKYN4');
    },
  }),
  endpoints: (builder) => ({
    getConfiguration: builder.query({
      query: () => "/configuration",
    }),
    getMovies: builder.query({
      query(moviesQuery) {
        const params = new URLSearchParams({
          page: moviesQuery.page.toString(),
        });
        
        if (moviesQuery.filters.keywords?.length) {
          params.append("with_keywords", moviesQuery.filters.keywords.join("|"));
        }
        if (moviesQuery.filters.genres?.length) {
          params.append("with_genres", moviesQuery.filters.genres.join(","));
        }

        const query = params.toString();
        const path = `/discover/movie?${query}`;

        return path;
      },
      transformResponse(response, _, arg) {
        return {
          results: response.results,
          lastPage: arg.page,
          hasMorePages: arg.page < response.total_pages,
        };
      },
      serializeQueryArgs({ endpointName }) {
        return endpointName;
      },
      merge(currentCacheData, responseData) {
        if (responseData.lastPage === 1) {
          currentCacheData.results = responseData.results;
        } else {
          currentCacheData.results.push(...responseData.results);
        }

        currentCacheData.hasMorePages = responseData.hasMorePages;
        currentCacheData.lastPage = responseData.lastPage;
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
    getKeywords: builder.query({
      query: (query) => `/search/keyword?query=${query}`,
      transformResponse: (response) => response.results,
    }),
    getGenres: builder.query({
      query: () => "/genre/movie/list",
      transformResponse: (response) => response.genres,
    }),
  }),
});

export const { useGetMoviesQuery, useGetConfigurationQuery, useGetKeywordsQuery, useGetGenresQuery } = tmdbApi;
