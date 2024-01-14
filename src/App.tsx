import Router from './Router';
import AuthChecker from '@_hoc/AuthChecker';
import Header from '@_components/common/Header';
import Modal from '@_components/Modal';
import Login from '@_components/Modal/Login';
import { ModalName } from '@_recoil/atoms/modal';

function App() {
  return (
    <AuthChecker>
      <Modal name={ModalName.login} fullScreen>
        <Login />
      </Modal>

      <Header />
      <Router />
    </AuthChecker>
  );
}

export default App;
