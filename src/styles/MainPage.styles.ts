import styled from 'styled-components';

export const Header = styled.h1`
  color: #efe4de;
  font-size: ${({ theme }) => theme.fontSize.xl};
  text-transform: uppercase;
  margin-bottom: ${({ theme }) => theme.spacing.xl};

  @media (max-width: 411px) {
    font-size: 40px;
  }
`;
