import styled from 'styled-components';

interface ImageProps {
  src: string;
  alt: string;
}

export const WrapperItem = styled.li`
  display: grid;
  grid-template-columns: 0.6fr 1.4fr 1fr;
  grid-template-rows: 0.5fr 0.5fr 2fr;
  gap: 0px 0px;
  grid-template-areas:
    'image title title'
    'image author author'
    'image description description';
  margin-bottom: ${({ theme }) => theme.spacing.m};
  background-color: ${({ theme }) => theme.colors.backgroundColor};
  border: 2px solid ${({ theme }) => theme.colors.blackColor};
  border-radius: 20px;
  @media (max-width: 414px) {
    display: flex;
    flex-direction: column;
  }
`;

export const Description = styled.div`
  grid-area: description;
  margin: 20px 20px 20px 0;
  text-align: center;
  color: ${({ theme }) => theme.colors.borderColor};
  font-weight: bold;
  font-style: italic;
  @media (max-width: 1115px) {
    margin-top: ${({ theme }) => theme.spacing.s};
  }
  @media (max-width: 580px) {
    font-size: ${({ theme }) => theme.fontSize.xxs};
    margin-top: ${({ theme }) => theme.spacing.xs};
  }
  @media (max-width: 414px) {
    margin-left: ${({ theme }) => theme.spacing.m};
  }
`;

export const Image = styled.img<ImageProps>`
  width: 130px;
  height: 150px;
  grid-area: image;
  align-self: center;
  justify-content: center;
  background-image: ${({ src }) => `url(${src})`};
  background-position: center;
  margin-left: ${({ theme }) => theme.spacing.l};
  margin-right: ${({ theme }) => theme.spacing.s};

  @media (max-width: 1295px) {
    margin-left: ${({ theme }) => theme.spacing.m};
  }
  @media (max-width: 1070px) {
    width: 120px;
    height: 140px;
  }
  @media (max-width: 414px) {
    width: 100px;
    height: 120px;
    margin-top: ${({ theme }) => theme.spacing.m};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: bold;
  grid-area: title;
  margin-top: ${({ theme }) => theme.spacing.s};
  margin-bottom: ${({ theme }) => theme.spacing.xs};
  @media (max-width: 580px) {
    font-size: ${({ theme }) => theme.fontSize.m};
    margin-top: ${({ theme }) => theme.spacing.xs};
    margin-bottom: 0px;
  }
`;

export const Author = styled.p`
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.blackColor};
  font-size: ${({ theme }) => theme.fontSize.s};
  text-align: center;
  grid-area: author;
  @media (max-width: 580px) {
    font-size: ${({ theme }) => theme.fontSize.xs};
  }
`;
