import React, { FC } from 'react';
import MainImage from '../../components/assets/star-wars-wallpaper-4.jpg';
//styles
import { Box, Typography } from '@mui/material';
import { AboutImageWrapper, AboutPageTextWrapper, AboutPageWrapper } from 'src/styles/styled';

export const About: FC = () => (
  <Box sx={AboutPageWrapper}>
    <Box
      component="img"
      sx={AboutImageWrapper}
      alt="The Star Wars"
      src={MainImage}
      data-testid="main-image"
    />
    <Box sx={AboutPageTextWrapper}>
      <Typography variant="h2">About Star Wars</Typography>,
      <Typography variant="h5" data-testid="description">
        Star Wars is an American epic space opera multimedia franchise created by George Lucas,
        which began with the eponymous 1977 film and quickly became a worldwide pop culture
        phenomenon. Wikipedia Nominations: People's Choice Award for Favorite All-Time Motion
        Picture, MORE
      </Typography>
      <Typography variant="h5" data-testid="created">
        Created by: George Lucas
      </Typography>
      <Typography variant="h5" data-testid="magazine">
        Magazine(s): Star Wars Insider; (1987–present)
      </Typography>
      <Typography variant="h5" data-testid="owner">
        Owner: Lucasfilm Ltd.
      </Typography>
      <Typography variant="h5" data-testid="films">
        Television film(s): The Ewok Adventure (1984); The Battle for Endor (1985)
      </Typography>
      <Typography variant="h5" data-testid="television">
        Television special(s): Holiday Special (1978)
      </Typography>
      <Typography variant="h5" data-testid="toy">
        Toy(s): Merchandise
      </Typography>
    </Box>
  </Box>
);
