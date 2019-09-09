import React from "react";
import Youtube from "react-youtube";

const FIRST = 0;

const YoutubeView = props => {
  console.log("[Youtube] props", props);

  const {
    mode,
    result: { videos }
  } = props;

  if (mode !== "youtube") return <></>;
  if (videos.results.length === 0) return <p style={{ fontWeight: "bold", fontSize: 24 }}>유튜브 영상이 존재하지 않습니다 :(</p>;

  return <Youtube videoId={videos.results[FIRST].key}></Youtube>;
};

export default YoutubeView;
