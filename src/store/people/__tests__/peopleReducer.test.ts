import { mockPeople } from 'src/mocks/mockData';
import { peopleReducer } from '../peopleReducer';
import { PeopleActions } from '../peopleActions';

describe('peopleReducer', () => {
  test('request start', () => {
    expect(
      peopleReducer(
        {
          people: [],
          loadingPeople: false,
          errorPeople: null
        },
        { type: PeopleActions.REQUEST_PEOPLE }
      )
    ).toEqual({
      people: [],
      loadingPeople: true,
      errorPeople: null
    });
  });

  test('request success', () => {
    expect(
      peopleReducer(
        {
          people: [],
          loadingPeople: true,
          errorPeople: null
        },
        {
          type: PeopleActions.REQUEST_PEOPLE_SUCCESS,
          payload: mockPeople
        }
      )
    ).toEqual({
      people: mockPeople,
      loadingPeople: false,
      errorPeople: null
    });
  });
  test('request failed', () => {
    expect(
      peopleReducer(
        {
          people: [],
          loadingPeople: true,
          errorPeople: null
        },
        {
          type: PeopleActions.REQUEST_PEOPLE_FAILED,
          payload: 'Failed to fetch'
        }
      )
    ).toEqual({
      people: [],
      loadingPeople: false,
      errorPeople: 'Failed to fetch'
    });
  });
  test('default case', () => {
    expect(
      peopleReducer(
        {
          people: [],
          loadingPeople: true,
          errorPeople: null
        },
        {
          type: 'sdfsf' as PeopleActions.REQUEST_PEOPLE
        }
      )
    ).toEqual({
      people: [],
      loadingPeople: true,
      errorPeople: null
    });
  });
});
