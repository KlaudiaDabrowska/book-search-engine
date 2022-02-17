import React from 'react';
import { useBooks } from '../../services/useBooks';
import { Author, Description, Image, Title, WrapperLi } from '../../styles/SearchResultsItem.styles';
import { Wrapper } from '../../styles/SearchResultsList.styles';
import { Book } from '../../types/Book';
import { SearchResultsItem } from './SearchResultsItem';

interface SearchResultListProp {
  // searchResult: Book[] | undefined;
  searchTitle: string;
  searchAuthor: string;
  isLoading: boolean;
  // errorMessage: string | undefined;
}

export const SearchResultsList = ({ searchTitle, searchAuthor, isLoading }: SearchResultListProp) => {
  const booksQuery = useBooks({ intitle: searchTitle, inauthor: searchAuthor });

  if (isLoading) {
    return <span>Loading..</span>;
  }

  console.log(booksQuery);
  // console.log(booksQuery.data?.items);
  console.log(searchTitle);

  return (
    <Wrapper>
      {(booksQuery.data?.items ?? []).map((book) => (
        <SearchResultsItem item={book} index={book.id} />
      ))}
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
