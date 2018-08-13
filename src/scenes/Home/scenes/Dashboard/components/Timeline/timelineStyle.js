const statusSuccess = '#26c6da';
const statusWaiting = '#ffd137';
const timelineBg = 'rgba(0, 0, 0, 0.2)';

const styles = theme => ({
  timelineContainer: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    margin: '1.0em 0',
    backgroundColor: timelineBg,
    padding: '1.0em',
    overflow: 'unset'
  },
  status: {
    position: 'absolute',
    top: '1.0em',
    left: '-0.25em',
    width: '0.5em',
    height: '2.0em',
    backgroundColor: statusSuccess
  },
  date: {
    color: 'white',
    opacity: '0.87'
  },
  category: {
    color: 'white',
    opacity: '0.54'
  },
  action: {
    color: 'white',
    opacity: '0.87'
  }
});

export default styles;
