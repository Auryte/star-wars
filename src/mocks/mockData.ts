import { FilmData } from 'src/store/films/types';
import { Person } from 'src/store/people/types';

export const mockFilms: FilmData[] = [
  {
    title: 'A New Hope',
    episode_id: '7',
    opening_crawl: 'It is a period of civil war.',
    director: 'George Lucas',
    producer: 'Gary Kurtz, Rick McCallum',
    release_date: '1977-05-25',
    characters: ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/'],
    planets: ['https://swapi.dev/api/planets/1/'],
    starships: ['https://swapi.dev/api/starships/2/'],
    vehicles: ['https://swapi.dev/api/vehicles/4/'],
    species: ['https://swapi.dev/api/species/2/'],
    created: '2014-12-10T14:23:31.880000Z',
    edited: '2014-12-20T19:49:45.256000Z',
    url: 'https://swapi.dev/api/films/1/'
  }
];

export const mockPeople: Person[] = [
  {
    name: 'Luke Sky',
    height: '172',
    mass: '77',
    hair_color: 'brown',
    skin_color: 'white',
    eye_color: 'green',
    birth_year: '19BBY',
    gender: 'male',
    homeworld: 'https://swapi.dev/api/planets/1/',
    films: [
      'https://swapi.dev/api/films/1/',
      'https://swapi.dev/api/films/2/',
      'https://swapi.dev/api/films/3/',
      'https://swapi.dev/api/films/6/'
    ],
    species: [],
    vehicles: ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/'],
    starships: ['https://swapi.dev/api/starships/12/'],
    created: '2014-12-09T13:50:51.644000Z',
    edited: '2014-12-20T21:17:56.891000Z',
    url: 'https://swapi.dev/api/people/1/'
  }
];
