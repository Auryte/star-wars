import React, { FC } from 'react';
//styles
import { Typography, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ErrorPageWrapper } from 'src/styles/styled';

export const Error: FC = () => (
  <Box sx={ErrorPageWrapper}>
    <Typography variant="h2" sx={{ paddingTop: 10 }}>
      404 - No page found
    </Typography>
    <Typography variant="h2" sx={{ padding: 3, fontSize: '3rem', fontWeight: 600 }}>
      Oh no...
    </Typography>
    <Box sx={{ height: 37, padding: '1 4 4' }}>
      <Typography>
        It looks like something has gone wrong, you may have mistyped the address or the page has
        been removed.
      </Typography>
      <Typography>
        Try again or return to our homepage, where you can find all the latest news.
      </Typography>
      <Link to="/" data-testid="homeLink">
        <Box sx={{ marginTop: 6 }}>
          <Button type="button">Return Home</Button>
        </Box>
      </Link>
    </Box>
  </Box>
);
