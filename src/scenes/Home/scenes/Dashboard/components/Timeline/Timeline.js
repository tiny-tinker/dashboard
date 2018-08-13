import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import timelineStyle from './timelineStyle';
class Timeline extends React.Component {
  render() {
    const { classes, timelineInfo } = this.props;
    return (
      <Card className={classes.timelineContainer}>
        <div className={classes.status} />
        <Typography
          variant="title"
          gutterBottom={true}
          className={classes.date}
        >
          {timelineInfo.date}
        </Typography>
        <Typography variant="caption" className={classes.category}>
          {timelineInfo.category}
        </Typography>
        <Typography variant="subheading" className={classes.action}>
          {timelineInfo.action}
        </Typography>
      </Card>
    );
  }
}

Timeline.propTypes = {
  classes: PropTypes.object.isRequired,
  timelineInfo: PropTypes.shape({
    date: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    action: PropTypes.string.isRequired
  })
};

export default withStyles(timelineStyle)(Timeline);
