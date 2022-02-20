import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';
import { Book } from '../../types/Book';
import { defaultImageUrl } from './defaultValues';
import { SearchResultsItem } from './SearchResultsItem';

const renderComponent = (item: Book) =>
  render(
    <ThemeProvider theme={theme}>
      <SearchResultsItem item={item}></SearchResultsItem>
    </ThemeProvider>
  );

const mockedBook = {
  kind: 'book',
  id: '123',
  selfLink: 'https://book/123.it',
  volumeInfo: {
    title: 'Super Book',
  },
};

const veryLongDescription =
  "An introduction to the magical beasts of the Wizarding World. Scamander's years of travel and research have created a tome of unparalleled importance. Some of the beasts will be familiar to readers of the Harry Potter books-- the Hippogriff, the Basilisk, the Hungarian Horntail. Others will surprise even the most ardent amateur Magizoologist. Dip in to discover the curious habits of magical beasts across five continents.";

describe('The SearchResultsItem component', () => {
  it('should trim long description', async () => {
    const book = {
      ...mockedBook,
      volumeInfo: {
        title: 'Harry Potter',
        description: veryLongDescription,
      },
    };
    const { findByText } = renderComponent(book);

    const descriptionElement = await findByText(/An introduction/);

    expect(descriptionElement).toBeInTheDocument();
    expect(descriptionElement.textContent!.length).toBeLessThan(315);
    expect(descriptionElement.textContent!.endsWith('...')).toBeTruthy();
  });

  it('short description should not end with three dots', async () => {
    const book = {
      ...mockedBook,
      volumeInfo: {
        title: 'Harry Potter',
        description: 'Short description',
      },
    };
    const { findByText } = renderComponent(book);
    const descriptionElement = await findByText('Short description');

    expect(descriptionElement).toBeInTheDocument();
  });

  it('can handle multiple authors', async () => {
    const book = {
      ...mockedBook,
      volumeInfo: {
        title: 'Harry Potter',
        authors: ['Joe', 'Monica', 'Chandler'],
      },
    };
    const { findByText } = renderComponent(book);
    const authorsElement = await findByText('Joe & Monica & Chandler');

    expect(authorsElement).toBeInTheDocument();
  });

  it('should display default image if not provided', async () => {
    const book = {
      ...mockedBook,
      volumeInfo: {
        title: 'Harry Potter',
      },
    };
    const { findByAltText } = renderComponent(book);
    const imageElement = await findByAltText(/book-image/);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', defaultImageUrl);
  });

  it('should use book image if provided', async () => {
    const book = {
      ...mockedBook,
      volumeInfo: {
        title: 'Harry Potter',
        imageLinks: {
          thumbnail: 'http://custom-image.it',
        },
      },
    };
    const { findByAltText } = renderComponent(book);
    const imageElement = await findByAltText(/book-image/);

    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute('src', 'http://custom-image.it');
  });
});
