import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { AuthContext } from '../../AuthContext';
import { anonymousUser } from '../../AuthContext';
import {useContext} from 'react'

export default function Home() {
    const auth = useContext(AuthContext)
    const loggedIn = auth.user !== anonymousUser
    const greeting = loggedIn   ? `Welcome! ${auth.user.name}, exlore movies today with us!`
                                : 'Welcome Guest, exlore movies today with us!'
    return (
        <Box sx={{ bgcolor: 'Background.paper', pt: 8, pd: 8 }}>
            <Container maxWidth="sm">
                <Typography component="h1"
                    variant="h2"
                    align="center"
                    color='text.primary'
                    gutterBottom>
                    Welcome to The Movies DB
                </Typography>
                <Typography variant="h5"
                    align="center"
                    color="text.secondary"
                    paragraph>
                    {greeting}
                </Typography>
                <Stack sx={{ pt: 4 }}
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                    <Button component={RouterLink} to="/movies" variant="contained" color="secondary">Explore</Button>
                </Stack>
            </Container>
        </Box>)}

