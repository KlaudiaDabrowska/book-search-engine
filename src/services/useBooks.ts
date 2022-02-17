import { useQuery } from 'react-query';
import { apiClient } from '../config/ApiClient';
import { BooksResponse } from '../types/Book';

export interface UseBooksProps {
  q: FullTextSearchQuery;
}

export interface FullTextSearchQuery {
  intitle?: string;
  inauthor?: string;
}

export const useBooks = (params: UseBooksProps) => {
  const client = apiClient;

  return useQuery<BooksResponse>([params], async () => client.get(`/books/v1/volumes?${buildQueryParams(params)}`).then((res) => res.data), {
    retry: 1,
  });
};

const buildQueryParams = (queryParams: UseBooksProps) => {
  return Object.entries(queryParams)
    .filter(([key, value]) => !!value && key !== 'q')
    .map(([key, value]) => `${key}=${value}`)
    .concat(`q=${buildFullTextSearchQueryParam(queryParams.q)}`)
    .join('&');
};

const buildFullTextSearchQueryParam = (fullTextSearchQueryParams: FullTextSearchQuery) => {
  return Object.entries(fullTextSearchQueryParams)
    .filter(([_, value]) => !!value)
    .map(([key, value]) => `${key}:${value}`)
    .join('+');
};
