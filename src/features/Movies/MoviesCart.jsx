import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MoviesCart.module.scss'

export default function MoviesCart({ id, title, popularity, overview, year }) {
    return (
        <div className={styles.cart} key={id}>
            <img className='MoviesCartImg' src="/logo.svg" alt="Best movie" />
            <div className={styles.content}>
                <div>
                    <Link to={`/movies/${id}`}>{title}</Link>
                </div>
                <div className={styles.popularity}>{popularity}</div>
                <div className={styles.overview}>{overview}</div>
                <div>{year}</div>
            </div>
        </div>
    )
}
