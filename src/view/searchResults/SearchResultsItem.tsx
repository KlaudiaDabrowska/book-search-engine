import { Author, Description, Title, WrapperItem, Image } from '../../styles/SearchResultsItem.styles';
import { Book } from '../../types/Book';
import { defaultImageUrl } from './defaultValues';

interface SearchResultsItemProps {
  item: Book;
  index?: string;
}

export const SearchResultsItem = ({ item }: SearchResultsItemProps) => {
  const description = item.volumeInfo.description;
  const trimmedDescription =
    description && description?.length > 300 ? description.replace(/^(.{300}[^\s]*).*/, '$1').concat('...') : description ?? 'No description';
  const authors = item.volumeInfo.authors?.join(' & ') ?? 'No authors';

  return (
    <WrapperItem>
      <Image src={item.volumeInfo.imageLinks?.thumbnail ?? defaultImageUrl} alt="book-image" />
      <Title>{item.volumeInfo.title}</Title>
      <Author>{authors}</Author>
      <Description>{trimmedDescription}</Description>
    </WrapperItem>
  );
};
