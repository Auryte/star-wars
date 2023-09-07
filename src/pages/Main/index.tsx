import React, { FC, useEffect, useState, useCallback, useContext } from 'react';
import { FilmCard } from 'src/components/FilmCard';
import { Error } from 'src/components/error';
import { CustomThemeContext } from 'src/components/CustomThemeProvider';
import { PeopleTable } from 'src/components/PeopleTable';
import { Loader } from 'src/components/Loader';
import { useAppSelector, useFilmsDispatch, usePeopleDispatch } from 'src/store/hooks';
import { FilmsSelector } from 'src/store/films/filmsSelector';
import { loadFilms } from 'src/store/films/filmsAction';
import { fetchPeople } from 'src/store/people/peopleActions';
import { PeopleSelector } from 'src/store/people/peopleSelector';
//styles
import { Box, Grid, Typography, Button } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import ModeNightIcon from '@mui/icons-material/ModeNight';
//constants
import { THEME_NAME } from 'src/constants';
//types
import { FilmData } from 'src/store/films/types';
import { CardContainerWrapper, MainPageWrapper, mainPageInnerWrapper } from 'src/styles/styled';

export const Main: FC = () => {
  const { loading, data: films, error } = useAppSelector(FilmsSelector);
  const { loadingPeople, people, errorPeople } = useAppSelector(PeopleSelector);
  const { currentTheme, setTheme } = useContext(CustomThemeContext);

  const dispatch = useFilmsDispatch();
  const dispatchPeople = usePeopleDispatch();
  const [selectedFilm, setSelectedFilm] = useState<FilmData | null>(null);

  useEffect(() => {
    dispatch(loadFilms());
  }, []);

  const handleOnClick = async (film: FilmData) => {
    setSelectedFilm(film);
    film && film.characters && dispatchPeople(fetchPeople(film.characters));
  };

  const handleThemeChange = useCallback(() => {
    if (currentTheme === THEME_NAME.DARK) {
      setTheme(THEME_NAME.NORMAL);
    } else {
      setTheme(THEME_NAME.DARK);
    }
  }, [currentTheme, setTheme]);

  return (
    <Box sx={MainPageWrapper}>
      <Box sx={mainPageInnerWrapper}>
        <Typography variant="h2">Films</Typography>
        <Button onClick={handleThemeChange}>
          {currentTheme === THEME_NAME.DARK ? (
            <LightModeIcon fontSize="large" />
          ) : (
            <ModeNightIcon fontSize="large" />
          )}
        </Button>
      </Box>
      {loading && <Loader />}
      {!error ? (
        <Grid container wrap={'nowrap'} sx={CardContainerWrapper}>
          {films?.map((film) => (
            <Grid key={film.episode_id} item>
              <FilmCard film={film} onClick={handleOnClick} />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Error error={error} />
      )}
      {selectedFilm ? (
        <PeopleTable people={people} loading={loadingPeople} error={errorPeople} />
      ) : null}
    </Box>
  );
};
