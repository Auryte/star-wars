import React, { createContext, useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import getTheme from './themes';
import { THEME_NAME } from 'src/constants';

export type ThemeContextData = {
  currentTheme: string;
  setTheme: (name: string) => void;
};

export const CustomThemeContext = createContext<ThemeContextData>({
  currentTheme: THEME_NAME.NORMAL,
  setTheme: () => {}
});

interface ProviderProps {
  children: React.ReactNode;
}

const CustomThemeProvider = ({ children }: ProviderProps) => {
  const currentTheme = localStorage.getItem('appTheme') || THEME_NAME.NORMAL;
  const [themeName, _setThemeName] = useState<string>(currentTheme);

  const theme = getTheme(themeName);

  const setThemeName = (name: string) => {
    localStorage.setItem('appTheme', name);
    _setThemeName(name);
  };

  const contextValue = {
    currentTheme: themeName,
    setTheme: setThemeName
  };

  return (
    <CustomThemeContext.Provider value={contextValue}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </CustomThemeContext.Provider>
  );
};

export default CustomThemeProvider;
