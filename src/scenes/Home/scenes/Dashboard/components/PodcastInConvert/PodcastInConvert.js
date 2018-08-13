import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import LinearProgress from '@material-ui/core/LinearProgress';
import Avatar from '@material-ui/core/Avatar';
import moment from 'moment';
import podcastInConvertStyle from './podcastInConvertStyle';
import audivity from 'assets/img/audivity.png';
import podcastStyle from '../Podcast/podcastStyle';

class PodcastInConvert extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 60
    };
  }

  render() {
    const { classes, podcastInfo } = this.props;

    return (
      <Card className={classes.podcastContainer}>
        <div className={classes.podcastDataContainer}>
          <div className={classes.podcastInfo}>
            <div className={classes.controlBtnContainer}>
              <Avatar
                alt={podcastInfo.podcastTitle}
                src={audivity}
                className={classes.avatar}
              />
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
            </div>
          </div>
          <div className={classes.podcastAction}>
            <Typography variant="subheading" className={classes.timeleft}>
              15 mins left...
            </Typography>
            <LinearProgress
              variant="determinate"
              color="primary"
              className={classes.progressBar}
              value={this.state.progress}
              classes={{
                barColorPrimary: classes.barColorPrimary
              }}
            />
          </div>
        </div>
      </Card>
    );
  }
}

PodcastInConvert.propTypes = {
  classes: PropTypes.object.isRequired,
  podcastInfo: PropTypes.shape({
    userName: PropTypes.string.isRequired,
    podcastTitle: PropTypes.string.isRequired,
    podcastLength: PropTypes.string.isRequired,
    podcastStatus: PropTypes.string.isRequired
  }).isRequired
};

export default withStyles(podcastInConvertStyle)(PodcastInConvert);
