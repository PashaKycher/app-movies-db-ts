import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import MoviesCart from './MoviesCart';
import { fetchMovies } from '../../reducers/moviesReducer';
import { useAppDispetch } from '../../hooks';
import { Container, Grid, LinearProgress, Typography } from '@mui/material';

function Movies({ movies, loading }) {
  const dispatch = useAppDispetch();

  useEffect(() => {
    dispatch(fetchMovies())
  }, [dispatch])

  return (
    <Container sx={{ py: 8 }} maxWidth="mg">
      <Typography variant="h4" align="center" gutterBottom>Now Playing</Typography>
      {loading ? (<LinearProgress color='secondary' />) :
        <Grid container spacing={4}>
          {(movies.map(movie => (
            <Grid item key={movie.id} xs={12} sm={6} md={4}>
              <MoviesCart
                key={movie.id}
                image={movie.backdrop_path}
                id={movie.id}
                title={movie.title}
                popularity={movie.popularity}
                overview={movie.overview}
                year={movie.release_date} />
            </Grid>)))}
        </Grid>
      }
    </Container>
  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.top,
  loading: state.movies.loading
});

const connector = connect(mapStateToProps);

export default connector(Movies);