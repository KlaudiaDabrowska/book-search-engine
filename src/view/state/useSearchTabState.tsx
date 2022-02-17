import React, { useState } from 'react';

export const useSerachTabState = () => {
  const [queryTitle, setQueryTitle] = useState('');
  const [queryAuthor, setQueryAuthor] = useState('');

  return { queryAuthor, queryTitle, setQueryAuthor, setQueryTitle };
};
