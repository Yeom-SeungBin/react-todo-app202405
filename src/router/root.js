import { createBrowserRouter } from 'react-router-dom';
import TodoTemplate from '../components/todo/TodoTemplate';
import Join from '../components/user/Join';
import Login from '../components/user/Login';
import Main from '../Main';
import MainPage from '../components/MainPage';
import boardRoutes from './board/boardRouter';

const root = createBrowserRouter([
  {
    path: '',
    element: <Main />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: '/todo',
        element: <TodoTemplate />,
      },
      {
        path: '/join',
        element: <Join />,
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/board',
        children: boardRoutes,
      },
    ],
  },
]);

export default root;
