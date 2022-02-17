import { useQuery } from 'react-query';
import { apiClient } from '../config/ApiClient';
import { BooksResponse } from '../types/Book';
import * as keys from './queryKeys';

interface UseBooksProps {
  intitle?: string;
  inauthor?: string;
}

export const useBooks = ({ inauthor, intitle }: UseBooksProps) => {
  const client = apiClient;
  console.log(intitle);
  return useQuery<BooksResponse>(keys.books(), async () => client.get(`/books/v1/volumes?q=intitle:${intitle}`).then((res) => res.data), {
    staleTime: Infinity,
  });
};
