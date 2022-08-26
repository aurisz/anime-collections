export interface Props {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
  onPageChange: (page: number) => void;
}
