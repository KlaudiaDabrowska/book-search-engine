import React from 'react';
import { Author, Description, Image, Title, WrapperLi } from '../../styles/SearchResultsItem.styles';
import { Wrapper } from '../../styles/SearchResultsList.styles';

export const SearchResultsList = () => {
  return (
    <Wrapper>
      <WrapperLi>
        <Image />
        <Title>The Shining</Title>
        <Author>Stephan King</Author>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies leo
          integer malesuada nunc vel risus commodo viverra maecenas. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam.
        </Description>
      </WrapperLi>
    </Wrapper>
  );
};
