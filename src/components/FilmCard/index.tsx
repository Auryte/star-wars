import React, { FC } from 'react';
import { FilmData } from 'src/store/films/types';
//styles
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Box } from '@mui/material';
//utils
import { getFilmImg } from 'src/utils/getImages';
import { FilmCardWrapper } from 'src/styles/styled';

type FilmCard = {
  film: FilmData;
  onClick: (film: FilmData) => void;
};

export const FilmCard: FC<FilmCard> = ({ film, onClick }) => {
  const { title, episode_id, release_date } = film;
  return (
    <Card sx={{ width: 350, height: 250, display: 'flex' }}>
      <CardMedia
        component="img"
        sx={{
          height: 240,
          marginTop: '5px',
          width: 'fit-content'
        }}
        image={getFilmImg(title.toLowerCase())}
        title={title}
      />
      <Box sx={FilmCardWrapper}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Episode: {episode_id}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Release date:
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {release_date}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" onClick={() => onClick(film)}>
            Show people
          </Button>
        </CardActions>
      </Box>
    </Card>
  );
};
