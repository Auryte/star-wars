import { ThunkAction } from 'redux-thunk';
import { FilmsAction, RequestFilms, RequestFilmsFailed, RequestFilmsSuccess } from './filmsReducer';
import { getFilms } from 'src/API/get';
import { RootState } from '../rootReducer';
import { FilmData } from './types';

export enum FilmsActions {
  REQUEST_FILMS = 'REQUEST_FILMS',
  REQUEST_FILMS_SUCCESS = 'REQUEST_FILMS_SUCCESS',
  REQUEST_FILMS_FAILED = 'REQUEST_FILMS_FAILED'
}

const requestFilms = (): RequestFilms => ({
  type: FilmsActions.REQUEST_FILMS
});
const requestFilmsSuccess = (films: FilmData[]): RequestFilmsSuccess => ({
  type: FilmsActions.REQUEST_FILMS_SUCCESS,
  payload: films
});
const requestFilmsFailed = (error: string): RequestFilmsFailed => ({
  type: FilmsActions.REQUEST_FILMS_FAILED,
  payload: error
});

export const loadFilms = (): ThunkAction<void, RootState, unknown, FilmsAction> => (dispatch) => {
  dispatch(requestFilms());

  getFilms()
    .then((res) => dispatch(requestFilmsSuccess(res)))
    .catch((error) => dispatch(requestFilmsFailed(error.message)));
};
