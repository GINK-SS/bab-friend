import Router from './Router';
import AuthChecker from '@_hoc/AuthChecker';
import Header from '@_components/common/Header';
import { modalState } from '@_recoil/atoms/modal';
import { useRecoilValue } from 'recoil';
import Modal from '@_components/Modal';
import Login from '@_components/Modal/Login';

function App() {
  const modal = useRecoilValue(modalState);

  return (
    <AuthChecker>
      {modal.isActive ? (
        <Modal fullScreen>
          <Login />
        </Modal>
      ) : null}

      <Header />
      <Router />
    </AuthChecker>
  );
}

export default App;
