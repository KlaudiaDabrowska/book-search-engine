import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../styles/MainPage.styles';
import { SearchBookForm } from '../form/Form';
import { StyledCol } from '../../styles/StyledColumn.styles';
import { SearchResultsList } from '../searchResults/SearchResultsList';
import { useBooks } from '../../services/useBooks';
import { useSerachTabState } from '../state/useSearchTabState';

export const MainPage = () => {
  const { queryTitle, queryAuthor, setQueryTitle, setQueryAuthor } = useSerachTabState();
  // const booksQuery = useBooks({ inauthor: queryAuthor, intitle: queryTitle });
  const booksQuery = useBooks({});

  console.log(queryTitle);
  return (
    <Container fluid>
      <Row>
        <Header> Your bookshelf </Header>
        <StyledCol lg={4}>
          <SearchBookForm setQueryAuthor={setQueryAuthor} setQueryTitle={setQueryTitle} />
        </StyledCol>
        <Col lg={8}>
          <SearchResultsList searchTitle={queryTitle} searchAuthor={queryAuthor} isLoading={booksQuery.isLoading} />
          {/* <SearchResultsList searchResult={booksQuery.data?.items ?? []} isLoading={booksQuery.isLoading} /> */}
        </Col>
      </Row>
    </Container>
  );
};
