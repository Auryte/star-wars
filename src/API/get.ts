import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { FilmData } from 'src/store/films/types';
import { Person } from 'src/store/people/types';

const swapiClient: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: { 'content-type': 'application/json' }
});

export const getFilms = async (): Promise<FilmData[]> => {
  try {
    const result: AxiosResponse<{ results: FilmData[] }> = await swapiClient.get(`films`);
    return result.data.results;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};

export const getPeople = async (urls: string[]): Promise<Person[]> => {
  try {
    const responses: Person[] = [];
    await Promise.allSettled(urls.map((url) => axios.get(url))).then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') responses.push(result.value.data);
        else {
          responses.push({
            name: result.reason.message,
            height: result.reason.message,
            mass: result.reason.message,
            hair_color: result.reason.message,
            skin_color: result.reason.message,
            eye_color: result.reason.message,
            birth_year: result.reason.message,
            gender: result.reason.message,
            homeworld: result.reason.message,
            films: result.reason.message,
            species: result.reason.message,
            vehicles: result.reason.message,
            starships: result.reason.message,
            created: result.reason.message,
            edited: result.reason.message,
            url: result.reason.message
          });
        }
      });
    });

    // const responses: AxiosResponse[] = await Promise.all(urls.map((url) => axios.get(url)));
    // const people: Person[] = responses.map((response) => response.data);
    return responses;
  } catch (error) {
    throw new Error((error as Error).message);
  }
};
