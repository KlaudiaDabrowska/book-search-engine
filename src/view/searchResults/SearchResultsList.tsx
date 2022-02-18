import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { UseInfiniteQueryResult } from 'react-query';
import { Loader, Wrapper, ErrorMessage, WrapperErrorMessage } from '../../styles/SearchResultsList.styles';
import { BooksResponse } from '../../types/Book';
import { SearchResultsItem } from './SearchResultsItem';

interface SearchResultListProp {
  booksQuery: UseInfiniteQueryResult<BooksResponse, unknown>;
}

export const SearchResultsList = ({ booksQuery }: SearchResultListProp) => {
  return booksQuery.isLoading ? (
    <Loader animation="border" variant="light" />
  ) : booksQuery.isError ? (
    <WrapperErrorMessage>
      <ErrorMessage>Book not found</ErrorMessage>
    </WrapperErrorMessage>
  ) : (
    <Wrapper>
      <InfiniteScroll hasMore={booksQuery.hasNextPage} loadMore={() => booksQuery.fetchNextPage()}>
        {(booksQuery.data?.pages?.flatMap((page) => page.items) ?? []).map((book) => (
          <SearchResultsItem item={book} key={book.id} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};
