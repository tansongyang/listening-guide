import React, { Component } from 'react';
import { action } from '@storybook/addon-actions';
import Video from '../components/Video';

class VideoStory extends Component {
  toRef = to => {
    this.to = to;
  };

  controllerRef = controller => {
    this.controller = controller;
  };

  handleSeekClick = () => {
    this.seek(this.to.value);
  };

  seek = to => {
    this.controller.seek(to);
  };

  render() {
    return (
      <div>
        <Video
          controllerRef={this.controllerRef}
          onProgress={action('progress')}
          src="https://www.youtube.com/watch?v=GX-240cNDIk"
        />
        <input ref={this.toRef} type="number" defaultValue={0} />
        <button onClick={this.handleSeekClick}>Seek (seconds)</button>
      </div>
    );
  }
}

export default VideoStory;
