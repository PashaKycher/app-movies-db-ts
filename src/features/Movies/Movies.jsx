import React, { useContext, useState, useCallback } from 'react'
import { Container, Grid, LinearProgress, Typography } from '@mui/material';
import { AuthContext, anonymousUser } from '../../AuthContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserverts';
import MoviesCart from './MoviesCart';
import MoviesFilter from './MoviesFilter';
import { useGetMoviesQuery, useGetConfigurationQuery } from '../../services/tmdb';

const initialQuery = {
  page: 1,
  filters: {},
};

function Movies() {
  const [query, setQuery] = useState(initialQuery);
  const { data: configuration } = useGetConfigurationQuery();
  const { data, isFetching } = useGetMoviesQuery(query);
  const movies = data?.results;
  const hasMorePages = data?.hasMorePages;
  const auth = useContext(AuthContext)
  const loggedIn = auth.user !== anonymousUser
  const handleAddToFavorites = useCallback(
    (id) => alert(`Not implemented! Action: ${auth.user.name} is adding movie ${id} to favorites.`),
    [auth.user.name])
  const onIntersect = useCallback(() => {
    if (hasMorePages) { setQuery((q) => ({ ...q, page: q.page + 1 })); }
  }, [hasMorePages]);
  const [targetRef] = useIntersectionObserver({ onIntersect })

  function formatImageUrl(imagePath) {
    return imagePath && configuration ? `${configuration.images.base_url}w500${imagePath}` : undefined;
  }
  return (
    <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
      <Grid item xs="auto">
        <MoviesFilter
          onApply={(filters) => {
            const moviesFilters = {
              keywords: filters?.keywords.map((k) => k.id),
              genres: filters?.genres,
            };
            setQuery({
              page: 1,
              filters: moviesFilters,
            });
          }} />
      </Grid>
      <Grid item xs={12}>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {!isFetching && !movies?.length && 
          <Typography variant="h6">No movies were found that match your query.</Typography>}
          <Grid container spacing={4}>
            {movies?.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4}>
                <MoviesCart
                  image={formatImageUrl(movie.backdrop_path)}
                  id={movie.id}
                  title={movie.title}
                  popularity={movie.vote_average}
                  overview={movie.overview}
                  year={movie.release_date}
                  enabled={loggedIn}
                  onAddToFavorite={handleAddToFavorites} />
              </Grid>))}
          </Grid>
          <div ref={targetRef}>{isFetching && <LinearProgress color='secondary' sx={{ mt: 2 }} />}</div>
        </Container>
      </Grid >
    </Grid >
  )
}

export default Movies;