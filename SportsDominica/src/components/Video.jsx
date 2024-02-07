import {  Box, Typography, Stack, Button, Card, CardHeader, CardContent, CardMedia, CardActions, Grid, Skeleton } from '@mui/material'

import GetVideos from '../modules/Video/VideoDataFetch'

import { useSelector } from "react-redux"
import { useEffect, useRef, useState } from 'react';

import Youtube from 'react-youtube'




// TODO: Set up this component to recieve the video/media type (name) you want to use

const Video = ({ video_id }) => {

  // GetVideos()

  const videos = useSelector((state) => state.video)
  let raw_video = videos ? videos[0]: null;

  const getVideoDimensions = () => {
    const windowWidth = window.innerWidth;

    // Adjust these values based on your layout and design preferences
    if (windowWidth >= 1200) {
      return { width: '800', height: '450' };
    } else if (windowWidth >= 768) {
      return { width: '900', height: '480' };
    }else if (windowWidth >= 300) {
      return { width: '285', height: '195' };
    } 
    else {
      return { width: '250', height: '200' };
    }
  };


  const { width, height } = getVideoDimensions();


  const opts = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
      controls: 0,
      fs: 0,
      iv_load_policy: 3,
      loop: 1,

    },
  };

  const onEnd = (event) => {
    // Manually seek to the beginning when the video ends
    event.target.seekTo(0);
  };



  return(

    <Box display='flex' justifyContent='center' alignItems='center' marginTop={2} width={{xs: '100%'}} style={{ height: '100%'}}>

        <Youtube
        videoId={video_id}
        opts={{ ...opts, width, height }}
        onReady={(event) => {
          event.target.pauseVideo();
        }}
        onEnd={onEnd}

        />

    </Box>

  )

}

export default Video