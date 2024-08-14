import  PlayArrowIcon  from '@mui/icons-material/PlayArrow'
import PauseIcon from '@mui/icons-material/Pause'
import { CardMedia, Card, CardActions, IconButton } from '@mui/material'
import React, { useRef, useState } from 'react'

export default function CountdownVideo() {
    const [isPlay, setPlay] = useState(false)
    const videoRef =useRef(null);
    function togglePlay() {
        const nextPlay = !isPlay
        if(nextPlay) { videoRef.current.play() }
        else{ videoRef.current.pause() }
    }

    return (
        <Card>
            <CardMedia>
                <video ref={videoRef} src='https://www.pexels.com/download/video/3843433' height='500'
                onPlay={() => setPlay(true)} onPause={() => setPlay(false)} />
            </CardMedia>
            <CardActions>
                <IconButton onClick={togglePlay}>
                    {isPlay ? <PauseIcon sx={{height: 38, width: 38}} /> : <PlayArrowIcon sx={{height: 38, width: 38}} />}
                </IconButton>
            </CardActions>
        </Card>
    )
}
