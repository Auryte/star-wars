import { ThunkDispatch } from 'redux-thunk';
import { RootState } from '../rootReducer';
import { PeopleActionTypes } from './peopleReducer';

export type FilmsDispatch = ThunkDispatch<RootState, unknown, PeopleActionTypes>;

export interface Person {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}
