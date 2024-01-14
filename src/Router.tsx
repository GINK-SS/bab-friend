import { Route, Routes } from 'react-router-dom';
import Home from '@_pages/Home';
import CreatePost from '@_pages/CreatePost';
import CreatePostContent from '@_pages/CreatePostContent';
import Profile from '@_pages/Profile';
import PostDetail from '@_pages/PostDetail';
import SignIn from '@_pages/SignIn';
import PrivateRoute from '@_hoc/route/PrivateRoute';
import PublicRoute from '@_hoc/route/PublicRoute';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute component={<Home />} />} />
      <Route path='/postdetail/:id' element={<PublicRoute component={<PostDetail />} />} />
      <Route path='/kakao/callback' element={<PublicRoute component={<SignIn />} canAccessWithAuth={false} />} />

      <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />
      <Route path='/createpost' element={<PrivateRoute component={<CreatePost />} />} />
      <Route path='/createcontent' element={<PrivateRoute component={<CreatePostContent />} />} />
    </Routes>
  );
};

export default Router;
