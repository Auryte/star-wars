import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderOptions } from '@testing-library/react';

// Contexts
import CustomThemeProvider from 'src/components/CustomThemeProvider';
import { BrowserRouter } from 'react-router-dom';

const AllTheProviders: FC<{ children: ReactNode }> = ({ children }) => (
  <BrowserRouter>
    <CustomThemeProvider>{children}</CustomThemeProvider>
  </BrowserRouter>
);

const renderWithContext = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) => {
  render(ui, { wrapper: AllTheProviders, ...options });
};

export * from '@testing-library/react';
export { renderWithContext as render };
