import React from "react";
import {
  Card,
  Grid,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    cursor: "pointer",
  },
});

export default function VideoItem2({ video, onSelectVideo }) {
  const thumb = video.snippet.thumbnails.medium.url;

  const { title } = video.snippet;

  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Card className={classes.root} onClick={() => onSelectVideo(video)}>
        <CardActionArea>
          <CardMedia component="img" height="140" alt="thumbnail" src={thumb} />
          <CardContent>
            <Typography paragraph variant="h5">
              {title}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
