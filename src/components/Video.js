import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactPlayer from 'react-player';

class Video extends Component {
  static propTypes = {
    /**
     * ({
     *   getElapsed(): number | null, // Seconds
     *   seek(to: number): void, // Seconds
     * }) => void
     */
    controllerRef: PropTypes.func,
    /**
     * Values are floored seconds.
     * ({
     *   elapsed: number,
     * }): void
    */
    onProgress: PropTypes.func,
    /** Whether or not to start playing immediately. Defaults to false. */
    playing: PropTypes.bool,
    src: PropTypes.string.isRequired,
  };

  ref = player => {
    this.player = player;
    const { controllerRef } = this.props;
    controllerRef && controllerRef(makeController(player));
  };

  handleProgress = ({ playedSeconds, played }) => {
    const { onProgress } = this.props;
    const elapsed = Math.floor(playedSeconds);
    onProgress &&
      onProgress({
        elapsed,
      });
  };

  render() {
    const { props } = this;
    return (
      <div>
        <ReactPlayer
          ref={this.ref}
          url={props.src}
          playing={props.playing || false}
          controls
          onProgress={this.handleProgress}
        />
      </div>
    );
  }
}

export default Video;

function makeController(player) {
  return {
    getElapsed() {
      return player.getCurrentTime();
    },
    seek(to) {
      player.seekTo(to);
    },
  };
}
