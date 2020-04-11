import React from "react";

import { Grid } from "@material-ui/core";

import VideoItem from "./VideoItem";

const VideoList = ({ videosList, onSelectVideo }) => {
  return (
    <Grid container style={{ marginLeft: "8px" }}>
      {videosList.map((video, index) => (
        <VideoItem key={index} video={video} onSelectVideo={onSelectVideo} />
      ))}
    </Grid>
  );
};

export default VideoList;
