import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Loader = styled(Spinner)`
  position: relative;
  top: 36%;
  width: 100px;
  height: 100px;
`;

export const ErrorMessage = styled.h2`
  margin-top: 15px;
  color: ${({ theme }) => theme.colors.blackColor};
`;

export const WrapperErrorMessage = styled.div`
  height: 10%;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  position: relative;
  top: 36%;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 2px solid ${({ theme }) => theme.colors.blackColor};
  border-radius: 20px;
  @media (max-width: 992px) {
    height: 100%;
  }
`;
