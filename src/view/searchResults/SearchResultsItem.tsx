import React from 'react';
import { Author, Description, Title, WrapperLi, Image } from '../../styles/SearchResultsItem.styles';
import { Book } from '../../types/Book';

interface SearchResultsItemProps {
  item: Book;
  index?: string;
}

export const SearchResultsItem = ({ item, index }: SearchResultsItemProps) => {
  return (
    <WrapperLi>
      <Image
        src={
          item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : 'https://cdn.pixabay.com/photo/2016/10/03/03/00/camera-1710849_960_720.png'
        }
      />
      <Title>{item.volumeInfo.title}</Title>
      <Author>{item.volumeInfo.authors}</Author>
      <Description>{item.volumeInfo.description}</Description>
    </WrapperLi>
  );
};
