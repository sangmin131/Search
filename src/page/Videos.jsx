import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from "react-router-dom";
import FackYoutube from '../api/fakeYoutube';
import { search } from '../api/youtube';
import VideoCard from '../VideoCard';


export default function Videos() {
  const {keyword} = useParams();
  const {isLoadung, error, data: videos} = useQuery(
    ['videos', keyword], () => {
      const youtube = new FackYoutube();
      return youtube.search(keyword);
    }
  );
  return (
    <>
    <div>검색결과 {keyword ? `😎${keyword}`:'🥺'}</div>
    {isLoadung && <p>Loading...</p>}
    {error && <p>Something is wrong😫</p>}
    {videos && <ul>
      {videos.map(video => <VideoCard key={video.id} video = {video}/> ) }
      </ul>}
    </>
  );
}

