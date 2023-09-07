import { ThunkDispatch } from 'redux-thunk';
import { FilmsAction } from './filmsReducer';
import { RootState } from '../rootReducer';

export type FilmsDispatch = ThunkDispatch<RootState, unknown, FilmsAction>;

export type FilmData = {
  title: string;
  episode_id: string;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
};
