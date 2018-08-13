import React from 'react';
import PropTypes from 'prop-types';
// @material-ui/core
import withStyles from '@material-ui/core/styles/withStyles';
import GridItem from 'components/Grid/GridItem.jsx';
import GridContainer from 'components/Grid/GridContainer.jsx';
import Card from 'components/Card/Card.jsx';
import CardHeader from 'components/Card/CardHeader.jsx';
import CardIcon from 'components/Card/CardIcon.jsx';
import CardBody from 'components/Card/CardBody.jsx';
import CardFooter from 'components/Card/CardFooter.jsx';

import Podcast from './components/Podcast/Podcast';
import PodcastInConvert from './components/PodcastInConvert/PodcastInConvert';
import Timeline from './components/Timeline/Timeline';

import dashboardStyle from './dashboardStyle';

const podcastsReady = [
  {
    avatar: null,
    userName: 'Eric Lee',
    podcastTitle: 'Podcast Title 1',
    podcastLength: '32: 33',
    podcastStatus: 'ready'
  },
  {
    avatar: null,
    userName: 'Tiny Tinker',
    podcastTitle: 'Podcast Title 2',
    podcastLength: '11: 11',
    podcastStatus: 'warning'
  }
];
const timelineData = [
  {
    date: 'Tuesday, October 2',
    category: 'Category',
    action: 'Submit Script'
  },
  {
    date: 'Tuesday, October 5',
    category: 'Category',
    action: 'Publish your Podcast'
  }
];

class Dashboard extends React.Component {
  renderPodcasts(podcasts) {
    if (podcasts !== null) {
      return podcasts.map((podcast, index) => (
        <Podcast key={index} podcastInfo={podcast} />
      ));
    }
  }

  renderPodcastsInConvert(podcasts) {
    if (podcasts !== null) {
      return podcasts.map((podcast, index) => (
        <PodcastInConvert key={index} podcastInfo={podcast} />
      ));
    }
  }

  renderTimeline(timelines) {
    if (timelines !== null) {
      return timelines.map((timeline, index) => (
        <Timeline key={index} timelineInfo={timeline} />
      ));
    }
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={8}>
            <Card>
              <CardHeader color="dark">
                <h2 className={classes.cardTitleDark}>Ready for review</h2>
                <p className={classes.cardCategoryDark}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>{this.renderPodcasts(podcastsReady)}</CardBody>
            </Card>

            <Card>
              <CardHeader color="dark">
                <h2 className={classes.cardTitleDark}>In progress</h2>
                <p className={classes.cardCategoryDark}>
                  New employees on 15th September, 2016
                </p>
              </CardHeader>
              <CardBody>{this.renderPodcastsInConvert(podcastsReady)}</CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card>
              <CardHeader color="dark">
                <h2 className={classes.cardTitleDark}>Timeline</h2>
              </CardHeader>
              <CardBody>{this.renderTimeline(timelineData)}</CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}
Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
