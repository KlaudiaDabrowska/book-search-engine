import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { UseInfiniteQueryResult } from 'react-query';
import { Wrapper } from '../../styles/SearchResultsList.styles';
import { BooksResponse } from '../../types/Book';
import { SearchResultsItem } from './SearchResultsItem';

interface SearchResultListProp {
  booksQuery: UseInfiniteQueryResult<BooksResponse, unknown>;
}

export const SearchResultsList = ({ booksQuery }: SearchResultListProp) => {
  if (booksQuery.isLoading) {
    return <span>Loading..</span>;
  }

  return (
    <Wrapper>
      <InfiniteScroll hasMore={booksQuery.hasNextPage} loadMore={() => booksQuery.fetchNextPage()}>
        {(booksQuery.data?.pages?.flatMap((page) => page.items) ?? []).map((book) => (
          <SearchResultsItem item={book} key={book.id} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};
