import { useState } from 'react';
import { useBooks } from '../../services/useBooks';

export const useBooksState = () => {
  const [queryTitle, setQueryTitle] = useState<string>();
  const [queryAuthor, setQueryAuthor] = useState<string>();
  const [queryISBN, setQueryISBN] = useState<string>();
  const booksQuery = useBooks({ q: { intitle: queryTitle, inauthor: queryAuthor, isbn: queryISBN } });

  return { booksQuery, setQueryAuthor, setQueryTitle, setQueryISBN };
};
