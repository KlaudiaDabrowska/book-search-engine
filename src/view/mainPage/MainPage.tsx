import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../styles/MainPage.styles';
import { SearchBookForm } from '../form/Form';
import { StyledCol } from '../../styles/StyledColumn.styles';
import { SearchResultsList } from '../searchResults/SearchResultsList';
import { useBooks } from '../../services/useBooks';

export const MainPage = () => {
  const booksQuery = useBooks({});

  return (
    <Container fluid>
      <Row>
        <Header> Your bookshelf </Header>
        <StyledCol lg={4}>{/* <SearchBookForm query={query} setQuery={setQuery} /> */}</StyledCol>
        <Col lg={8}>
          <SearchResultsList searchResult={booksQuery.data?.items ?? []} isLoading={booksQuery.isLoading} />
        </Col>
      </Row>
    </Container>
  );
};
