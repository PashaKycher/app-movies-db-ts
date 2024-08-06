import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { Card, CardMedia, CardContent, Typography, CardActions, Button } from '@mui/material'

export default function MoviesCart({ image, id, title, popularity, overview, year }) {
    return (
        <Card key={id} sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
            <CardMedia component="div" image={image} alt={title} sx={{ pt: "56.25%" }} />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h5" gutterBottom>
                    {title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>{popularity}</Typography>
                <Typography variant='buutton' display='block' mt={2}>{overview}</Typography>
                <Typography variant='body2'>{year}</Typography>
            </CardContent>
            <CardActions>
                <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
                    Details
                </Button>
            </CardActions>
        </Card>
    )
}
