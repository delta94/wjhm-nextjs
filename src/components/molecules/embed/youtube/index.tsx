import React from 'react';
import YouTube from 'react-youtube';
import { youtubeID } from 'wjhm';

import YouTubeComponent from './youtube.styles';

// https://developers.google.com/youtube/player_parameters
const opts = {
  playerVars: {
    autoplay: 0,
  },
};

const _onReady = event => {
  // access to player in all event handlers via event.target
  event.target.pauseVideo();
};

type YouTubeProps = {
  attributes: {
    url: string;
  };
  children: any;
};

const YouTubeBlock = ({ attributes: { url }, children }: YouTubeProps) => {
  if (!url) {
    return (
      <YouTubeComponent>
        <div className="youtube__contents">{children}</div>
      </YouTubeComponent>
    );
  }

  return (
    <YouTubeComponent>
      <div className="youtube__wrapper">
        <YouTube videoId={youtubeID(url)} opts={opts} onReady={_onReady} />
      </div>
    </YouTubeComponent>
  );
};

export default YouTubeBlock;
