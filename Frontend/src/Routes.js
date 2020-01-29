import Home from './Home';
import YogaTable from './Components/YogaTable';

const Route = [
  {
    component: Home,
    path: '/',
    exact: true
  },
  {
    component: YogaTable,
    path: '/yoga-table',
    exact: true
  }
];

export default Route;