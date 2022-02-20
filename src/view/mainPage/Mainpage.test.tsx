import { render, fireEvent } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MainPage } from './MainPage';
import { ThemeProvider } from 'styled-components';
import { theme } from '../../styles/theme';

const queryClient = new QueryClient();

const renderComponent = () =>
  render(
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <MainPage></MainPage>
      </QueryClientProvider>
    </ThemeProvider>
  );

describe('The SearchResultList component', () => {
  it('renders initially with no data', async () => {
    const { findByText } = renderComponent();
    const initMessageElement = await findByText('Use the form to find some books');

    expect(initMessageElement).toBeInTheDocument();
  });

  it('filters are present and empty by default', async () => {
    const { findByPlaceholderText } = renderComponent();
    const titleFilterElement = await findByPlaceholderText('Title');
    const authorFilterElement = await findByPlaceholderText('Author');
    const ibsnFilterElement = await findByPlaceholderText('isbn');

    expect(titleFilterElement).toBeInTheDocument();
    expect(titleFilterElement).toHaveTextContent('');
    expect(authorFilterElement).toBeInTheDocument();
    expect(authorFilterElement).toHaveTextContent('');
    expect(ibsnFilterElement).toBeInTheDocument();
    expect(ibsnFilterElement).toHaveTextContent('');
  });

  it('can filter by title', async () => {
    const { findByPlaceholderText, findByText, findAllByRole } = renderComponent();
    const titleFilterElement = await findByPlaceholderText('Title');
    const searchButtonElement = await findByText('Search');

    expect(searchButtonElement).toBeInTheDocument();
    fireEvent.change(titleFilterElement, {
      target: { value: 'potter' },
    });

    fireEvent.click(searchButtonElement);
    const booksElements = await findAllByRole('listitem');
    expect(booksElements).toHaveLength(6);
  });

  it('can filter by author', async () => {
    const { findByPlaceholderText, findByText, findAllByRole } = renderComponent();
    const authorFilterElement = await findByPlaceholderText('Author');
    const searchButtonElement = await findByText('Search');

    expect(searchButtonElement).toBeInTheDocument();
    fireEvent.change(authorFilterElement, {
      target: { value: 'rowling' },
    });

    fireEvent.click(searchButtonElement);
    const booksElements = await findAllByRole('listitem');
    expect(booksElements).toHaveLength(6);
  });

  it('can filter by isbn', async () => {
    const { findByPlaceholderText, findByText, findAllByRole } = renderComponent();
    const isbnFilterElement = await findByPlaceholderText('isbn');
    const searchButtonElement = await findByText('Search');

    expect(searchButtonElement).toBeInTheDocument();
    fireEvent.change(isbnFilterElement, {
      target: { value: '9788380082489' },
    });

    fireEvent.click(searchButtonElement);
    const booksElements = await findAllByRole('listitem');
    expect(booksElements).toHaveLength(1);
  });
});
