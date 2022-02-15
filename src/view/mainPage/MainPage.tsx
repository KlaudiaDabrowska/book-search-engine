import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Header } from '../../styles/MainPage.styles';
import { SearchBookForm } from '../Form/Form';
import { StyledCol } from '../../styles/StyledColumn.styles';
import { SearchResultsList } from '../searchResults/SearchResultsList';

export const MainPage = () => {
  return (
    <Container fluid>
      <Row>
        <Header> Your bookshelf </Header>
        <StyledCol lg={4}>
          <SearchBookForm />
        </StyledCol>
        <Col lg={8}>
          <SearchResultsList />
        </Col>
      </Row>
    </Container>
  );
};
