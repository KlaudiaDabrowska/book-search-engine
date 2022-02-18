import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../styles/MainPage.styles';
import { SearchBookForm } from '../filter/Filter';
import { StyledCol } from '../../styles/StyledColumn.styles';
import { SearchResultsList } from '../searchResults/SearchResultsList';
import { useBooksState } from '../state/useBooksState';

export const MainPage = () => {
  const { booksQuery, setQueryTitle, setQueryAuthor } = useBooksState();

  return (
    <Container fluid>
      <Row>
        <Header> Your bookshelf </Header>
        <StyledCol lg={4}>
          <SearchBookForm setQueryAuthor={setQueryAuthor} setQueryTitle={setQueryTitle} />
        </StyledCol>
        <Col lg={8}>
          <SearchResultsList booksQuery={booksQuery} />
        </Col>
      </Row>
    </Container>
  );
};
