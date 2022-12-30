import {useState, useEffect} from 'react'
import {Link, useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography, Box, Stack } from '@mui/material'
import { CheckCircle, ThumbUp, Visibility } from '@mui/icons-material'
import { fetchFromAPI } from '../utils/fetchFromAPI'
import Videos from './Videos'


const VideoDetails = () => {

  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const {id} = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?.part=snippet,statistics&id=${id}`).then((data) => setVideoDetail(data.items[0]))


  fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
  .then((data) => setVideos(data.items))

}, [id])

  if(!videoDetail?.snippet) return 'Loading......'

const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetail;

  return (
   <Box>
    <Stack direction={{xs: 'column', md: 'row'}}>
      <Box flex={1}>
      <Box sx={{ width: '100%', position: 'sticky', top: '65px'}}>
        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
        className="react-player"  controls/>
        <Typography color='#fff' variant='h6' fontWeight="bold" p={1}>
          {title}
        </Typography>
        <Stack direction='row' justifyContent='space-between' sx={{
          color:'#fff'}}  px={2}>
          <Link to={`/channel/${channelId}`}>
            <Typography variant={{sm: 'subtitle1', md: 'h5'}}
            color="#fff">
              {channelTitle}
              <CheckCircle sx={{fontSize: '16px', color:'gray', ml:'5px'}} />
            </Typography>
          </Link>
          <Stack direction='row' gap='20px' alignItems='center'>
            <Typography variant='body1' sx={{opacity: 0.7}}>
            <Visibility  sx={{mr: '6px', fontSize: '16px'}}/>
           {parseInt(viewCount).toLocaleString()} Views
            </Typography>
            <Typography variant='body1' sx={{opacity: 0.7}}>
            <ThumbUp sx={{mr: '6px', fontSize: '16px'}}/>
           {parseInt(likeCount).toLocaleString()} Likes
            </Typography>
          </Stack>

        </Stack>
      </Box>

      </Box>
   


     <Box px={1} py={{md: 1, xs: 5}} justifyContent="center" alignItems="center">
     <span style={{fontSize:'22px', color:'#fff'}}>Related Videos</span>
      <Videos videos={videos}  direction='column' />
     </Box>
     </Stack>
   </Box>
  )
}

export default VideoDetails