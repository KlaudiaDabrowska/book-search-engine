import { useQuery } from 'react-query';
import { apiClient } from '../config/ApiClient';
import { BooksResponse } from '../types/Book';
import * as keys from './queryKeys';

interface UseBooksProps {
  intitle?: string;
  inauthor?: string;
}

export const useBooks = (props: UseBooksProps) => {
  const client = apiClient;
  return useQuery<BooksResponse>(keys.books(), async () => client.get(`/books/v1/volumes?q=inauthor:Steve+intitle:Code`).then((res) => res.data), {
    staleTime: Infinity,
  });
};
