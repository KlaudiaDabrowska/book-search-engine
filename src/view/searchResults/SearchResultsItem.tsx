import React from 'react';
import { Author, Description, Title, WrapperItem, Image } from '../../styles/SearchResultsItem.styles';
import { Book } from '../../types/Book';

interface SearchResultsItemProps {
  item: Book;
  index?: string;
}

export const SearchResultsItem = ({ item }: SearchResultsItemProps) => {
  const trimmedFn = () => {
    const description = item.volumeInfo.description;
    const maxLength = 300;

    if (description) {
      const trimmedDescription = description.substring(0, maxLength);
      const shortDescription = trimmedDescription.substring(0, Math.min(trimmedDescription.length, trimmedDescription.lastIndexOf(' ')));
      return shortDescription;
    } else {
      return 'description not found';
    }
  };

  const findAuthors = () => {
    if (item.volumeInfo.authors) {
      const separateAuthors = item.volumeInfo.authors.toString().replace(',', ' & ');
      return separateAuthors;
    } else {
      return null;
    }
  };
  return (
    <WrapperItem>
      <Image
        src={
          item.volumeInfo.imageLinks
            ? item.volumeInfo.imageLinks.thumbnail
            : 'https://cdn.pixabay.com/photo/2016/10/03/03/00/camera-1710849_960_720.png'
        }
      />
      <Title>{item.volumeInfo.title}</Title>
      <Author>{findAuthors()}</Author>
      <Description>{trimmedFn()}</Description>
    </WrapperItem>
  );
};
