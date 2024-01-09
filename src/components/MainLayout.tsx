import { Outlet } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { modalState } from '../recoil/atoms/modal';
import Modal from '@_components/Modal';
import Login from '@_components/Modal/Login';
import Header from '@_components/common/Header';

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
