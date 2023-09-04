import React, { FC, useEffect } from 'react';
import { FilmCard } from 'src/components/FilmCard';
import { Loader } from 'src/components/Loader/Loader';
import { useAppSelector, useFilmsDispatch } from 'src/store/hooks';
import { FilmsSelector } from 'src/store/films/filmsSelector';
import { loadFilms } from 'src/store/films/filmsAction';
import { ErrorMessage } from 'src/components/error/ErrorMessage';
import { CardSkeleton } from 'src/components/CardSkeleton';
import { Box, Grid, Typography } from '@mui/material';

export const Main: FC = () => {
  const { loading, data: films, error } = useAppSelector(FilmsSelector);
  const dispatch = useFilmsDispatch();

  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  return (
    <Box sx={{ marginTop: '50px', marginLeft: '280px' }}>
      <Typography variant="h2">Films</Typography>
      {loading && '...Loading'}
      {error && <ErrorMessage />}
      <Grid
        container
        wrap={'nowrap'}
        // sx={{ width: 'fit-content' }}
        sx={{
          // gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          justifyContent: 'left',
          alignItems: 'center',
          width: 'calc(100vw - 310px)',
          height: '310px',
          padding: '20px 30px',
          overflowX: 'scroll'
        }}>
        {films?.map(({ title, episode_id, release_date }) => (
          <Grid
            key={episode_id}
            item
            style={{
              backgroundColor: 'yellow',
              width: '400px'
            }}>
            <FilmCard key={episode_id} title={title} episode={episode_id} date={release_date} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
