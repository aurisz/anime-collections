import { usePagination, DOTS } from '../../hooks/usePagination'
import styles from './Pagination.styles'
import type { Props } from './Pagination.types'

const Pagination = (props: Props) => {
  const {
    onPageChange,
    totalCount,
    currentPage,
    pageSize,
    siblingCount = 2,
  } = props

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
      {!isFirstPage && <li css={styles.item} onClick={onPrevious}>Prev</li>}
      {paginationRange.map(pageNumber => {
        if (pageNumber === DOTS) {
          return <li key={pageNumber} css={[styles.item, styles.dots]}>…</li>;
        }

        if (typeof pageNumber === 'number') {
          return (
            <li
              key={pageNumber}
              css={[styles.item, currentPage === pageNumber && styles.itemSelected]}
              onClick={() => onPageChange(pageNumber)}
            >
              {pageNumber}
            </li>
          );
        }
      })}
      {!isLastPage && <li css={styles.item} onClick={onNext}>Next</li>}
    </ul>
  );
};

export default Pagination
