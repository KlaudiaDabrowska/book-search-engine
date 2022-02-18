import styled from 'styled-components';
import { Col } from 'react-bootstrap';

export const StyledCol = styled(Col)`
  border-right: 2px solid rgba(255, 255, 255, 0.5);
  height: 75vh;
  padding-right: 30px;
  @media (max-width: 992px) {
    border-bottom: 2px solid rgba(255, 255, 255, 0.5);
    border-right: none;
    padding-right: 0px;
    height: 70vh;
  }
`;
