import React, { useEffect, useState } from 'react'
import { YOUTUBE_VIDEO_API } from '../utils/constants';
import VideoCard from './VideoCard';

const VideoContainer = () => {

  const [Videos, setVideos] = useState([]);
  const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
  
  useEffect(() => {
    FetchPopularVideos();
  }, [])

  const FetchPopularVideos = async() => {
    try {
      const res = await fetch(YOUTUBE_VIDEO_API + API_KEY);
      if(!res.ok){
        const err = res.status;
        throw new Error(err)
      }
      else{
        const json = await res.json();
        setVideos(json?.items);
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='flex flex-wrap gap-5'>
      {
        Videos?.map((item) => (
          <VideoCard key={item?.id} info = {item} />
        ) )
      }
    </div>
  )
}

export default VideoContainer