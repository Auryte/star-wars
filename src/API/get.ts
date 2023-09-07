import axios, { AxiosInstance, AxiosResponse } from 'axios';
import { baseUrl } from 'src/constants';
import { FilmData } from 'src/store/films/types';
import { Person } from 'src/store/people/types';

const swapiClient: AxiosInstance = axios.create({
  baseURL: baseUrl,
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
    //While working on the character request, I observed that occasionally, some requests fail for various reasons.

    const responses: Person[] = [];
    await Promise.allSettled(urls.map((url) => axios.get(url))).then((results) => {
      results.forEach((result) => {
        if (result.status === 'fulfilled') responses.push(result.value.data);
        else {
          responses.push({
            name: `Not found - ${result.reason.message}`,
            height: '-',
            mass: '-',
            hair_color: '-',
            skin_color: '-',
            eye_color: '-',
            birth_year: '-',
            gender: '-',
            homeworld: '-',
            films: ['-'],
            species: ['-'],
            vehicles: ['-'],
            starships: ['-'],
            created: '-',
            edited: '-',
            url: '-'
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
