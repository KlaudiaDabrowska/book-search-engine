import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../styles/MainPage.styles';
import { SearchBookFilter } from '../filter/Filter';
import { StyledCol } from '../../styles/StyledColumn.styles';
import { SearchResultsList } from '../searchResults/SearchResultsList';
import { useBooksState } from '../state/useBooksState';

export const MainPage = () => {
  const { booksQuery, setFilters } = useBooksState();

  return (
    <Container fluid>
      <Row>
        <Header> Your bookshelf </Header>
        <StyledCol lg={4}>
          <SearchBookFilter setFilters={setFilters} />
        </StyledCol>
        <Col lg={8}>
          <SearchResultsList booksQuery={booksQuery} />
        </Col>
      </Row>
    </Container>
  );
};
