import Router from './Router';
import { RouterProvider } from 'react-router-dom';
import AuthChecker from '@_hoc/AuthChecker';

function App() {
  return (
    <AuthChecker>
      <RouterProvider router={Router} />
    </AuthChecker>
  );
}

export default App;
