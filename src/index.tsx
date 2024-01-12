import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import { RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import Router from './Router';
import GlobalStyle from '@_style/global';
import theme from '@_style/theme';
import '@_assets/fonts/font.css';
import RecoilNexus from 'recoil-nexus';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const queryClient = new QueryClient();

root.render(
  <RecoilRoot>
    <RecoilNexus />
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <RouterProvider router={Router} />
        <ReactQueryDevtools />
      </ThemeProvider>
    </QueryClientProvider>
  </RecoilRoot>
);
