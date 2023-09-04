import { combineReducers } from 'redux';
import { themeReducer } from './theme/themeReducer';
import { filmsReducer } from './films/filmsReducer';

export const rootReducer = combineReducers({
  theme: themeReducer,
  films: filmsReducer
});

export type RootState = ReturnType<typeof rootReducer>;
