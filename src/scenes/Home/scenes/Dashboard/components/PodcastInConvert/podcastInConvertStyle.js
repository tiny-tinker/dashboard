import { infoColor } from '../../../../../../assets/jss/material-dashboard-react';
const nameColor = '#4ed7d5';
const titleColor = '#006462';
const statusSuccess = '#00ba87';
const statusWaiting = '#ffd137';
const playerBg = 'rgba(0, 0, 0, 0.2)';

const styles = theme => ({
  podcastContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    backgroundColor: playerBg,
    margin: '15px 0',
    padding: '10px 10px 0 10px'
  },
  podcastDataContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  podcastControlContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    padding: '0 10px'
  },
  podcastInfo: {
    display: 'flex',
    alignItems: 'center'
  },
  podcastInfoContent: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column'
  },
  userName: {
    color: 'white',
    fontWeight: 'bolder'
  },
  title: {
    color: 'white',
    fontWeight: 'bold'
  },
  statusDot: {
    width: '0.4em',
    height: '0.4em',
    backgroundColor: statusWaiting,
    borderRadius: '50%',
    marginRight: '5px',
    display: 'inline-block'
  },
  time: {
    color: 'white'
  },
  podcastAction: {
    display: 'flex',
    alignItems: 'center',
    flexGrow: '0.4'
  },
  controlBtnContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: '5px'
  },
  controlButton: {
    padding: 10,
    '& svg': {
      color: 'white'
    },
    '&:hover': {
      /*backgroundColor: 'unset'*/
    }
  },
  ctrlBtnIcon: {
    fontSize: 40
  },
  timeleft: {
    color: 'white'
  },
  progressBar: {
    flexGrow: '1.0',
    marginLeft: '1.0em'
  },
  barColorPrimary: {
    backgroundColor: '#00acc1'
  },
  avatar: {
    margin: 10,
    width: 60,
    height: 60
  },
  bigAvatar: {
    width: 60,
    height: 60
  },
  mediumIcon: {
    width: 48,
    height: 48
  },
  smallIcon: {
    width: 36,
    height: 36
  },
  small: {
    width: 72,
    height: 72,
    padding: 16
  }
});

export default styles;
