
export interface Props {
  id: number;
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
  bannerImage: string;
  description: string;
  genres: string[];
  trailer: {
    id: string;
  }
}