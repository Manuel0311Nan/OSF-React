import React from "react";
import "./videoTour.scss";
const VideoAccess = ({ videoId }) => {
  const VIDEO_WIDTH = 1920;
  const VIDEO_HEIGHT = 1080;
  return (
    <div className="video-background">
      <iframe
        width={VIDEO_WIDTH}
        height={VIDEO_HEIGHT}
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&mute=1&loop=1&modestbranding=1&showinfo=0&start=50&enablejsapi=1&&widgetid=3`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; repeat"
      />
    </div>
  );
};

export default VideoAccess;