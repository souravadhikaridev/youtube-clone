import React, { Component } from 'react'
import VideoItem from './VideoItem'
import { Grid } from '@material-ui/core'

const Videolist = ({videos, onVideoSelect}) => {

   const videolist = videos.map((video, index)=> <VideoItem onVideoSelect={onVideoSelect} key={index} video={video}/>)
    return (
        <Grid container spacing={10}>
            {videolist}
        </Grid>
    )
    
}
export default Videolist
