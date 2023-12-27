import { Outlet } from 'react-router-dom';
import Header from './common/Header';
import Modal from './Modal';
import Login from './Modal/Login';
import { useRecoilValue } from 'recoil';
import { modalState } from '../recoil/atoms/modal';

const MainLayout = () => {
  const modal = useRecoilValue(modalState);
  return (
    <>
      {modal.isActive ? (
        <Modal fullScreen>
          <Login />
        </Modal>
      ) : null}

      <Header />
      <Outlet />
    </>
  );
};

export default MainLayout;
