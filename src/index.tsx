import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import GlobalStyle from '@_style/global';
import '@_assets/fonts/font.css';
import App from './App';
import RecoilNexus from 'recoil-nexus';
import { BrowserRouter } from 'react-router-dom';
import { theme } from '@_style/theme';

async function enableMocking() {
  if (!process.env.REACT_APP_USE_MOCK) return;

  const { worker } = await import('@_mocks/browser');

  return worker.start({ onUnhandledRequest: 'bypass' });
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

enableMocking().then(() =>
  root.render(
    <RecoilRoot>
      <RecoilNexus />
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <App />
            <ReactQueryDevtools />
          </ThemeProvider>
        </BrowserRouter>
      </QueryClientProvider>
    </RecoilRoot>
  )
);
