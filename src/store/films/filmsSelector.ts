import { RootState } from '../rootReducer';

export const FilmsSelector = (state: RootState) => {
  console.log('state.films', state.films);
  return state.films;
};
