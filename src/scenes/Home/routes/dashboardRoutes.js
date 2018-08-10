/**
 * @material-ui/icons
 */
import {
  AddCircleOutline,
  Timeline,
  MusicVideo,
  ZoomIn,
  SettingsApplications,
  HelpOutline
} from '@material-ui/icons';
import Dashboard from '@material-ui/icons/Dashboard';

/**
 * Scenes here
 */

import NewPodcast from '../scenes/NewPodcast/NewPodcast';
import Analytics from '../scenes/Analytics/Analytics';
import DashboardScene from '../scenes/Dashboard/Dashboard';
import Help from '../scenes/Help/Help';
import SettingsScene from '../scenes/Settings/Settings';
import TimelineScene from '../scenes/Timeline/Timeline';
import YourPodcasts from '../scenes/YourPodcasts/YourPodcasts';

const dashboardRoutes = [
  {
    path: '/new-podcast',
    sidebarName: 'New Podcast',
    navbarName: 'New Podcast',
    icon: AddCircleOutline,
    component: NewPodcast
  },
  {
    path: '/dashboard',
    sidebarName: 'Dashboard',
    navbarName: 'Dashboard',
    icon: Dashboard,
    component: DashboardScene
  },
  {
    path: '/timeline',
    sidebarName: 'Timeline',
    navbarName: 'Timeline',
    icon: Timeline,
    component: TimelineScene
  },
  {
    path: '/your-podcasts',
    sidebarName: 'Your podcasts',
    navbarName: 'Your podcasts',
    icon: MusicVideo,
    component: YourPodcasts
  },
  {
    path: '/analytics',
    sidebarName: 'Analytics',
    navbarName: 'Analytics',
    icon: ZoomIn,
    component: Analytics
  },
  {
    path: '/settings',
    sidebarName: 'Settings',
    navbarName: 'Analytics',
    icon: SettingsApplications,
    component: SettingsScene
  },
  {
    path: '/help',
    sidebarName: 'Help',
    navbarName: 'Analytics',
    icon: HelpOutline,
    component: Help
  }
];

export default dashboardRoutes;
