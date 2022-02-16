import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from '../../styles/App.styles';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { MainPage } from '../mainPage/MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { QueryClientProvider } from 'react-query';
import { queryClient } from '../../config/ApiClient';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>
          <GlobalStyle />
          <Wrapper />
          <MainPage />
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
};
export default App;
