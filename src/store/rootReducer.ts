import { combineReducers } from 'redux';
import { filmsReducer } from './films/filmsReducer';
import { peopleReducer } from './people/peopleReducer';

export const rootReducer = combineReducers({
  films: filmsReducer,
  people: peopleReducer
});

export type RootState = ReturnType<typeof rootReducer>;
