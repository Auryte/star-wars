import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

type ErrorType = { error: string };

export const Error: FC<ErrorType> = ({ error }) => (
  <Box sx={{ margin: 5, textAlign: 'center' }}>
    <Typography variant="h4">...Ooops something went wrong</Typography>
    <Typography paragraph={true} sx={{ marginTop: 3 }}>
      {error}
    </Typography>
  </Box>
);
