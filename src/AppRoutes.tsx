import React from 'react';
import { Route, Routes as RoutesPaths } from 'react-router-dom';
import { Main } from './pages/Main';
import { About } from './pages/About';
import { Error } from './pages/Error';
import Layout from './components/layouts/Layout';

export const AppRoutes = () => (
  <RoutesPaths>
    <Route path="/" element={<Layout />}>
      <Route index element={<Main />} />
      {/* <Route path="details/:film" element={} /> */}
      <Route path="about" element={<About />} />
      <Route path="*" element={<Error />} />
    </Route>
  </RoutesPaths>
);
