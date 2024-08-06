import { Box, Button, Container, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'

export default function Home() {
  return (
    <Box sx={{bgcolor: 'Background.paper', pt:8, pd:8}}>
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
                Exlore movies today with us!
            </Typography>
            <Stack  sx={{pt:4}}
                    direction="row"
                    spacing={2}
                    justifyContent="center">
                <Button component={RouterLink} to="/movies" variant="contained" color="secondary">Explore</Button>
            </Stack>
        </Container>
    </Box>
  )
}
 
