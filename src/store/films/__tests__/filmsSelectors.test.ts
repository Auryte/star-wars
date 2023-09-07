import { mockFilms, mockPeople } from 'src/mocks/mockData';
import { FilmsSelector } from '../filmsSelector';

describe('hourlyWeather selector', () => {
  test('return correct value', () => {
    expect(
      FilmsSelector({
        films: {
          data: mockFilms,
          loading: false,
          error: null
        },
        people: {
          people: mockPeople,
          loadingPeople: true,
          errorPeople: null
        }
      })
    ).toEqual({
      data: mockFilms,
      loading: false,
      error: null
    });
  });
});
