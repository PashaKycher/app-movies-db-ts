import React from 'react'
import { Container } from '@mui/material';
import Couter from './Couter'
import CountdownVideo from './CountdownVideo';
import MapView from './MapView';

export default function About() {
  return (
    <Container sx={{ py: 8 }} maxWidth='md'>
        <Couter/>
        <CountdownVideo/>
        <MapView/>
    </Container>
  )
}
