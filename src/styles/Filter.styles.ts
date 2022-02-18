import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 50%;
  margin-top: 20%;
  margin-bottom: ${({ theme }) => theme.spacing.l};
  padding: 40px 40px 0px;
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border-radius: 20px;
  @media (max-width: 992px) {
    margin-top: 5%;
    margin-bottom: 0;
  }
  @media (max-width: 540px) {
    margin-top: 0;
    height: 80%;
  }
  @media (max-width: 360px) {
    height: 85%;
  }
`;

export const StyledInput = styled(Form.Control)`
  width: 100%;
  height: 55px;
  background-color: transparent;
  color: black;
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
  font-weight: 500;

  &:focus {
    border-bottom: 2px solid ${({ theme }) => theme.colors.borderColor};
    background-color: transparent;
    box-shadow: none;
  }
`;

export const StyledLabel = styled(FloatingLabel)`
  margin-bottom: ${({ theme }) => theme.spacing.m};
`;

export const StyledButton = styled(Button)`
  width: 80px;
  height: 40px;
  border: none;
  border-radius: 10px;
  margin-top: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.borderColor};
  align-self: center;

  &:hover,
  :active,
  :focus {
    background-color: #644f75;
  }
  @media (max-width: 360px) {
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
`;
