import React, { useEffect, useRef, useState } from 'react'
import { addPopupToMapWidget, createMapWidget } from './mapWidget'
import { Box, Container, Typography } from '@mui/material'
import { createPortal } from 'react-dom'

export default function MapView() {
  const containerRef = useRef(null)
  const mapRef = useRef(null)
  const [popupContainer, setPopupContainer] = useState(null)

  useEffect(() => {
    if (mapRef.current === null) {
      const map = createMapWidget(containerRef.current)
      mapRef.current = map
      const popupDiv = addPopupToMapWidget(map)
      setPopupContainer(popupDiv)
    }}, [])
  return (
    <Container ref={containerRef} sx={{width: 800, height: 500, my: 2 }}>
      {popupContainer !== null && createPortal(<Greeting />, popupContainer)}
    </Container>
  )
}

function Greeting() {
  return <Box>
    <Typography>Greeting</Typography>
  </Box>
}

