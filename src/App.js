import React, { useState, useEffect } from "react";

import { Grid } from "@material-ui/core";

import api from "./api/api";
import apiKey from "./api/apiKey";

import { SearchBar, VideoDetails, VideoList } from "./components";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onFormSubmit("javascript");
  }, []);

  const onFormSubmit = async (searchTerm) => {
    const response = await api.get("search", {
      params: {
        part: "snippet",
        maxResult: 5,
        key: apiKey,
        q: searchTerm,
      },
    });

    setVideos(response.data.items);

    if (typeof response.data.items[0].id.videoId === "undefined") {
      setSelectedVideo(response.data.items[1]);
    } else {
      setSelectedVideo(response.data.items[0]);
    }
  };

  const onSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <SearchBar onFormSubmit={onFormSubmit} />
          </Grid>

          <Grid item xs={8}>
            <VideoDetails video={selectedVideo} />
          </Grid>

          <Grid item xs={4}>
            <VideoList videosList={videos} onSelectVideo={onSelectVideo} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default App;
