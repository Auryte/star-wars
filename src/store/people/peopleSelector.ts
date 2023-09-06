import { RootState } from '../rootReducer';

export const PeopleSelector = (state: RootState) => {
  console.log('state.people', state.people);
  return state.people;
};
