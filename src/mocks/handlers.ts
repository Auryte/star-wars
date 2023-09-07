import { rest } from 'msw';

// Types
import { FilmData } from 'src/store/films/types';

// Mocks
import { mockFilms } from './mockData';

// Constants
import { baseUrl } from 'src/constants';

export type FilmDataType = {
  data: FilmData[];
};

export const handlers = [
  rest.get(`${baseUrl}/films`, (req, res, ctx) =>
    res(ctx.delay(0), ctx.status(200), ctx.json<FilmData[]>(mockFilms))
  )
];
