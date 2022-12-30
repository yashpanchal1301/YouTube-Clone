import { Box } from "@mui/system"
import {CardContent} from "@mui/material"
// import { Typography } from "@mui/material"
// import { CheckCircle } from "@mui/icons-material"
import { Link } from "react-router-dom"
import { demoProfilePicture } from "../utils/constants"
import { CardMedia } from "material-ui"

const ChannelCard = (channelDetail) => {
  return (
   <Box
   sx={{
    boxShadow: 'none', borderRadius:'25px',
   }}
   >
   <Link to={`/channel/${channelDetail?.id?.channelId}`}>
    <CardContent sx={{display: 'flex', flexDirection: 'column',
    justifyContent: 'center', textAlign: 'center', color: '#fff'}}>
        <CardMedia 
            image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            alt={channelDetail?.snippet?.title}
            sx={{borderRadius: '50%', height:'180px', width: '180px'}}
        />
    </CardContent>
   </Link>

   </Box>
  )
}

export default ChannelCard