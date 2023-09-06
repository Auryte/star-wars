import React, { FC } from 'react';
import { Box, CircularProgress } from '@mui/material';

export const Loader: FC = () => (
  <Box sx={{ height: 'calc(100vh - 180px)', marginTop: '100px', textAlign: 'center' }}>
    <CircularProgress disableShrink />
  </Box>
);
