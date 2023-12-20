import { Outlet } from 'react-router-dom';
import Header from './common/Header';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
