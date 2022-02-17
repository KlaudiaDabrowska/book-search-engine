import { useState } from 'react';
import { useBooks } from '../../services/useBooks';

export const useBooksState = () => {
  const [queryTitle, setQueryTitle] = useState<string>();
  const [queryAuthor, setQueryAuthor] = useState<string>();
  const booksQuery = useBooks({ q: { intitle: queryTitle, inauthor: queryAuthor } });

  return { booksQuery, setQueryAuthor, setQueryTitle };
};
