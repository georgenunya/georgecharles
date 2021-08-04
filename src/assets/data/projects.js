import { v4 as uuidv4 } from 'uuid';
import ProjectImg from '../images/projectImg.png';
import UTrackerImg from '../images/utracker.jpg';
import GreenCtgImg from '../images/greenctg.jpg';
import CoinTrackerImg from '../images/cointracker.jpg';
import CavinImg from '../images/cavinimg.jpg';

const projects = [
  {
    id: uuidv4(),
    name: 'Virtual Terminal',
    desc:
      'An application for staff to access their customer list, set up direct debits, recieve payments and to give refunds.',
    img: UTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Admin Dashboard',
    desc:
      'A dashboard that can show stats, reports, charts and graphs, this dashboard has a login and signup system.',
    img: GreenCtgImg,
  },
  {
    id: uuidv4(),
    name: 'Restaurant Menu Manager',
    desc:
      'Admin area where a user can create menu items and categories to display on a restaurant’s menu. This also has a customer facing page that displays the menu.',
    img: CoinTrackerImg,
  },
  {
    id: uuidv4(),
    name: 'Frontend for an Existing API',
    desc:
      'Showing i can work with existing APIs. I have built a cryptocurrency website.',
    img: CavinImg,
  },
  {
    id: uuidv4(),
    name: 'Food ordering app',
    desc:
      'Using hooks, GraphQL, stripe and strapi.',
    img: ProjectImg,
  },
];

export default projects;