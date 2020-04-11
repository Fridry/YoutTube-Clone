import React from "react";
import {
  Grid,
  Typography,
  CircularProgress,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@material-ui/core";

const VideoDetails = ({ video }) => {
  if (!video) return <CircularProgress />;

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  const { title, channelTitle, description } = video.snippet;

  return (
    <Grid item xs={12}>
      <Card>
        <CardActionArea>
          <CardMedia
            component="iframe"
            alt="thumbnail"
            frameBorder="0"
            height="500px"
            title="Video Player"
            src={videoSrc}
          />
          <CardContent>
            <Typography variant="h4">
              {title} - {channelTitle}
            </Typography>
            <Typography variant="subtitle1">{channelTitle}</Typography>
            <Typography paragraph>{description}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default VideoDetails;
