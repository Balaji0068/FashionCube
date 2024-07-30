
export default function Pagination({ nPages, currentPage, setCurrentPage }) {
  const pageNumbers = [...Array(nPages + 1).keys()].slice(1);
  const goToPrevPage = (e) => {
    e.preventDefault();
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };
  const goToNextPage = (e) => {
    e.preventDefault();
    if (currentPage !== nPages) setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <ul className="pagination mt-5 ">
        <li className="page-item "  >
          <button  className="page-link text-dark" onClick={goToPrevPage} >
            Previous
          </button>
        </li>
        {pageNumbers.map((pageNum) => (
          <li key={pageNum} className={`page-item ${currentPage === pageNum ? 'active' : ''}`}>
            <button
              className="page-link text-dark"
              onClick={(e) => {
                e.preventDefault();
                setCurrentPage(pageNum);
              }}
            >
              {pageNum}
            </button>
          </li>
        ))}
        <li className="page-item">
          <button  className="page-link text-dark" onClick={goToNextPage}>
            Next
          </button>
        </li>
      </ul>
    </div>
  );
}
