import { PeopleActions } from './peopleActions';
import { Person } from './types';

export interface RequestPeople {
  type: PeopleActions.REQUEST_PEOPLE;
}

export interface RequestPeopleSuccess {
  type: PeopleActions.REQUEST_PEOPLE_SUCCESS;
  payload: Person[];
}

export interface RequestPeopleFailure {
  type: PeopleActions.REQUEST_PEOPLE_FAILED;
  payload: string;
}

export type PeopleActionTypes = RequestPeople | RequestPeopleSuccess | RequestPeopleFailure;
interface PeopleState {
  people: Person[];
  loadingPeople: boolean;
  errorPeople: string | null;
}

const initialState: PeopleState = {
  people: [],
  loadingPeople: false,
  errorPeople: null
};

export const peopleReducer = (
  state: PeopleState = initialState,
  action: PeopleActionTypes
): PeopleState => {
  switch (action.type) {
    case PeopleActions.REQUEST_PEOPLE:
      return {
        ...state,
        loadingPeople: true,
        errorPeople: null
      };
    case PeopleActions.REQUEST_PEOPLE_SUCCESS:
      return {
        ...state,
        loadingPeople: false,
        people: action.payload
      };
    case PeopleActions.REQUEST_PEOPLE_FAILED:
      return {
        ...state,
        loadingPeople: false,
        errorPeople: action.payload
      };
    default:
      return state;
  }
};
