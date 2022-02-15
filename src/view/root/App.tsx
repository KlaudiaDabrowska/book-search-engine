import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Wrapper } from '../../styles/App.styles';
import { GlobalStyle } from '../../styles/GlobalStyle';
import { MainPage } from '../mainPage/MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Wrapper />
        <MainPage />
      </ThemeProvider>
    </>
  );
};
export default App;
