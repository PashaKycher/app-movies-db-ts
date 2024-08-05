import React from 'react'
import { connect } from 'react-redux'
import MoviesCart from './MoviesCart';
import styles from './Movies.module.scss'

function Movies({ movies }) {
  return (
    <section>
      <div className={styles.list}>
        {movies.map(movie => (
          <MoviesCart
            key={movie.id}
            id={movie.id}
            title={movie.title}
            popularity={movie.popularity}
            overview={movie.overview}
            year={movie.year} />
        ))}
      </div>
    </section>

  )
}

const mapStateToProps = (state) => ({
  movies: state.movies.top
});

const connector = connect(mapStateToProps);

export default connector(Movies);