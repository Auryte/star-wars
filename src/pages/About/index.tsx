import { Box, Typography } from '@mui/material';
import React from 'react';
import MainImage from '../../components/assets/star-wars-wallpaper-4.jpg';

export const About = () => (
  <Box sx={{ marginTop: '50px', marginLeft: '280px', position: 'relative' }}>
    <Box
      component="img"
      sx={{
        height: 'fit-content',
        width: '100%'
      }}
      alt="The Star Wars"
      src={MainImage}
    />
    <Box
      sx={{
        backgroundColor: 'rgba(320, 320, 320, .80)',
        position: 'absolute',
        top: '50%',
        width: '80%',
        zIndex: '1050',
        padding: 3,
        marginLeft: '10%'
      }}>
      <Typography variant="h2">About Star Wars</Typography>,
      <Typography variant="h5">
        Star Wars is an American epic space opera multimedia franchise created by George Lucas,
        which began with the eponymous 1977 film and quickly became a worldwide pop culture
        phenomenon. Wikipedia Nominations: People's Choice Award for Favorite All-Time Motion
        Picture, MORE
      </Typography>
      <Typography variant="h5">Created by: George Lucas</Typography>
      <Typography variant="h5">Magazine(s): Star Wars Insider; (1987–present)</Typography>
      <Typography variant="h5">Owner: Lucasfilm Ltd.</Typography>
      <Typography variant="h5">
        Television film(s): The Ewok Adventure (1984); The Battle for Endor (1985)
      </Typography>
      <Typography variant="h5">Television special(s): Holiday Special (1978)</Typography>
      <Typography variant="h5">Toy(s): Merchandise</Typography>
    </Box>
  </Box>
);
