import { ThunkDispatch } from 'redux-thunk';
import { FilmsAction } from './filmsReducer';
import { RootState } from '../rootReducer';

export type FilmsDispatch = ThunkDispatch<RootState, unknown, FilmsAction>;
