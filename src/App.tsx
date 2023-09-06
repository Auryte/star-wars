import React from 'react';
import { AppRoutes } from './AppRoutes';
import { BrowserRouter } from 'react-router-dom';
import CustomThemeProvider from './components/CustomThemeProvider';

//styles
import { CssBaseline } from '@mui/material';
import './styles/globals.css';

export const App: React.FC = () => (
  <BrowserRouter>
    <CustomThemeProvider>
      <CssBaseline />
      <AppRoutes />
    </CustomThemeProvider>
  </BrowserRouter>
);
