import { Dispatch } from 'redux';
import {
  PeopleActionTypes,
  RequestPeople,
  RequestPeopleFailure,
  RequestPeopleSuccess
} from './peopleReducer';
import { getPeople } from 'src/API/get';
import { Person } from './types';

export enum PeopleActions {
  REQUEST_PEOPLE = 'REQUEST_PEOPLE',
  REQUEST_PEOPLE_SUCCESS = 'REQUEST_PEOPLE_SUCCESS',
  REQUEST_PEOPLE_FAILED = 'REQUEST_PEOPLE_FAILED'
}

// Redux Thunk Action
const requestPeople = (): RequestPeople => ({
  type: PeopleActions.REQUEST_PEOPLE
});
const requestPeopleSuccess = (person: Person[]): RequestPeopleSuccess => ({
  type: PeopleActions.REQUEST_PEOPLE_SUCCESS,
  payload: person
});
const requestPeopleFailed = (error: string): RequestPeopleFailure => ({
  type: PeopleActions.REQUEST_PEOPLE_FAILED,
  payload: error
});

export const fetchPeople = (urls: string[]) => async (dispatch: Dispatch<PeopleActionTypes>) => {
  console.log('urls', urls);
  dispatch(requestPeople());
  getPeople(urls)
    .then((res) => dispatch(requestPeopleSuccess(res)))
    .catch((error) => dispatch(requestPeopleFailed(error.message)));
};
