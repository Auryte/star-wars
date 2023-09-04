import React from 'react';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';

//styles
import { ThemeProvider, CssBaseline } from '@mui/material';
import { theme } from './styles/theme';

export const App: React.FC = () => (
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  </BrowserRouter>
);
