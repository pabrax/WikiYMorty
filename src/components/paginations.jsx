import React from "react";

function PaginationBar({ counter, setCounter }) {
  const handlePreviousClick = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  const handleNextClick = () => {
    if (counter < 42) {
      setCounter(counter + 1);
    }
  };

  return (
    <div>
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className="page-item">
            {counter <= 0 ? (
              <></>
            ) : (
              <a className="page-link" onClick={handlePreviousClick} href="#">
                Previous
              </a>
            )}
          </li>
          <li className="page-item">
            {counter <= 0 ? (
              <></>
            ) : (
              <a className="page-link" onClick={handlePreviousClick} href="#">
                {counter - 1}
              </a>
            )}
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              {counter}
            </a>
          </li>
          <li className="page-item">
            {counter >= 42 ? (
              <></>
            ) : (
              <a className="page-link" onClick={handleNextClick} href="#">
                {counter + 1}
              </a>
            )}
          </li>
          <li className="page-item">
            {counter >= 42 ? (
              <></>
            ) : (
              <a className="page-link" onClick={handleNextClick} href="#">
                Next
              </a>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default PaginationBar;
