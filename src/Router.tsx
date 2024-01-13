import { createBrowserRouter } from 'react-router-dom';
import Home from '@_pages/Home';
import MainLayout from '@_components/MainLayout';
import CreatePost from '@_pages/CreatePost';
import CreatePostContent from '@_pages/CreatePostContent';
import Profile from '@_pages/Profile';
import PostDetail from '@_pages/PostDetail';
import SignIn from '@_pages/SignIn';

const Router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      { path: '', element: <Home /> },
      { path: 'kakao/callback', element: <SignIn /> },
      { path: 'createpost', element: <CreatePost /> },
      { path: 'createcontent', element: <CreatePostContent /> },
      { path: 'postdetail/:id', element: <PostDetail /> },
      { path: 'profile', element: <Profile /> },
    ],
  },
]);

export default Router;
