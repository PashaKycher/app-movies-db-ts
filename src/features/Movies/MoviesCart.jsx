import React from 'react'
import { Link as RouterLink } from 'react-router-dom'
import { memo } from 'react';
import { Card, CardMedia, CardContent, Typography, CardActions, Button, IconButton, Tooltip, Rating } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite';

function MoviesCart({ image, id, title, popularity, overview, year, enabled, onAddToFavorite }) {
    
    // console.count("MoviesCart")
    return (
        <Card key={id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="div" image={image} alt={title} sx={{ pt: "56.25%" }} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>{title}</Typography>
                <Typography variant='body2' color='text.secondary'> {popularity/2}</Typography>
                <Rating name="half-rating-read" defaultValue={popularity/2} precision={0.5} readOnly />
                <Typography variant='buutton' display='block' mt={2}>{overview}</Typography>
                <Typography variant='body2'sx={{ mt: 2 }} >{year}</Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/movies/${id}`} color="secondary">Details</Button>
                {enabled && <Tooltip title="Add to favorites">
                    <IconButton onClick={() => onAddToFavorite?.(id)}>
                        <FavoriteIcon />
                    </IconButton>
                </Tooltip>}
            </CardActions>
        </Card>
    )
}

export default memo(MoviesCart)
