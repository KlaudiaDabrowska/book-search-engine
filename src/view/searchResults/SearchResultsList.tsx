import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';
import { UseInfiniteQueryResult } from 'react-query';
import { Loader, Wrapper, ErrorMessage, WrapperErrorMessage } from '../../styles/SearchResultsList.styles';
import { BooksResponse } from '../../types/Book';
import { SearchResultsItem } from './SearchResultsItem';
import { v4 as uuidv4 } from 'uuid';

interface SearchResultListProp {
  booksQuery: UseInfiniteQueryResult<BooksResponse, unknown>;
}

export const SearchResultsList = ({ booksQuery }: SearchResultListProp) => {
  const flatData = booksQuery.data?.pages?.flatMap((page) => page.items ?? []) ?? [];

  if (booksQuery.isLoading) {
    return <Loader animation="border" variant="light" alt="spinner" />;
  }

  if (booksQuery.isError) {
    return (
      <WrapperErrorMessage>
        <ErrorMessage>Error occured. Please try again</ErrorMessage>
      </WrapperErrorMessage>
    );
  }

  if (booksQuery.dataUpdatedAt && flatData.length === 0) {
    return (
      <WrapperErrorMessage>
        <ErrorMessage>No books found</ErrorMessage>
      </WrapperErrorMessage>
    );
  }

  if (!booksQuery.dataUpdatedAt && flatData.length === 0) {
    return (
      <WrapperErrorMessage>
        <ErrorMessage>Use the form to find some books</ErrorMessage>
      </WrapperErrorMessage>
    );
  }

  return (
    <Wrapper>
      <InfiniteScroll hasMore={booksQuery.hasNextPage} loadMore={() => booksQuery.fetchNextPage()}>
        {flatData.map((book) => (
          <SearchResultsItem item={book} key={uuidv4()} />
        ))}
      </InfiniteScroll>
    </Wrapper>
  );
};
