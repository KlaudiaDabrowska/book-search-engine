type BookId = string;
type Author = string;

export interface BooksResponse {
  kind: string;
  totalItems: number;
  items: Book[];
}

export interface Book {
  kind: string;
  id: BookId;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  subtitle: string;
  authors: Author[];
  publishedDate: Date;
  description: string;
}
