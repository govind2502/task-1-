// Props:
//   currentPage  - the page being shown now
//   totalPages   - how many pages exist
//   onPageChange - function to call with the new page number
function Pagination({ currentPage, totalPages, onPageChange }) {
  if (totalPages <= 1) return null; // nothing to paginate

  // Build [1, 2, 3, ...] up to totalPages
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <nav className="pagination" aria-label="Pagination">
      <button
        type="button"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {pageNumbers.map((number) => (
        <button
          type="button"
          key={number}
          className={number === currentPage ? "active" : ""}
          aria-current={number === currentPage ? "page" : undefined}
          onClick={() => onPageChange(number)}
        >
          {number}
        </button>
      ))}

      <button
        type="button"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </nav>
  );
}

export default Pagination;
