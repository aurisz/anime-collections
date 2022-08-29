export interface AnimeListItem {
  id: number;
  title: {
    english: string;
  };
  coverImage: {
    large: string;
  };
}

export interface AnimeDetail extends AnimeListItem {
  bannerImage: string;
  description: string;
  genres: string[];
  averageScore: number;
  seasonYear: number;
  episodes: number;
  duration: number;
  trailer: {
    id: string;
  }
}

export interface AnimeCollection {
  name: string;
  list: AnimeListItem[];
}

export interface PageInfo {
  total: number;
  currentPage: number;
  lastPage: number;
  perPage: number;
}