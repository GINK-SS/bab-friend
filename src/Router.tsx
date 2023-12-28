import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import CreatePost from './pages/CreatePost';
import CreatePostContent from './pages/CreatePostContent';
import Auth from './pages/Auth';

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'kakao/callback', element: <Auth /> },
      { path: 'createpost', element: <CreatePost /> },
      { path: 'createcontent', element: <CreatePostContent /> },
    ],
  },
]);

export default Router;
