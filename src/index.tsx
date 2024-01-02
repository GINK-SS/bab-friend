import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import { RouterProvider } from 'react-router-dom';
import theme from './style/theme';
import Router from './Router';
import { RecoilRoot } from 'recoil';
import './assets/fonts/font.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
