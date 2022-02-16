import React from 'react';
import { Author, Description, Title, WrapperLi, Image } from '../../styles/SearchResultsItem.styles';
import { Book } from '../../types/Book';

interface SearchResultsItemProps {
  item: Book;
  index: string;
}

export const SearchResultsItem = ({ item, index }: SearchResultsItemProps) => {
  return (
    <WrapperLi>
      <Image />
      <Title>{item.volumeInfo.title}</Title>
      {/* <Author>Stephan King</Author>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo
        integer malesuada nunc vel risus commodo viverra maecenas. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
      </Description> */}
    </WrapperLi>
  );
};
