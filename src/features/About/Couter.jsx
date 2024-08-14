import React, { useEffect, useRef, useState } from 'react'
import { Typography } from '@mui/material'

export default function Couter() {
    const [countdown, setCountdown] = useState(9)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => { setCountdown((value) => value - 1) }, 1000)
        return () => clearInterval(intervalRef.current)
    }, [])
    useEffect(() => {
        if (countdown === 0) { clearInterval(intervalRef.current) }
    }, [countdown])

    return (
        <Typography variant='h4' align='center'>Coming soon: {countdown}</Typography>
    )
}
