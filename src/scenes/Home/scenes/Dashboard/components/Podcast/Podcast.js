import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import { FiberManualRecord, PlayArrow, Pause } from '@material-ui/icons';
import LinearProgress from '@material-ui/core/LinearProgress';
import Slider from '@material-ui/lab/Slider';
import moment from 'moment';
import podcastStyle from './podcastStyle';
import './podcast.css';
import defaultAvatar from './images/default.png';

class Podcast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pause: false,
      volume: 0.6,
      audioPlayProgress: 0,
      currentPlayTime: 0,
      duration: 0
    };
    this.handlePlay = this.handlePlay.bind(this);
    this.handlePause = this.handlePause.bind(this);
    this.updateProgress = this.updateProgress.bind(this);
    this.updateVolume = this.updateVolume.bind(this);
    this.handleAudioSliderChange = this.handleAudioSliderChange.bind(this);
    this.loadedMetaData = this.loadedMetaData.bind(this);
    this.canPlay = this.canPlay.bind(this);
  }

  componentDidMount() {
    this.player.addEventListener('timeupdate', this.updateProgress);
    this.player.addEventListener('canPlay', this.canPlay);
    this.player.addEventListener('loadedmetadata', this.loadedMetaData);
  }

  /**
   *
   * Event handle functions
   */

  handlePlay() {
    this.setState(
      {
        pause: true
      },
      () => this.player.play()
    );
  }

  handlePause() {
    this.setState(
      {
        pause: false
      },
      () => this.player.pause()
    );
  }

  updateProgress() {
    let current = this.player.currentTime;
    let percent = (current / this.player.duration) * 100;
    this.setState({
      audioPlayProgress: percent,
      currentPlayTime: current
    });
  }

  updateVolume() {}
  handleAudioSliderChange(event, value) {
    this.player.currentTime = (this.player.duration * value) / 100;
    this.setState({
      audioPlayProgress: value,
      currentPlayTime: this.player.currentTime
    });
  }

  loadedMetaData() {
    this.setState({
      duration: this.player.duration
    });
  }

  canPlay() {}

  render() {
    const { classes, podcastInfo } = this.props;

    const playButton = (
      <IconButton className={classes.controlButton} onClick={this.handlePlay}>
        <PlayArrow />
      </IconButton>
    );

    const pauseButton = (
      <IconButton className={classes.controlButton} onClick={this.handlePause}>
        <Pause />
      </IconButton>
    );

    return (
      <Card className={classes.podcastContainer}>
        <div className={classes.podcastDataContainer}>
          <div className={classes.podcastInfo}>
            <div className={classes.controlBtnContainer}>
              {this.state.pause === false ? playButton : pauseButton}
            </div>
            <div className={classes.podcastInfoContent}>
              <Typography
                className={classes.userName}
                variant="caption"
                align="left"
              >
                {podcastInfo.userName}
              </Typography>
              <Typography className={classes.title} variant="subheading">
                <span className={classes.statusDot} />
                {podcastInfo.podcastTitle}
              </Typography>
              <Typography className={classes.time} variant="caption">
                {moment.utc(this.state.duration * 1000).format('mm:ss')}
              </Typography>
              <div>
                <audio crossOrigin ref={ref => (this.player = ref)}>
                  <source
                    src="http://dl7.mp3party.net/download/8430810"
                    type="audio/mpeg"
                  />
                </audio>
              </div>
            </div>
          </div>
          <div className={classes.podcastAction}>
            <Button
              variant="contained"
              color="primary"
              className={classes.actionBtn}
            >
              Approve
            </Button>
            <Button variant="outlined" className={classes.feedbackBtn}>
              Feedback
            </Button>
          </div>
        </div>
        <div className={classes.podcastControlContainer}>
          <span>
            <Typography className={classes.time} variant="caption">
              {moment.utc(this.state.currentPlayTime * 1000).format('mm:ss')}
            </Typography>
          </span>
          <Slider
            value={this.state.audioPlayProgress}
            className={classes.progressSlider}
            classes={{
              root: classes.sliderRoot,
              track: classes.track,
              thumb: classes.thumb,
              trackBefore: classes.trackBefore,
              container: classes.progressSliderContainer
            }}
            onChange={this.handleAudioSliderChange}
          />
          <span>
            <Typography className={classes.time} variant="caption">
              {moment.utc(this.state.duration * 1000).format('mm:ss')}
            </Typography>
          </span>
        </div>
      </Card>
    );
  }
}

Podcast.propTypes = {
  classes: PropTypes.object.isRequired,
  podcastInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    podcastTitle: PropTypes.string.isRequired,
    podcastLength: PropTypes.string.isRequired,
    podcastStatus: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(podcastStyle)(Podcast);
