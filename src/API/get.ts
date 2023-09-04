import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import { FilmData } from '../types';

const swapiClient: AxiosInstance = axios.create({
  baseURL: 'https://swapi.dev/api/',
  headers: { 'content-type': 'application/json' }
});

export const getFilms = async (): Promise<[FilmData]> => {
  try {
    const result: AxiosResponse<{ results: [FilmData] }> = await swapiClient.get(`films`);
    console.log('result', result);
    return result.data.results;
  } catch (error: any) {
    console.log('error', error);
    throw new Error(error.message);
  }
};
