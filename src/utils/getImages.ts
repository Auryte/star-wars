export const getFilmImg = (url: string): string =>
  `https://res.cloudinary.com/dlvhpqrkd/image/upload/v1693857184/StarWars/${url.replace(
    /\s+/g,
    ''
  )}.jpg`;
