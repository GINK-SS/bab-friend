import { Route, Routes } from 'react-router-dom';
import Home from '@_pages/Home';
import CreateBoardContent from '@_pages/CreateBoardContent';
import Profile from '@_pages/Profile';
import BoardDetail from '@_pages/BoardDetail';
import SignIn from '@_pages/SignIn';
import Reviews from '@_pages/Reviews';
import PrivateRoute from '@_hoc/route/PrivateRoute';
import PublicRoute from '@_hoc/route/PublicRoute';
import CreateBoard from '@_pages/CreateBoard';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<PublicRoute component={<Home />} />} />
      <Route path='/boarddetail/:id' element={<PublicRoute component={<BoardDetail />} />} />
      <Route path='/kakao/callback' element={<PublicRoute component={<SignIn />} canAccessWithAuth={false} />} />

      <Route path='/profile' element={<PrivateRoute component={<Profile />} />} />

      <Route path='/createboard' element={<PrivateRoute component={<CreateBoard />} />} />
      <Route path='/createcontent' element={<PrivateRoute component={<CreateBoardContent />} />} />
      <Route path='/profile/reviews' element={<PrivateRoute component={<Reviews />} />} />


    </Routes>
  );
};

export default Router;
