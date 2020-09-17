
import { Container } from '@material-ui/core';
import React from 'react'
import ReactPlayer from 'react-player'
import PicPlayer from './carouselgrid';

export default function VideoPlayer() {
    return (
        <div style = {{display: 'flex'}}>
            
            <ReactPlayer
                    url= 'https://vimeo.com/62074844'
                    controls = {true}
                    playing = {true}
                    loop = {true}
                    muted = {true} 
                    style = {{maxWidth: '400px', maxHeight: '300px'}}          
                    />
            <PicPlayer />  
                                
        </div>
    );
  }
