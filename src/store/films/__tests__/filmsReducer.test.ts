import { filmsReducer } from '../filmsReducer';
import { FilmsActions } from '../filmsAction';
import { mockFilms } from 'src/mocks/mockData';

describe('filmsReducer', () => {
  test('request start', () => {
    expect(
      filmsReducer(
        {
          data: null,
          loading: false,
          error: null
        },
        { type: FilmsActions.REQUEST_FILMS }
      )
    ).toEqual({
      data: null,
      loading: true,
      error: null
    });
  });

  test('request success', () => {
    expect(
      filmsReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: FilmsActions.REQUEST_FILMS_SUCCESS,
          payload: mockFilms
        }
      )
    ).toEqual({
      data: mockFilms,
      loading: false,
      error: null
    });
  });
  test('request failed', () => {
    expect(
      filmsReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: FilmsActions.REQUEST_FILMS_FAILED,
          payload: 'Failed to fetch'
        }
      )
    ).toEqual({
      data: null,
      loading: false,
      error: 'Failed to fetch'
    });
  });
  test('default case', () => {
    expect(
      filmsReducer(
        {
          data: null,
          loading: true,
          error: null
        },
        {
          type: 'sdfsf' as FilmsActions.REQUEST_FILMS
        }
      )
    ).toEqual({
      data: null,
      loading: true,
      error: null
    });
  });
});
