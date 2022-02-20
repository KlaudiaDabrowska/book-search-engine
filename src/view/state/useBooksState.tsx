import { useState } from 'react';
import { useBooks } from '../../services/useBooks';

export interface BooksFilters {
  intitle?: string;
  inauthor?: string;
  isbn?: string;
}

export const useBooksState = () => {
  const [filters, setFilters] = useState<BooksFilters>({});

  const booksQuery = useBooks({ q: filters });

  return { booksQuery, setFilters };
};
