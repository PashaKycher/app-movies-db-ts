import React, { useContext, useEffect, useState,useCallback } from 'react'
import { fetchNextPage, resetMovies } from '../../reducers/moviesReducer';
import { useAppDispetch, useAppSelector } from '../../hooks';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';
import { AuthContext, anonymousUser } from '../../AuthContext';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserverts';
import MoviesCart from './MoviesCart';
import MoviesFilter from './MoviesFilter';


function Movies() {
  const dispatch = useAppDispetch();
  const movies = useAppSelector((state) => state.movies.top);
  const loading = useAppSelector((state) => state.movies.loading);
  const hasMorePages = useAppSelector((state) => state.movies.hasMorePages);
  const [filters, setFilters] = useState();

  const auth = useContext(AuthContext)
  const loggedIn = auth.user !== anonymousUser
  const [targetRef, entry] = useIntersectionObserver()

  useEffect(() => {
    dispatch(resetMovies());
  }, [dispatch]);

  useEffect(() => {
    if (entry?.isIntersecting && hasMorePages) {
      const moviesFilters = filters
        ? {
            keywords: filters.keywords.map((k) => k.id),
            genres: filters.genres,
          }
        : undefined;

      dispatch(fetchNextPage(moviesFilters));
    }
  }, [dispatch, entry?.isIntersecting, filters, hasMorePages]);

  const handleAddToFavorites = useCallback(
    (id) => alert(`Not implemented! Action: ${auth.user.name} is adding movie ${id} to favorites.`),
    [auth.user.name] )

  return (
    <Grid container spacing={2} sx={{ flexWrap: "nowrap" }}>
      <Grid item xs="auto">
        <MoviesFilter
          onApply={(filters) => {
            dispatch(resetMovies());
            setFilters(filters);
          }} />
      </Grid>

      <Grid item xs={12}>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {!loading && !movies.length && <Typography variant="h6">No movies were found that match your query.</Typography>}
          <Grid container spacing={4}>
            {movies.map(movie => (
              <Grid item key={movie.id} xs={12} sm={6} md={4}>
                <MoviesCart
                  image={movie.image}
                  id={movie.id}
                  title={movie.title}
                  popularity={movie.popularity}
                  overview={movie.overview}
                  year={movie.year}
                  enabled={loggedIn}
                  onAddToFavorite={handleAddToFavorites} />
               </Grid>
              ))}
          </Grid>
          <div ref={targetRef}>{loading && <LinearProgress color='secondary' sx={{ mt: 15 }} />}</div>
        </Container>
      </Grid >
    </Grid >
  )
}

export default Movies;