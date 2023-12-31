import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import MainLayout from './components/MainLayout';
import CreatePost from './pages/CreatePost';
import CreatePostContent from './pages/CreatePostContent';
import Auth from './pages/Auth';
import Profile from './pages/Profile';

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'kakao/callback', element: <Auth /> },
      { path: 'createpost', element: <CreatePost /> },
      { path: 'createcontent', element: <CreatePostContent /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

export default Router;
