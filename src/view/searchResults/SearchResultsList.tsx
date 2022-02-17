import React from 'react';
import { UseQueryResult } from 'react-query';
import { Author, Description, Image, Title, WrapperLi } from '../../styles/SearchResultsItem.styles';
import { Wrapper } from '../../styles/SearchResultsList.styles';
import { Book, BooksResponse } from '../../types/Book';
import { SearchResultsItem } from './SearchResultsItem';

interface SearchResultListProp {
  booksQuery: UseQueryResult<BooksResponse, unknown>;
}

export const SearchResultsList = ({ booksQuery }: SearchResultListProp) => {
  if (booksQuery.isLoading) {
    return <span>Loading..</span>;
  }

  return (
    <Wrapper>
      {(booksQuery.data?.items ?? []).map((book) => (
        <SearchResultsItem item={book} index={book.id} />
      ))}

      {/* {searchTitle != '' ? (booksQuery.data?.items ?? []).map((book) => <SearchResultsItem item={book} index={book.id} />) : <div>"hehe</div>} */}
      {/* <Image />
        <Title>The Shining</Title>
        <Author>Stephan King</Author>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo
          integer malesuada nunc vel risus commodo viverra maecenas. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
        </Description> */}
      {/* {Object.keys(searchResult).map((item: any, index: number) => (
        <SearchResultsItem item={item} index={index + 1} />
      ))} */}
    </Wrapper>
  );
};
