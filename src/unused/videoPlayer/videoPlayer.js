import React, { useRef } from 'react'
import './videoPlayer.css'
import {useState} from 'react'


const VideoPlayer = ({playState, setPlayState,youtubeID}) => {
    const player = useRef(null);
    const closePlayer = (e) => {
        if(e.target === player.current){
            setPlayState(false);
        }
    }
  return (
    <div className={`video_player ${playState ? '' : 'hide'}`} ref={player} onClick={closePlayer}>
        <iframe 
            title='Youtube Player'
            sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
            src={`${playState ? `https://youtube.com/embed/${youtubeID}?autoplay=1` : `https://youtube.com/embed/${youtubeID}?autoplay=0`} `}>
        </iframe>
    </div>
  )
}

export default VideoPlayer
