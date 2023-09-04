import { FilmsActions } from './filmsAction';
import { FilmsReduxState } from 'src/types/reduxState';
import { FilmData } from 'src/types';

export interface RequestFilms {
  type: FilmsActions.REQUEST_FILMS;
}
export interface RequestFilmsSuccess {
  type: FilmsActions.REQUEST_FILMS_SUCCESS;
  payload: FilmData[];
}
export interface RequestFilmsFailed {
  type: FilmsActions.REQUEST_FILMS_FAILED;
  payload: string;
}

export type FilmsAction = RequestFilms | RequestFilmsSuccess | RequestFilmsFailed;

type FilmsState = FilmsReduxState<FilmData[]>;

const defaultState: FilmsState = {
  data: null,
  loading: false,
  error: null
};

export const filmsReducer = (state: FilmsState = defaultState, action: FilmsAction): FilmsState => {
  switch (action.type) {
    case FilmsActions.REQUEST_FILMS:
      return {
        ...state,
        loading: true
      };
    case FilmsActions.REQUEST_FILMS_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload
      };
    case FilmsActions.REQUEST_FILMS_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    default:
      return state;
  }
};
