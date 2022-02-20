import { useInfiniteQuery } from 'react-query';
import { apiClient } from '../config/ApiClient';
import { BooksResponse } from '../types/Book';
import { BooksFilters } from '../view/state/useBooksState';

export interface UseBooksProps {
  q: BooksFilters;
}

export const useBooks = (params: UseBooksProps) => {
  const client = apiClient;
  const maxResults = 6;

  const fetchBooks = async ({ pageParam = 0 }) => {
    return client.get(`/books/v1/volumes?${buildQueryParams(params)}&startIndex=${pageParam}&maxResults=${maxResults}`).then((res) => res.data);
  };

  return useInfiniteQuery<BooksResponse>([params], fetchBooks, {
    getNextPageParam: (lastPage, pages) => {
      const fetchedItemsCount = pages.flatMap((page) => page.items).length;

      return lastPage.totalItems > fetchedItemsCount ? fetchedItemsCount : null;
    },
    retry: 1,
    enabled: Object.values(params.q).some((value) => !!value),
  });
};

const buildQueryParams = (queryParams: UseBooksProps) => {
  return Object.entries(queryParams)
    .filter(([key, value]) => !!value && key !== 'q')
    .map(([key, value]) => `${key}=${value}`)
    .concat(`q=${buildFullTextSearchQueryParam(queryParams.q)}`)
    .join('&');
};

const buildFullTextSearchQueryParam = (fullTextSearchQueryParams: BooksFilters) => {
  return Object.entries(fullTextSearchQueryParams)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}:${value}`)
    .join('+');
};
