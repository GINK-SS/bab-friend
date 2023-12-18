import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import CreatePost from './pages/CreatePost';
import MainLayout from './components/MainLayout';

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'createpost', element: <CreatePost /> },
    ],
  },
]);

export default Router;
