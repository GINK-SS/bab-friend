import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import CreatePost from './pages/CreatePost';

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
