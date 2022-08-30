import styles from './Pagination.styles'
import usePagination, { DOTS } from '../../hooks/usePagination'

type OnPageChange = (page: number) => void;
interface Props {
  totalCount: number;
  currentPage: number;
  pageSize: number;
  siblingCount?: number;
  onPageChange: OnPageChange;
}

const _renderPageNumber = (
  pageNumber: number, isCurrentPage: boolean, onPageChange: OnPageChange, index: number
) => (
  <li
    key={index}
    css={[styles.item, isCurrentPage && styles.itemSelected]}
    onClick={() => onPageChange(pageNumber)}
  >
    {pageNumber}
  </li>
)

const _renderDots = (index: number) => <li key={index} css={[styles.item, styles.dots]}>…</li>

const _renderPrevNext = (icon: string, onClick: () => void) => (
  <li key={icon} css={styles.item} onClick={onClick}>{icon}</li>
)

const Pagination = ({
  onPageChange,
  totalCount,
  currentPage,
  pageSize,
  siblingCount = 1,
}: Props) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
    siblingCount
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null
  }

  const onNext = () => {
    onPageChange(currentPage + 1)
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1)
  };

  const lastPage = paginationRange[paginationRange.length - 1]
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === lastPage

  return (
    <ul css={styles.container}>
      {!isFirstPage && _renderPrevNext('❮', onPrevious)}
      {paginationRange.map((pageNumber, index) => {
        if (pageNumber === DOTS) return _renderDots(index)

        if (typeof pageNumber === 'number') {
          const isCurrentPage = currentPage === pageNumber
          return _renderPageNumber(pageNumber, isCurrentPage, onPageChange, index)
        }

        return null
      })}
      {!isLastPage && _renderPrevNext('❯', onNext)}
    </ul>
  );
};

export default Pagination
