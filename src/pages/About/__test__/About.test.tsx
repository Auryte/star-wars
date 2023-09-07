import React from 'react';
import { render, screen } from '../../../test-utils/testing-library-utils';
import { About } from '../index';

const testIds = {
  image: 'main-image',
  description: 'description',
  created: 'created',
  magazine: 'magazine',
  owner: 'owner',
  films: 'films',
  television: 'television',
  toy: 'toy'
};

describe('About Page', () => {
  it('should render the basic fields', async () => {
    render(<About />);
    const mainImage = screen.getByTestId(testIds.image);
    const mainHeader = screen.getByText<HTMLElement>(/About Star Wars/i);
    const mainDescription = screen.getByTestId(testIds.description);
    const magazine = screen.getByTestId(testIds.magazine);
    const owner = screen.getByTestId(testIds.owner);
    const films = screen.getByTestId(testIds.films);
    const television = screen.getByTestId(testIds.television);
    const toy = screen.getByTestId(testIds.toy);

    const elements = [
      mainImage,
      mainHeader,
      mainDescription,
      magazine,
      owner,
      films,
      television,
      toy
    ];
    elements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
